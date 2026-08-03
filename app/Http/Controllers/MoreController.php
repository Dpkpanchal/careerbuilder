<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CoachingSupport;
use App\Models\WaqfRunHostel;
use App\Models\MinorityScheme;
use App\Models\ImportantWebLink;
use App\Models\AdmissionSupport;
use App\Models\JobSector;
use Inertia\Inertia;
use Inertia\Response;


class MoreController extends Controller
{
    public function scholarshipsOverview()
    {
        return inertia('Frontend/More/scholarships-overview');
    }


public function counsellorsDirectory()
{
    $counsellors = User::with('counselorDetails')
        ->where('role', 'counselor')
        ->where('is_active', true)
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



   public function jobsOpportunities(): Response
    {
        // Short tab labels shown in the sticky tab bar (the sector's
        // `title` in the DB is the longer heading used on the page itself).
        $tabLabels = [
            'government' => 'Government',
            'banking' => 'Banking',
            'defence' => 'Defence',
            'teaching' => 'Teaching',
            'engineering' => 'Engineering',
            'railway' => 'Railway',
        ];

        $sectors = JobSector::where('key', '!=', 'after-class-8')
            ->orderBy('sort_order')
            ->with([
                'groups' => fn ($q) => $q->orderBy('sort_order'),
                'groups.links' => fn ($q) => $q->orderBy('sort_order'),
                'groups.rows' => fn ($q) => $q->orderBy('sort_order'),
            ])
            ->get()
            ->map(fn ($sector) => [
                'id' => $sector->key,
                'label' => $tabLabels[$sector->key] ?? $sector->title,
                'title' => $sector->title,
                'note' => $sector->note,
                'groups' => $sector->groups->map(fn ($group) => [
                    'recruitedBy' => $group->label,
                    'website' => $group->website ?? '',
                    'rows' => $group->rows->map(fn ($row) => [
                        'post' => $row->post,
                        'eligibility' => $row->eligibility,
                    ])->values(),
                    'sublinks' => $group->links->map(fn ($link) => [
                        'label' => $link->label,
                        'href' => $link->href,
                    ])->values(),
                ])->values(),
            ])
            ->values();

        $afterClass8Sector = JobSector::where('key', 'after-class-8')
            ->with([
                'groups' => fn ($q) => $q->orderBy('sort_order'),
                'groups.rows' => fn ($q) => $q->orderBy('sort_order'),
            ])
            ->firstOrFail();

        $afterClass8 = [
            'id' => $afterClass8Sector->key,
            'title' => $afterClass8Sector->title,
            'note' => $afterClass8Sector->note,
            'groups' => $afterClass8Sector->groups->map(fn ($group) => [
                'typeOfJob' => $group->label,
                'rows' => $group->rows->map(fn ($row) => [
                    'recruitedBy' => $row->recruited_by,
                    'website' => $row->website ?? '',
                    'post' => $row->post,
                    'eligibility' => $row->eligibility,
                ])->values(),
            ])->values(),
        ];

       // dd($sectors);
        return Inertia::render('Frontend/More/jobs-opportunities', [
            'sectors' => $sectors,
            'afterClass8' => $afterClass8,
        ]);
    }

    // public function jobsOpportunities()
    // {
       
    //     return inertia('Frontend/More/jobs-opportunities');
    // }

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
