<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserPaymentRequest;
use App\Http\Requests\UpdateUserPaymentRequest;
use App\Models\UserPayment;

class UserPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserPaymentRequest $request)
    {
        UserPayment::create($request->validated());

        return back()->with('success', 'Payment added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(UserPayment $userPayment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserPaymentRequest $request, UserPayment $userPayment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserPayment $userPayment)
    {
        //
    }
}
