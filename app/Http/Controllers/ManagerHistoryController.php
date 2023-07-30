<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreManagerHistoryRequest;
use App\Http\Requests\UpdateManagerHistoryRequest;
use App\Models\ManagerHistory;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ManagerHistoryController extends Controller
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
    public function store(StoreManagerHistoryRequest $request)
    {
        $today = date('Y-m-d');
        $start_date = Carbon::parse($request->start_date)->format('Y-m-d');

        DB::transaction(function () use ($request, $today, $start_date) {
            if ($today >= $start_date && $today <= $request->end_date) {
                User::whereRoleId(2)->update(['role_id' => User::role['USER']]);
                User::find($request->user_id)->update(['role_id' => User::role['MANAGER']]);
            }

            ManagerHistory::create($request->validated());
        });

        return back()->with('success', 'Manager selected.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManagerHistoryRequest $request, ManagerHistory $managerHistory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ManagerHistory $managerHistory)
    {
        //
    }
}
