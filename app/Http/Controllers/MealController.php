<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMealRequest;
use App\Http\Requests\UpdateMealRequest;
use App\Models\Meal;
use Inertia\Inertia;

class MealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Meals', [
            'meals' => Meal::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMealRequest $request)
    {
        $meal = Meal::create($request->validated());

        if ($request->hasFile('image')) {
            $meal->addMediaFromRequest('image')->toMediaCollection();
        }

        return back()->with('success', 'Meal created.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMealRequest $request, Meal $meal)
    {
        $meal->update($request->validated());

        if ($request->hasFile('image')) {
            $meal->addMediaFromRequest('image')->toMediaCollection();
        }

        return back()->with('success', 'Meal updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Meal $meal)
    {
        $meal->delete();

        return back()->with('success', 'Meal deleted.');
    }
}
