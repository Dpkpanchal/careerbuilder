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
use App\Models\CareerContent;
use App\Models\StudentSupport;
use App\Models\EduFundSection;
use App\Models\CourseContent;
use App\Models\User;
use App\Models\ItiCollege;
use App\Models\ScholarshipOverview;
use App\Models\LandingPageContent;


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

                // 'loan_schemes' => [
                // 'fact_cards' => LoanSection::where('type', 'fact_card')
                //     ->orderBy('order')
                //     ->get(['id', 'icon', 'title', 'description', 'order']),

                // 'schemes' => LoanSection::where('type', 'scheme')
                //     ->orderBy('order')
                //     ->get(['id', 'short', 'link', 'order']),
                //  ],
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

    // public function careerContent(Request $request)
    // {
    //     $request->validate([
    //         'slug' => 'required|string',
    //     ]);

    //     $career = CareerContent::where('url', $request->slug)
    //         ->where('is_active', true)
    //         ->first();

    //     if (!$career) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Career content not found.'
    //         ], 404);
    //     }


    //     $data = [
    //         'id' => $career->id,
    //         'slug' => $career->url,
    //         // These fields are now available for ALL career pages
    //         'iti_itc_jrpolitecnic' => ItiCollege::with('trades')->orderBy('name')->get(),
    //         'scholarship' => [],
    //         'career_counsellors' => $this->getCounsellors(),
    //     ];


    //     // Define which fields to return for each URL pattern
    //     $fieldMapping = [
    //         'careers/after-class-8' => [
    //             'education_pathways',
    //             'vocational_courses',
    //             'iti_itc_jrpolitecnic',
    //             'scholarship',
    //             'career_counsellors'
    //         ],
    //         'careers/after-class-10' => [
    //             'overview',
    //             'stream_selection',
    //             'vocational_courses',
    //             'iti_itc_jrpolitecnic',
    //             'scholarship',
    //             'career_counsellors'
    //         ],
    //         'careers/after-class-12-arts' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //         'careers/after-class-12-commerce' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //         'careers/after-class-12-science' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //         'careers/after-class-12-engineering' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //         'careers/after-class-12-medical' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //         'careers/after-graduation' => ['overview_tree','related_exams','top_colleges_and_universities'],
    //     ];

    //     $url = $career->url;
    //     $fields = $fieldMapping[$url] ?? null;

    //     if ($fields) {
    //         foreach ($fields as $field) {
    //             $data[$field] = $career->$field;
    //         }
    //     } else {
    //         // Default fields for other content types
    //         $data['domains'] = $career->branch_groups;
    //         $data['pathways'] = $career->pathways;
    //         $data['courses'] = $career->courses;
    //         $data['exams'] = $career->exams;
    //         $data['institutes'] = $career->institute_links;
    //         $data['industries'] = $career->industries;
    //         $data['roles'] = $career->role_examples;
    //     }

    //     return response()->json([
    //         'success' => true,
    //         'data' => $data,
    //     ]);
    // }

    public function careerContent(Request $request)
    {
        $request->validate([
            'slug' => 'required|string',
        ]);

        $career = CareerContent::where('url', $request->slug)
            ->where('is_active', true)
            ->first();

        if (!$career) {
            return response()->json([
                'success' => false,
                'message' => 'Career content not found.'
            ], 404);
        }

        $data = [
            'id' => $career->id,
            'slug' => $career->url,
        ];

        // Define which fields to return for each URL pattern
        $fieldMapping = [
            'careers/after-class-8' => [
                'education_pathways',
                'vocational_courses',
            ],
            'careers/after-class-10' => [
                'overview',
                'stream_selection',
                'vocational_courses',
            ],
            'careers/after-class-12-arts' => ['overview_tree','related_exams','top_colleges_and_universities'],
            'careers/after-class-12-commerce' => ['overview_tree','related_exams','top_colleges_and_universities'],
            'careers/after-class-12-science' => ['overview_tree','related_exams','top_colleges_and_universities'],
            'careers/after-class-12-engineering' => ['overview_tree','related_exams','top_colleges_and_universities'],
            'careers/after-class-12-medical' => ['overview_tree','related_exams','top_colleges_and_universities'],
            'careers/after-graduation' => ['overview_tree','related_exams','top_colleges_and_universities'],
        ];

        $url = $career->url;
        $fields = $fieldMapping[$url] ?? null;

        if ($fields) {
            foreach ($fields as $field) {
                $data[$field] = $career->$field;
            }
            
            // Add these three fields ONLY for class 8 and class 10
            // if ($url === 'careers/after-class-8' || $url === 'careers/after-class-10') {
            //     $data['iti_itc_jrpolitecnic'] = ItiCollege::with('trades')->orderBy('name')->get();
            //     $data['scholarship'] = [];
            //     $data['career_counsellors'] = $this->getCounsellors();
            // }

        
            $scholarshipOverview = ScholarshipOverview::where('is_active', true)->first();
            
            $scholarshipData = [];
            
            if ($scholarshipOverview) {
                // Get schemes from the scholarship_overviews table
                $schemes = $scholarshipOverview->schemes; // This is already JSON data
                
                // Get rates from another table (example: scholarship_rates)
                // Assuming you have a ScholarshipRate model
                $rates = ScholarshipRate::where('is_active', true)->get();

                
                $scholarshipData = [
                    'key_instructions_eligibility' => $career->key_instructions_eligibility['instructions'] ?? [],
                    'schemes' => $schemes,
                    'rate_of_scholarship' => $rates, // Or format as needed
                    
                ];
            }

            $data['iti_itc_jrpolitecnic'] = ItiCollege::with('trades')->orderBy('name')->get();
            $data['scholarship'] = $scholarshipData;
            $data['career_counsellors'] = $this->getCounsellors();


            
        } else {
            // Default fields for other content types
            $data['domains'] = $career->branch_groups;
            $data['pathways'] = $career->pathways;
            $data['courses'] = $career->courses;
            $data['exams'] = $career->exams;
            $data['institutes'] = $career->institute_links;
            $data['industries'] = $career->industries;
            $data['roles'] = $career->role_examples;
        }

        return response()->json([
            'success' => true,
            'data' => $data,
        ]);
    }




    public function studentSupport()
    {
        return response()->json([
            'success' => true,
            'data' =>  StudentSupport::where('status', true)
                ->orderBy('sort_order')
                ->get()
             ]);

        
    }

    public function eduFund()
    {
        return response()->json([
            'success' => true,
            'data' => EduFundSection::with([
                'cards' => fn ($q) => $q->where('status', true)->orderBy('sort_order'),
                'schemes' => fn ($q) => $q->where('status', true)->orderBy('sort_order'),
            ])->orderBy('sort_order')->get()
        ]);


        
    }

    public function courseContent(Request $request)
    {
        try {
            // Validate request
            $request->validate([
                'slug' => 'required|string|max:255'
            ]);

            $slug = $request->input('slug');

            // Find the course content by slug
            $courseContent = CourseContent::with(['menu', 'tab', 'section', 'link'])
                ->where('url', $slug)
                ->orWhere('url', '/' . $slug)
                ->orWhere('url', $slug . '/')
                ->orWhere('url', '/' . $slug . '/')
                ->first();

               // dd($slug);

            if (!$courseContent) {
                return response()->json([
                    'success' => false,
                    'message' => 'Course content not found',
                    'data' => null
                ], 404);
            }

            // Get the link key to determine which fields to return
            $linkKey = $courseContent->link ? $courseContent->link->key : null;

            // Build response based on link type
            $response = $this->buildResponse($courseContent, $linkKey);

            return response()->json([
                'success' => true,
                'message' => 'Course content retrieved successfully',
                'data' => $response
            ]);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            Log::error('Error fetching course content: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error fetching course content',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Build response based on link type
     */
    private function buildResponse($courseContent, $linkKey)
    {
        // Base response with common fields
        $response = [
            'id' => $courseContent->id,
            'menu_id' => $courseContent->menu_id,
            'tab_id' => $courseContent->tab_id,
            'section_id' => $courseContent->section_id,
            'link_id' => $courseContent->link_id,
            'url' => $courseContent->url,
            'intro_heading' => $courseContent->intro_heading,
            'intro_description' => $courseContent->intro_description,
            'intro_description_secondary' => $courseContent->intro_description_secondary,
            'snapshot' => $this->parseJson($courseContent->snapshot),
            'is_active' => $courseContent->is_active,
            'sort_order' => $courseContent->sort_order,
            'created_at' => $courseContent->created_at,
            'updated_at' => $courseContent->updated_at,
        ];

        // Add specific fields based on link key
        switch ($linkKey) {
            // ==================== MSME ====================
            case 'msme-tool-room':
                $response['long_term_programs'] = $this->parseJson($courseContent->long_term_programs);
                $response['short_term_courses'] = $this->parseJson($courseContent->short_term_courses);
                $response['cta_button'] = $this->parseJson($courseContent->cta_button);
                $response['admission_heading'] = $courseContent->admission_heading;
                $response['admission_description'] = $courseContent->admission_description;
                $response['admission_info'] = $this->parseJson($courseContent->admission_info);
                $response['next_steps'] = $this->parseJson($courseContent->next_steps);
                $response['skill_agencies'] = $this->parseJson($courseContent->skill_agencies);
                break;

            // ==================== Diploma Engineering ====================
            case 'diploma-engineering':
            case 'diploma-paramedical':
            case 'diploma-pharmacy':
            case 'diploma-computer-it':
                $response['branch_groups'] = $this->parseJson($courseContent->branch_groups);
                $response['post_diploma'] = $this->parseJson($courseContent->post_diploma);
                $response['polytechnic_links'] = $this->parseJson($courseContent->polytechnic_links);
                $response['admission_heading'] = $courseContent->admission_heading;
                $response['admission_description'] = $courseContent->admission_description;
                $response['admission_info'] = $this->parseJson($courseContent->admission_info);
                break;

            // ==================== Degree Pages ====================
            case 'arts-graduation':
            case 'commerce-graduation':
            case 'science-graduation':
            case 'arts-pg':
            case 'commerce-pg':
            case 'science-pg':
                $response['subject_families'] = $this->parseJson($courseContent->subject_families);
                $response['degree_options'] = $this->parseJson($courseContent->degree_options);
                $response['course_groups'] = $this->parseJson($courseContent->course_groups);
                $response['after_degree'] = $this->parseJson($courseContent->after_degree);
                $response['admission_points'] = $this->parseJson($courseContent->admission_points);
                $response['documents'] = $this->parseJson($courseContent->documents);
                $response['careers_snapshot'] = $this->parseJson($courseContent->careers_snapshot);
                break;

            // ==================== Nursing ====================
            case 'courses-nursing':
                $response['nursing_ladder'] = $this->parseJson($courseContent->nursing_ladder);
                $response['specialisations'] = $this->parseJson($courseContent->specialisations);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== Medical Pages (MBBS, Pharmacy, Paramedical, etc.) ====================
            case 'courses-mbbs':
                $response['course_ladder'] = $this->parseJson($courseContent->course_ladder);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['core_subjects'] = $this->parseJson($courseContent->core_subjects);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-pharmacy':
                $response['pharmacy_ladder'] = $this->parseJson($courseContent->pharmacy_ladder);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['core_subjects'] = $this->parseJson($courseContent->core_subjects);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['specialisations'] = $this->parseJson($courseContent->specialisations);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'paramedical-diploma':
                $response['diploma_ladder'] = $this->parseJson($courseContent->diploma_ladder);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['common_diploma_options'] = $this->parseJson($courseContent->common_diploma_options);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'paramedical-ug':
                $response['paramedical_ladder'] = $this->parseJson($courseContent->paramedical_ladder);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['ug_course_options'] = $this->parseJson($courseContent->ug_course_options);
                $response['specialisations'] = $this->parseJson($courseContent->specialisations);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'medical-pg':
                $response['pg_ladder'] = $this->parseJson($courseContent->pg_ladder);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['pg_course_options'] = $this->parseJson($courseContent->pg_course_options);
                $response['specialisations'] = $this->parseJson($courseContent->specialisations);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'allied-health':
                $response['allied_ladder'] = $this->parseJson($courseContent->allied_ladder);
                $response['allied_domains'] = $this->parseJson($courseContent->allied_domains);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== AYUSH ====================
            case 'courses-ayush':
                $response['ayush_ladder'] = $this->parseJson($courseContent->ayush_ladder);
                $response['ayush_systems'] = $this->parseJson($courseContent->ayush_systems);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== Naturopathy & Yoga ====================
            case 'naturopathy-yoga':
                $response['naturopathy_ladder'] = $this->parseJson($courseContent->naturopathy_ladder);
                $response['what_you_do'] = $this->parseJson($courseContent->what_you_do);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['where_you_work'] = $this->parseJson($courseContent->where_you_work);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== Tech Pages ====================
            case 'courses-btech':
                $response['btech_ladder'] = $this->parseJson($courseContent->btech_ladder);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-barch':
                $response['barch_ladder'] = $this->parseJson($courseContent->barch_ladder);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-mtech':
                $response['mtech_ladder'] = $this->parseJson($courseContent->mtech_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                break;

            case 'courses-bca':
                $response['bca_ladder'] = $this->parseJson($courseContent->bca_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                break;

            case 'courses-bsc-it':
                $response['bsc_it_ladder'] = $this->parseJson($courseContent->bsc_it_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                break;

            case 'courses-mca':
                $response['mca_ladder'] = $this->parseJson($courseContent->mca_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                break;

            case 'courses-msc-it':
                $response['msc_it_ladder'] = $this->parseJson($courseContent->msc_it_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['admission_notes'] = $this->parseJson($courseContent->admission_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                break;

            // ==================== Business Pages (B.Com, M.Com, BBA, MBA) ====================
            case 'courses-bcom':
                $response['bcom_ladder'] = $this->parseJson($courseContent->bcom_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['typical_roles'] = $this->parseJson($courseContent->typical_roles);
                $response['next_step_options'] = $this->parseJson($courseContent->next_step_options);
                $response['business_types'] = $this->parseJson($courseContent->business_types);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-mcom':
                $response['mcom_ladder'] = $this->parseJson($courseContent->mcom_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['next_step_options'] = $this->parseJson($courseContent->next_step_options);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-bba':
                $response['bba_ladder'] = $this->parseJson($courseContent->bba_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['core_areas'] = $this->parseJson($courseContent->core_areas);
                $response['typical_roles'] = $this->parseJson($courseContent->typical_roles);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                $response['next_step_options'] = $this->parseJson($courseContent->next_step_options);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            case 'courses-mba':
                $response['mba_ladder'] = $this->parseJson($courseContent->mba_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['typical_roles'] = $this->parseJson($courseContent->typical_roles);
                $response['specialisation_tracks'] = $this->parseJson($courseContent->specialisation_tracks);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== Finance ====================
            case 'course-finance':
                $response['finance_ladder'] = $this->parseJson($courseContent->finance_ladder);
                $response['course_options'] = $this->parseJson($courseContent->course_options);
                $response['typical_roles'] = $this->parseJson($courseContent->typical_roles);
                $response['work_settings'] = $this->parseJson($courseContent->work_settings);
                $response['eligibility_notes'] = $this->parseJson($courseContent->eligibility_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                $response['build_profile'] = $this->parseJson($courseContent->build_profile);
                break;

            // ==================== Professional Commerce (CA/CS/CMA) ====================
            case 'courses-professional-commerce':
                $response['professional_commerce_ladder'] = $this->parseJson($courseContent->professional_commerce_ladder);
                $response['who_should_do'] = $this->parseJson($courseContent->who_should_do);
                $response['choose_right'] = $this->parseJson($courseContent->choose_right);
                $response['common_prep'] = $this->parseJson($courseContent->common_prep);
                $response['important_notes'] = $this->parseJson($courseContent->important_notes);
                $response['common_docs'] = $this->parseJson($courseContent->common_docs);
                break;

            // ==================== Default ====================
            default:
                $response['sectors'] = $this->parseJson($courseContent->sectors);
                $response['admission_heading'] = $courseContent->admission_heading;
                $response['admission_description'] = $courseContent->admission_description;
                $response['admission_info'] = $this->parseJson($courseContent->admission_info);
                $response['next_steps'] = $this->parseJson($courseContent->next_steps);
                $response['skill_agencies'] = $this->parseJson($courseContent->skill_agencies);
                break;
        }

        return $response;
    }

    /**
     * Parse JSON field safely
     */
    private function parseJson($data)
    {
        if (is_null($data)) {
            return null;
        }

        if (is_array($data)) {
            return $data;
        }

        if (is_string($data)) {
            $decoded = json_decode($data, true);
            return json_last_error() === JSON_ERROR_NONE ? $decoded : $data;
        }

        return $data;
    }

    private function getCounsellors(): array
    {
        $counsellors = User::with('counselorDetails')
            ->where('role', 'counselor')
            ->where('is_active', true)
            ->get();


        $result = [];
        $seenSubjects = [];

        foreach ($counsellors as $user) {
            foreach ($user->counselorDetails as $detail) {
                $subject = $detail->subject ?? 'Others';
                
                // Only add if subject not already processed
                if (!in_array($subject, $seenSubjects)) {
                    $seenSubjects[] = $subject;
                    
                    $result[] = [
                        'id'            => $user->id,
                        'name'          => $user->name,
                        'subject'       => $subject,
                        'qualification' => $detail->qualification ?? '',
                    ];
                }
            }
        }

        return $result;
    }


public function landingPages(string $slug): JsonResponse
{
    $landingPage = LandingPageContent::where('slug', $slug)->first();

    if (!$landingPage) {
        return response()->json([
            'success' => false,
            'message' => 'Landing page not found.',
        ], 404);
    }

    return response()->json([
        'success' => true,
        'message' => 'Landing page retrieved successfully.',
        'data' => $landingPage,
    ]);
}


}
