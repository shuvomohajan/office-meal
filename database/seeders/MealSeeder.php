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
        \App\Models\Meal::insert([
            [
                'catering_id' => 1,
                'name' => 'Regular',
                'price' => 90,
            ],
            [
                'catering_id' => 1,
                'name' => 'Beef',
                'price' => 120,
            ],
            [
                'catering_id' => 1,
                'name' => 'Special',
                'price' => 180,
            ],
            [
                'catering_id' => 2,
                'name' => 'Regular',
                'price' => 90,
            ],
            [
                'catering_id' => 2,
                'name' => 'Special',
                'price' => 180,
            ],
        ]);

        $meals = \App\Models\Meal::get('id');
        $users = \App\Models\User::take(5)->get('id');

        // Assign meals to users randomly for 3 days
        for ($i = 0; $i < 3; $i++) {
            foreach ($users as $user) {
                $user->meals()->attach($meals->random());
            }
        }
    }
}
