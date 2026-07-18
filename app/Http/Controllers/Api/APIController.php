<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MinorityScheme;
use App\Models\WaqfRunHostel;
use App\Models\AdmissionSupport;
use App\Models\CoachingSupport;
use App\Models\ImportantWebLink;
use App\Models\Menu;

use App\Models\HeroSlide;
use App\Models\LeaderMessage;
use App\Models\News;
use App\Models\CareerDomain;
use App\Models\LoanSection;
use App\Models\EducationLoan;
use App\Models\NationalFellowship;
use App\Models\Scholarship;
use App\Models\ScholarshipRate;
use App\Models\ScholarshipOverviewTable;


use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

use App\Models\JobSector;


class APIController extends Controller
{
    //

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

        return response()->json([
            'status'  => true,
            'message' => 'Minority schemes fetched successfully.',
            'data'    => $data,
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

        return response()->json([
            'status'  => true,
            'message' => 'Waqf-run hostels fetched successfully.',
            'data'    => $data,
        ]);
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

            return response()->json([
                'status'  => true,
                'message' => 'Admission support information fetched successfully.',
                'data'    => [
                    'connectingPoints' => $connectingPoints,
                    'indianUniversities' => $indianUniversities,
                    'foreignUniversities' => $foreignUniversities,
                ],
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

        return response()->json([
            'status'  => true,
            'message' => 'Coaching support information fetched successfully.',
            'data'    => $data,
        ]);
    } 
    
    
    public function importantWebLinks()
    {
        $links = ImportantWebLink::orderBy('subject')->get();

        return response()->json([
            'status'  => true,
            'message' => 'Important web links fetched successfully.',
            'data'    => [
                'schoolLinks'      => $links->where('category', 'School')->values(),
                'collegeLinks'     => $links->where('category', 'College')->values(),
                'universityLinks'  => $links->where('category', 'University')->values(),
                'resultLinks'      => $links->where('category', 'Results & Exams')->values(),
                'jobNewsLinks'     => $links->where('category', 'Current Affairs & Job News')->values(),
                'minorityLinks'    => $links->where('category', 'Minority & Govt Websites')->values(),
            ],
        ]);
    }

   public function menus()
    {
        $menus = Menu::select(
                'id',
                'key',
                'label',
                'slug',
                'href',
                'parent_id'
            )
            ->whereNull('parent_id')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->with([
                'children' => function ($query) {
                    $query->select(
                        'id',
                        'parent_id',
                        'key',
                        'label',
                        'slug',
                        'href'
                    )
                    ->where('is_active', true)
                    ->orderBy('sort_order');
                }
            ])
            ->get();

        return response()->json([
            'status'  => true,
            'message' => 'Menus fetched successfully.',
            'data'    => $menus,
        ]);
    }


    public function home()
    {
       // dd('home');
        return response()->json([
            'status' => true,
            'message' => 'Home data fetched successfully.',
            'data' => [
               'sliders' => HeroSlide::orderBy('order')
                ->get()
                ->map(function ($slider) {
                    $slider->img_base = asset('storage/' . $slider->img_base);
                    return $slider;
                }),

                'leaders' => LeaderMessage::where('is_blocked', false)
                    ->orderBy('id', 'desc')
                    ->get()
                    ->map(function ($leader) {
                        $leader->image = asset('storage/' . $leader->image);
                        return $leader;
                    }),

                'news' => News::orderBy('date', 'desc')->get(),

                'career_domains' => CareerDomain::orderBy('id', 'asc')
                ->get()
                ->map(function ($domain) {
                    $domain->image = asset('storage/' . $domain->image);
                    return $domain;
                }),
                   

                'loan_schemes' => LoanSection::orderBy('id', 'asc')
                    ->get(),
            ]
        ]);


    }


    public function newsUpdates(): JsonResponse
    {
        $news = News::orderBy('date', 'desc')->get();

        return response()->json([
            'success' => true,
            'message' => 'News fetched successfully.',
            'data' => $news->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'slug' => $item->slug,
                    'date' => Carbon::parse($item->date)->format('M d, Y'),
                    'description' => $item->description,
                    'image' => $item->image,
                    'link' => route('news.updates', [
                        'news' => $item->slug
                    ]),
                    'category' => $item->category,
                ];
            })->values(),
        ]);
    }


    public function jobOpportunity(): JsonResponse
    {
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

        return response()->json([
            'JOB_OPPORTUNITIES_SECTORS' => $sectors,
            'JOBS_AFTER_CLASS_8' => $afterClass8,
        ]);
    }

    public function educationLoan(): JsonResponse
    {
        $loan = EducationLoan::where('is_active', true)->first();

        abort_unless($loan, 404);

        return response()->json(['data' => $loan]);
    }


    /**
     * GET /api/national-fellowships
     *
     * Query params:
     *   category — filter by exact category (see NationalFellowship::CATEGORIES)
     *   search   — matches name/organization
     *   per_page — default 20, max 100
     */
    public function nationalFellowships(Request $request): JsonResponse
    {
        $query = NationalFellowship::where('is_active', true);

        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('organization', 'like', '%' . $request->search . '%');
            });
        }

        $perPage = min((int) $request->input('per_page', 20), 100);

        $items = $query
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate($perPage)
            ->withQueryString();

        return response()->json([
            'data' => $items->items(),
            'meta' => [
                'current_page' => $items->currentPage(),
                'last_page' => $items->lastPage(),
                'per_page' => $items->perPage(),
                'total' => $items->total(),
            ],
            'categories' => NationalFellowship::CATEGORIES,
        ]);
    }

    /**
     * GET /api/national-fellowships/{nationalFellowship}
     */
    public function nationalFellowship(NationalFellowship $nationalFellowship): JsonResponse
    {
        abort_unless($nationalFellowship->is_active, 404);

        return response()->json(['data' => $nationalFellowship]);
    }


    public function moreScholarship(Request $request)
    {
        $scholarships = Scholarship::where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'name',
                'category',
                'criteria',
                'award',
                'eligibility',
                'when_to_apply',
                'application',
                'links',
            ]);

        return response()->json([
            'success' => true,
            'message' => 'Scholarships fetched successfully.',
            'data' => $scholarships,
        ]);
    }


public function scholarshipRates()
{
    $rates = ScholarshipRate::where('is_active', true)
        ->orderBy('sort_order')
        ->get();

    $data = $rates->map(function ($rate) {
        return [
            'no' => (int) $rate->no,
            'type' => $rate->type,
            'classOfStudy' => $rate->class_of_study,

            'dayScholar' => [
                'admissionTuitionFee'   => (int) ($rate->day_admission_tuition_fee ?? 0),
                'maintenanceAllowance'  => (int) ($rate->day_maintenance_allowance ?? 0),
                'total'                 => (int) ($rate->day_total ?? 0),
            ],

            'hosteller' => [
                'admissionTuitionFee'   => (int) ($rate->hostel_admission_tuition_fee ?? 0),
                'maintenanceAllowance'  => (int) ($rate->hostel_maintenance_allowance ?? 0),
                'total'                 => (int) ($rate->hostel_total ?? 0),
            ],
        ];
    });

    return response()->json([
        'success' => true,
        'data' => $data,
    ]);
}



public function scholarshipOverviewTable()
{
    $overview = ScholarshipOverviewTable::where('is_active', true)
        ->orderBy('sort_order')
        ->get();

    $data = $overview->map(function ($item) {
        return [
            'name' => $item->name ?? '',
            'classOfStudy' => $item->class_of_study ?? '',
            'website' => $item->website ?? '',
            'minMarks' => $item->minimum_marks ?? '',
            'income' => $item->annual_family_income ?? '',
        ];
    });

    return response()->json([
        'success' => true,
        'data' => $data,
    ]);
}





    



}
