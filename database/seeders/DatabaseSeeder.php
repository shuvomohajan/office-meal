<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Catering;
use Illuminate\Database\Seeder;
use PhpParser\Node\Expr\Cast;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CateringSeeder::class,
            MealSeeder::class,
            UserSeeder::class,
        ]);
    }
}
