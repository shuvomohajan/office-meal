<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'role_id' => User::role['SUPER_ADMIN'],
            'name' => 'Super Admin',
            'phone' => '01838501660',
            'email' => 'super@mail.com',
            'status' => 1,
        ]);
    }
}
