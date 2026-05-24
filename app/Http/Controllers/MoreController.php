<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CoachingSupport;
use App\Models\WaqfRunHostel;
use App\Models\MinorityScheme;
use App\Models\ImportantWebLink;
use App\Models\AdmissionSupport;


class MoreController extends Controller
{
    public function scholarshipsOverview()
    {
        return inertia('Frontend/More/scholarships-overview');
    }

    // public function counsellorsDirectory()
    // {
    //     $counsellors = User::with('counselorDetail')
    //         ->where('role', 'counselor')
    //         ->get();


    //     // Group counsellors by subject (safe null check)
    //     $grouped = $counsellors->groupBy(function ($user) {
    //         return optional($user->counselorDetail)->subject ?? 'Others';
    //     });

    //     $result = [];
    //     $counter = 1;

    //     foreach ($grouped as $subject => $users) {
    //         $result[] = [
    //             'no' => $counter++,
    //             'subject' => $subject,
    //             'persons' => $users->map(function ($user) {
    //                 return [
    //                     'name'          => $user->name,
    //                     'qualification' => optional($user->counselorDetail)->qualification ?? '',
    //                     'phone'         => $user->mobile ?? '',
    //                     'email'         => $user->email,
    //                 ];
    //             })->values(),
    //         ];
    //     }

    //    // dd($result);

    //     return inertia('Frontend/More/counsellorsDirectory', [
    //         'groups' => $result,
    //     ]);
    // }

    public function counsellorsDirectory()
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

    return inertia('Frontend/More/counsellorsDirectory', [
        'groups' => $result,
    ]);
}





    public function jobsOpportunities()
    {
        return inertia('Frontend/More/jobs-opportunities');
    }

    public function admissionSupport()
    {
           $connectingPoints = AdmissionSupport::where('category', 'Connecting')
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get();

            $indianUniversities = AdmissionSupport::where('category', 'Indian University')
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get();

            $foreignUniversities = AdmissionSupport::where('category', 'Foreign University')
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get();

            return inertia('Frontend/More/admission-support', [
                'connectingPoints' => $connectingPoints,
                'indianUniversities' => $indianUniversities,
                'foreignUniversities' => $foreignUniversities,
            ]);
    }
    
    public function coachingSupport()
    {
       $supports = CoachingSupport::where('is_active', 1)
        ->orderBy('sort_order')
        ->get();

        // Transform into required frontend format
        $data = $supports->map(function ($item, $index) {
            return [
                'no'          => $index + 1,
                'subject'     => $item->subject,
                'institution' => $item->institution_name,
                'web'         => $item->web_contact,
                'note'        => $item->note
            ];
        });

        return inertia('Frontend/More/coaching-support', [
            'supports' => $data,
        ]);
    }   

    public function waqfRunHostel()
    {

       $hostels = WaqfRunHostel::orderBy('id')->get();

        $data = $hostels->map(function ($item, $index) {
            return [
                'no'      => $index + 1,
                'name'    => $item->name,
                'address' => $item->address,
                'seats'   => $item->seat_capacity,
                'contact' => $item->contact_no,
            ];
        });

        return inertia('Frontend/More/waqf-run-hostel', [
            'hostels' => $data,
        ]);
    }

    public function importantWebLinks()
    {
        $links = ImportantWebLink::orderBy('subject')->get();

        return inertia('Frontend/More/important-web-links', [
            'schoolLinks'   => $links->where('category', 'School')->values(),
            'collegeLinks'  => $links->where('category', 'College')->values(),
            'universityLinks' => $links->where('category', 'University')->values(),
            'resultLinks'   => $links->where('category', 'Results & Exams')->values(),
            'jobNewsLinks'  => $links->where('category', 'Current Affairs & Job News')->values(),
            'minorityLinks' => $links->where('category', 'Minority & Govt Websites')->values(),
        ]);
    }   

    public function minoritySchemes()
    {
        $schemes = MinorityScheme::orderBy('id')->get();

        $data = $schemes->map(function ($item, $index) {
            return [
                'no'      => $index + 1,
                'subject' => $item->subject,
                'link'    => $item->web_link,
            ];
        });

        return inertia('Frontend/More/minority-schemes', [
            'schemes' => $data,
        ]);
    }
    
}
