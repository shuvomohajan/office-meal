<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\DB;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Meal>
 */
class MealFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cateringIds = DB::table('caterings')->get(['id'])->pluck('id')->toArray();

        return [
            'catering_id' => fake()->randomElement($cateringIds),
            'name' => fake()->name(),
            'price' => fake()->randomFloat(2, 60, 100),
        ];
    }
}
