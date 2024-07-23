<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Catering;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CateringResource;
use App\Http\Requests\StoreCateringRequest;
use App\Http\Requests\UpdateCateringRequest;

class CateringController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $caterings = CateringResource::collection(Catering::with('media', 'meals')->latest()->paginate(10));

        return Inertia::render('Caterings/index', compact('caterings'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCateringRequest $request)
    {
        DB::transaction(function () use ($request) {
            $catering = Catering::create($request->validated());

            $catering->meals()->createMany($request->validated()['meals']);

            if ($request->hasFile('logo')) {
                $catering->addMediaFromRequest('logo')->toMediaCollection('logo');
            }

            if ($request->hasFile('meal_menu')) {
                $catering->addMediaFromRequest('meal_menu')->toMediaCollection('meal_menu');
            }
        });

        return back()->with('success', 'Catering created.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCateringRequest $request, Catering $catering)
    {
        DB::transaction(function () use ($request, $catering) {
            $catering->update($request->validated());

            foreach ($request->validated()['meals'] as $meal) {
                $catering->meals()->updateOrCreate([
                    'id' => $meal['id'],
                    'catering_id' => $catering->id
                ], $meal);
            }

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
        });

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
