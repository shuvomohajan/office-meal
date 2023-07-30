<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = UserResource::collection(User::with('media')
        ->where('role_id', '!=', User::role['SUPER_ADMIN'])
        ->latest()
        ->paginate(10));

        return Inertia::render('Users/index', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $user = User::create($request->validated() + [
            'password' => bcrypt($request->phone),
        ]);

        if ($request->hasFile('image')) {
            $user->addMediaFromRequest('image')->toMediaCollection('image');
        }

        return back()->with('success', 'User created.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update($request->validated());

        if ($request->remove_image) {
            $user->clearMediaCollection('image');
        }

        if ($request->hasFile('image')) {
            $user->addMediaFromRequest('image')->toMediaCollection('image');
        }

        return back()->with('success', 'User updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        if ($user->role_id === User::role['SUPER_ADMIN']) {
            return back()->with('error', 'You can not delete super admin.');
        }

        $user->delete();

        return back()->with('success', 'User deleted.');
    }
}
