<?php

use App\Http\Controllers\CateringController;
use App\Http\Controllers\CateringPaymentController;
use App\Http\Controllers\ManagerHistoryController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserPaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('caterings', CateringController::class)->except(['create', 'edit', 'show']);
    Route::resource('catering-payments', CateringPaymentController::class)->except(['create', 'edit', 'show']);
    Route::resource('meals', MealController::class)->except(['create', 'edit', 'show']);
    Route::resource('users', UserController::class)->except(['create', 'edit', 'show']);
    Route::resource('user-payments', UserPaymentController::class)->except(['create', 'edit', 'show']);
    Route::resource('manager-histories', ManagerHistoryController::class)->except(['create', 'edit', 'show']);
});
