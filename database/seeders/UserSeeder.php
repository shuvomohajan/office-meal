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
        User::factory()->create([
            'role_id' => User::role['SUPER_ADMIN'],
            'name' => 'Super Admin',
            'phone' => '01838501660',
            'email' => 'super@gmail.com',
        ]);

        $currentTime = now();

        $usersArray = [
            [
                'name' => 'Abdul kaium',
                'email' => 'kaium@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Ovi Rahman',
                'email' => 'ovi@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Shuvo Mohajan',
                'email' => 'shuvo@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Arif Uddin',
                'email' => 'arif@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Shakawat Hossain',
                'email' => 'shakawat@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Tanvir Hossain',
                'email' => 'tanvir@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Mazharul Islam',
                'email' => 'mazharul@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Khowaiz Ahmed',
                'email' => 'khowaiz@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Onie Datta',
                'email' => 'onie@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Shimul Chakraborty',
                'email' => 'shimul@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Maruf Islam',
                'email' => 'maruf@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Abbas Uddin',
                'email' => 'abbas@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Nur Alam',
                'email' => 'nur@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Jishad Ahmed',
                'email' => 'jishad@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Rishad Ahmed',
                'email' => 'rishad@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Fahim Ahmed',
                'email' => 'fahim@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],
            [
                'name' => 'Niloy Das',
                'email' => 'niloy@bitcode.pro',
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'created_at' => $currentTime,
                'updated_at' => $currentTime,
            ],

        ];

        User::insert($usersArray);
    }
}
