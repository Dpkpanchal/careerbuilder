<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{


public function counsellors()
{
    $counsellors = User::with('counselorDetails')
        ->where('role', 'counselor')
        ->get();

    /*
     |--------------------------------------------------------------------------
     | Step 1: Flatten data to subject-based rows
     |--------------------------------------------------------------------------
     */
    $rows = collect();

    foreach ($counsellors as $user) {
        foreach ($user->counselorDetails as $detail) {
            $rows->push([
                'subject'       => $detail->subject ?? 'Others',
                'name'          => $user->name,
                'qualification' => $detail->qualification ?? '',
                'phone'         => $user->mobile ?? '',
                'email'         => $user->email,
            ]);
        }
    }

    /*
     |--------------------------------------------------------------------------
     | Step 2: Group by subject
     |--------------------------------------------------------------------------
     */
    $grouped = $rows->groupBy('subject');

    /*
     |--------------------------------------------------------------------------
     | Step 3: Format response
     |--------------------------------------------------------------------------
     */
    $result = [];
    $counter = 1;

    foreach ($grouped as $subject => $persons) {
        $result[] = [
            'no' => $counter++,
            'subject' => $subject,
            'persons' => $persons->map(function ($person) {
                return [
                    'name'          => $person['name'],
                    'qualification' => $person['qualification'],
                    'phone'         => $person['phone'],
                    'email'         => $person['email'],
                ];
            })->values(),
        ];
    }

    return response()->json([
        'status'  => true,
        'message' => 'Counselors fetched successfully.',
        'data'    => $result,
    ]);
}


}
