<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MealSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Meal::factory()->create([
            'catering_id' => 1,
            'name' => 'Test Meal',
            'price' => 100,
        ]);
    }
}
