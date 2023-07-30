<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCateringRequest;
use App\Http\Requests\UpdateCateringRequest;
use App\Http\Resources\CateringResource;
use App\Models\Catering;
use Inertia\Inertia;

class CateringController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $caterings = CateringResource::collection(Catering::with('media')->latest()->paginate(10));

        return Inertia::render('Caterings/index', compact('caterings'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCateringRequest $request)
    {
        $catering = Catering::create($request->validated());

        if ($request->hasFile('logo')) {
            $catering->addMediaFromRequest('logo')->toMediaCollection('logo');
        }

        if ($request->hasFile('meal_menu')) {
            $catering->addMediaFromRequest('meal_menu')->toMediaCollection('meal_menu');
        }

        return back()->with('success', 'Catering created.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCateringRequest $request, Catering $catering)
    {
        $catering->update($request->validated());

        if ($request->remove_logo) {
            $catering->clearMediaCollection('logo');
        }

        if ($request->remove_meal_menu) {
            $catering->clearMediaCollection('meal_menu');
        }

        if ($request->hasFile('logo')) {
            $catering->addMediaFromRequest('logo')->toMediaCollection('logo');
        }

        if ($request->hasFile('meal_menu')) {
            $catering->addMediaFromRequest('meal_menu')->toMediaCollection('meal_menu');
        }

        return back()->with('success', 'Catering updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Catering $catering)
    {
        $catering->delete();

        return back()->with('success', 'Catering deleted.');
    }
}
