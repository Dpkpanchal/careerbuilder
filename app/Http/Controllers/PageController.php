<?php

namespace App\Http\Controllers;

use App\Models\CentralUniversity;
use App\Models\ItiCollege;
use App\Models\Menu;
use App\Models\PageContent;
use Inertia\Inertia;
use App\Models\ExamContent;
use App\Models\CollegeContent;
use App\Models\CareerContent;
use App\Models\User;
use App\Models\ScholarshipOverviewTable;
use App\Models\ScholarshipRate;
use App\Models\StudentSupport;
use App\Models\EduFundSection;
use App\Models\CourseContent;
use App\Models\ScholarshipOverview;

class PageController extends Controller
{
    /**
     * Maps slug → legacy Inertia component path (resources/js/Pages/{path}.jsx).
     * When no DB content is published the legacy component is rendered directly,
     * restoring the original rich content without touching 166+ JSX files.
     */

    private const STAGE_TWO_SLUGS = [
        'careers/after-class-12-arts',
        'careers/after-class-12-commerce',
        'careers/after-class-12-science',
        'careers/after-graduation',
        'careers/after-class-12-engineering',
        'careers/after-class-12-medical',
    ];


    private const LEGACY_PAGES = [
        // ── Careers: By Stage ──────────────────────────────────────────
        'careers/after-class-8'            => 'Frontend/career/after-class-8',
        'careers/after-class-10'           => 'Frontend/career/after-class-10th',
        'careers/after-class-12-arts'      => 'Frontend/career/after-12/arts',
        'careers/after-class-12-commerce'  => 'Frontend/career/after-12/commerce',
        'careers/after-class-12-science'   => 'Frontend/career/after-12/general-science',
        'careers/after-graduation'         => 'Frontend/career/after-graduation',
        'careers/after-class-12-engineering' => 'Frontend/career/after-12/engineering',
        'careers/after-class-12-medical'   => 'Frontend/career/after-12/medical',

        // ── Careers: By Profession ─────────────────────────────────────
        'careers/engineering'              => 'Frontend/career/by-profession/engineering',
        'careers/medical-doctor-mbbs'      => 'Frontend/career/by-profession/medical',
        'careers/nursing-allied'           => 'Frontend/career/by-profession/nursing',
        'careers/pharmacy'                 => 'Frontend/career/by-profession/pharmacy',
        'careers/chartered-accountant-ca'  => 'Frontend/career/by-profession/ca',
        'careers/law-llb-integrated'       => 'Frontend/career/by-profession/law',
        'careers/design-fashion-graphic-arch' => 'Frontend/career/by-profession/design',
        'careers/hospitality-tourism'      => 'Frontend/career/by-profession/hospitality',
        'careers/media-journalism'         => 'Frontend/career/by-profession/media',
        'careers/civil-services'           => 'Frontend/career/by-profession/civil-services',
        'careers/defence-forces'           => 'Frontend/career/by-profession/defence',

        // ── Careers: Future Paths ──────────────────────────────────────
        'careers/research-phd'             => 'Frontend/career/future/research',
        'careers/entrepreneurship-startups'=> 'Frontend/career/future/entrepreneurship',
        'careers/social-work-ngos'         => 'Frontend/career/future/social-work',

        // ── Courses: Vocational ────────────────────────────────────────
        'courses/class-8-vocational-trades'  => 'Frontend/Courses/Vocational/class-8-plus',
        'courses/class-10-vocational-trades' => 'Frontend/Courses/Vocational/class-10-plus',
        'courses/iti-itc-trades'             => 'Frontend/Courses/Vocational/iti',
        'courses/msme-tool-room-courses'     => 'Frontend/Courses/Vocational/msme',

        // ── Courses: Diploma ───────────────────────────────────────────
        'courses/diploma-in-engineering-polytechnic' => 'Frontend/Courses/Diploma/engineering',
        'courses/diploma-in-paramedical'             => 'Frontend/Courses/Diploma/paramedical',
        'courses/diploma-in-pharmacy-dpharm'         => 'Frontend/Courses/Diploma/pharmacy',
        'courses/diploma-in-computer-it'             => 'Frontend/Courses/Diploma/it',

        // ── Courses: Degree ────────────────────────────────────────────
        'courses/arts-graduation-courses-ba-allied'       => 'Frontend/Courses/Streamlined/arts',
        'courses/commerce-graduation-courses-bcom-allied' => 'Frontend/Courses/Streamlined/commerce',
        'courses/science-graduation-courses-bsc-allied'   => 'Frontend/Courses/Streamlined/science',
        'courses/arts-pg-courses-ma-msw-allied'           => 'Frontend/Courses/Streamlined/arts-pg',
        'courses/commerce-pg-courses-mcom-allied'         => 'Frontend/Courses/Streamlined/commerce-pg',
        'courses/science-pg-courses-msc-allied'           => 'Frontend/Courses/Streamlined/science-pg',

        // ── Courses: Medical & Paramedical ─────────────────────────────
        'courses/nursing-anm-gnm-bsc-nursing'          => 'Frontend/Courses/Medical/nursing',
        'courses/medical/mbbs'                         => 'Frontend/Courses/Medical/mbbs',
        'courses/pharmacy-dpharm-bpharm-mpharm-pharmd' => 'Frontend/Courses/Medical/pharmacy',
        'courses/paramedical-diplomas'                 => 'Frontend/Courses/Medical/diploma',
        'courses/ug-paramedical-degrees'               => 'Frontend/Courses/Medical/ug',
        'courses/medical/pg'                           => 'Frontend/Courses/Medical/pg',
        'courses/medical/allied-health'                => 'Frontend/Courses/Medical/allied-health',
        'courses/medical/ayush'                        => 'Frontend/Courses/Medical/ayush',
        'courses/medical/naturopathy-yoga'             => 'Frontend/Courses/Medical/naturopathy-yoga',

        // ── Courses: Engineering & Tech ────────────────────────────────
        'courses/btech-be-programs'     => 'Frontend/Courses/engTech/btech',
        'courses/barch'                 => 'Frontend/Courses/engTech/barch',
        'courses/mtech'                 => 'Frontend/Courses/engTech/mtech',
        'courses/bca'                   => 'Frontend/Courses/engTech/bca',
        'courses/bsc-computer-science-it' => 'Frontend/Courses/engTech/bsc-computer',
        'courses/mca'                   => 'Frontend/Courses/engTech/mca',
        'courses/msc'                   => 'Frontend/Courses/engTech/msc',

        // ── Courses: Business & Management ─────────────────────────────
        'courses/bcom-allied-programs'      => 'Frontend/Courses/businessManagement/bcom',
        'courses/mcom'                      => 'Frontend/Courses/businessManagement/mcom',
        'courses/bba'                       => 'Frontend/Courses/businessManagement/bba',
        'courses/mba-pgdm'                  => 'Frontend/Courses/businessManagement/mba',
        'courses/finance-taxation-accounting' => 'Frontend/Courses/businessManagement/professional-commerce',
        'courses/finance' => 'Frontend/Courses/businessManagement/finance',

        // ── Colleges: National Institutes ──────────────────────────────
        'colleges/iits-indian-institutes-of-technology'  => 'Frontend/Colleges/iits',
        'colleges/nits-national-institutes-of-technology'=> 'Frontend/Colleges/nits',
        'colleges/iims-management-institutes'            => 'Frontend/Colleges/iims',
        'colleges/aiims-medical-institutes'              => 'Frontend/Colleges/aiims',
        'colleges/nift-nid-fashion-design'               => 'Frontend/Colleges/design',
        'colleges/national-law-universities-nlus'        => 'Frontend/Colleges/nlu',

        // ── Colleges: Universities ─────────────────────────────────────
        'colleges/central-universities'                     => 'Frontend/Colleges/Universities/central',
        'colleges/state-universities'                        => 'Frontend/Colleges/Universities/state',
        'colleges/open-distance-universities-ignou-nsou'    => 'Frontend/Colleges/Universities/open',

        // ── Colleges: By Field of Study ────────────────────────────────
        'colleges/engineering-colleges'         => 'Frontend/Colleges/byFieldOfStudy/engineering',
        'colleges/medical-paramedical-colleges' => 'Frontend/Colleges/byFieldOfStudy/medical',
        'colleges/nursing-colleges'             => 'Frontend/Colleges/byFieldOfStudy/nursing',
        'colleges/pharmacy-colleges'            => 'Frontend/Colleges/byFieldOfStudy/pharmacy',
        'colleges/management-business-colleges' => 'Frontend/Colleges/byFieldOfStudy/management',
        'colleges/law-colleges'                 => 'Frontend/Colleges/byFieldOfStudy/law',
        'colleges/agriculture-veterinary-colleges' => 'Frontend/Colleges/byFieldOfStudy/agriculture',
        'colleges/teacher-training-bed-colleges'   => 'Frontend/Colleges/byFieldOfStudy/teacher-training',

        // ── Colleges: Vocational & Technical ───────────────────────────
        'colleges/iti-centres-govt-private' => 'Frontend/Colleges/vocationalTechnical/iti',
        'colleges/polytechnic-colleges'     => 'Frontend/Colleges/vocationalTechnical/polytechnic',
        'colleges/msme-tool-room-institutes'=> 'Frontend/Colleges/vocationalTechnical/msme',
        'colleges/skill-development-centres'=> 'Frontend/Colleges/vocationalTechnical/skill',

        // ── Exams: Engineering & Tech ──────────────────────────────────
        'exams/national-level-eg-jee-main-jee-advanced' => 'Frontend/Exams/Engineering/National',
        'exams/state-level-wbjee-etc'                    => 'Frontend/Exams/Engineering/State',
        'exams/university-level-exams'                   => 'Frontend/Exams/Engineering/University',
        'exams/mca'                                      => 'Frontend/Exams/Engineering/computer-applications',
        'exams/architecture'                             => 'Frontend/Exams/Engineering/architecture',

        // ── Exams: Medical ─────────────────────────────────────────────
        'exams/national-level-eg-neet-ug'      => 'Frontend/Exams/Medical/national',
        'exams/state-level-medical-exams'      => 'Frontend/Exams/Medical/state',
        'exams/university-level-medical-exams' => 'Frontend/Exams/Medical/nursing',
        'exams/pharmacy'                       => 'Frontend/Exams/Medical/pharmacy',
        'exams/pg'                             => 'Frontend/Exams/Medical/pg',

        // ── Exams: Hotel Management ────────────────────────────────────
        'exams/hotel-management/national'   => 'Frontend/Exams/hotelManagement/national',
        'exams/hotel-management/state'      => 'Frontend/Exams/hotelManagement/state',
        'exams/hotel-management/university' => 'Frontend/Exams/hotelManagement/university',
        'exams/hotel-management/hotel-run'  => 'Frontend/Exams/hotelManagement/hotel-run',

        // ── Exams: Law / Management / Finance ──────────────────────────
        'exams/law/law'             => 'Frontend/Exams/Law/law',
        'exams/law/management'      => 'Frontend/Exams/Law/management',
        'exams/law/finance-accounts'=> 'Frontend/Exams/Law/finance-accounts',

        // ── Exams: Design / Media / Humanities ─────────────────────────
        'exams/design/design'      => 'Frontend/Exams/Design/design',
        'exams/design/mass-comm'   => 'Frontend/Exams/Design/mass-comm',
        'exams/design/humanities'  => 'Frontend/Exams/Design/humanities',
        'exams/design/mathematics' => 'Frontend/Exams/Design/mathematics',

        // ── Exams: Agri / Defence / School ─────────────────────────────
        'exams/agri/agriculture' => 'Frontend/Exams/Agri/agriculture',
        'exams/agri/veterinary'  => 'Frontend/Exams/Agri/veterinary',
        'exams/agri/defence'     => 'Frontend/Exams/Agri/defence',
        'exams/agri/school'      => 'Frontend/Exams/Agri/school',
    ];



    public function show(string $slug)
    {
        $menuItem = Menu::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        $content = PageContent::where('menu_id', $menuItem->id)->first();

        if ($content?->is_published && $content->html_content) {
            $html = html_entity_decode($content->html_content, ENT_QUOTES | ENT_HTML5, 'UTF-8');

            return Inertia::render('Frontend/Page', [
                'title'           => $content->meta_title ?: $menuItem->label,
                'menuLabel'       => $menuItem->label,
                'metaDescription' => $content->meta_description,
                'htmlContent'     => $html,
                'slug'            => $slug,
            ]);
        }

        if (isset(self::LEGACY_PAGES[$slug])) {
            $props = match ($slug) {
                'careers/after-class-8',
                'careers/after-class-10',
                'colleges/iti-centres-govt-private' => [
                    'itis' => ItiCollege::with('trades')->orderBy('name')->get(),
                    'counsellors' => $this->getCounsellors(),
                    'scholarshipSchemes' => $this->getScholarshipSchemes(),
                    'scholarshipRates' => $this->getScholarshipRates(),
                    'key_instructions_eligibility' => CareerContent::where('url', $slug)
                        ->where('is_active', true)
                        ->first()
                        ?->key_instructions_eligibility['instructions'] ?? [],

                ],
                'colleges/central-universities' => [
                    'universities' => CentralUniversity::where('is_active', true)->orderBy('name')->get(),
                ],
                default => [],
            };

            if (str_starts_with($slug, 'careers/')) {
                $props['careerData'] = $this->getCareerData($slug);
            }

            // ── Get Course Content for courses pages ──────────────────
            if (str_starts_with($slug, 'courses/')) {
                $props['courseContent'] = $this->getCourseContent($slug);
            }

            if (str_starts_with($slug, 'colleges/')) {
                $props['collegeContents'] = $this->getCollegeContents($slug, $menuItem);
            }

            if (str_starts_with($slug, 'exams/')) {
                $props['examContents'] = $this->getExamContents($slug, $menuItem);
            }

            // ── Stage 2 (After Class 12 / After Graduation) pages: attach
            //    Student Support + Scholarships & Loans data ─────────────────
            if (in_array($slug, self::STAGE_TWO_SLUGS, true)) {
                $props['studentSupportItems'] = $this->getStudentSupportItems();
                $props['eduFundSections']     = $this->getEduFundSections();
            }

            //dd($props);

            return Inertia::render(self::LEGACY_PAGES[$slug], $props);
        }

        return Inertia::render('Frontend/Page', [
            'title'     => $menuItem->label,
            'menuLabel' => $menuItem->label,
            'slug'      => $slug,
        ]);
    }


    /**
     * Get career data for a given slug
     */
    private function getCareerData(string $slug): ?array
    {
        $careerContent = CareerContent::where('url', $slug)
            ->where('is_active', true)
            ->first();

        if (!$careerContent) {
            return null;
        }

        $careerData = [
            'id' => $careerContent->id,
            'slug' => $careerContent->url,
        ];

        // Define which fields to return based on the URL
        $fieldMapping = [
            'careers/after-class-8' => [
                'education_pathways',
                'vocational_courses'
            ],
            'careers/after-class-10' => [
                'overview',
                'stream_selection',
                'vocational_courses'
            ],
            'careers/after-class-12-arts' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
            'careers/after-class-12-commerce' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
            'careers/after-class-12-science' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
            'careers/after-class-12-engineering' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
            'careers/after-class-12-medical' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
            'careers/after-graduation' => [
                'overview_tree',
                'related_exams',
                'top_colleges_and_universities'
            ],
        ];

        $fields = $fieldMapping[$slug] ?? null;

        if ($fields) {
            foreach ($fields as $field) {
                $careerData[$field] = $careerContent->$field;
            }
        } else {
            // Default fields for other career pages
            $careerData['branch_groups'] = $careerContent->branch_groups;
            $careerData['pathways'] = $careerContent->pathways;
            $careerData['courses'] = $careerContent->courses;
            $careerData['exams'] = $careerContent->exams;
            $careerData['institute_links'] = $careerContent->institute_links;
            $careerData['industries'] = $careerContent->industries;
            $careerData['role_examples'] = $careerContent->role_examples;

        }

        return $careerData;
    }

    private function getCourseContent(string $slug): ?array
    {
        $courseContent = CourseContent::where('url', $slug)
            ->where('is_active', true)
            ->first();

        if (!$courseContent) {
            return null;
        }

        // Get the link key to determine which fields to return
        $linkKey = $courseContent->link ? $courseContent->link->key : null;

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

            // ==================== Medical Pages ====================
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

            // ==================== Business Pages ====================
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

            // ==================== Professional Commerce ====================
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


    /**
     * Get college contents for a given slug
     */
    private function getCollegeContents(string $slug, Menu $menuItem): array
    {
        $fields = config("content_fields.{$menuItem->key}", []);
        $columns = config('content_columns');

        return CollegeContent::where('url', $slug)
            ->where('is_active', true)
            ->orderBy('id')
            ->get()
            ->map(function ($college) use ($fields, $columns) {
                $item = [];
                foreach ($fields as $field) {
                    $item[$field] = $college->{$columns[$field] ?? $field};
                }
                return $item;
            })
            ->toArray();
    }

    /**
     * Get exam contents for a given slug
     */
    private function getExamContents(string $slug, Menu $menuItem): array
    {
        $fields = config("content_fields.{$menuItem->key}", []);
        $columns = config('content_columns');

        return ExamContent::where('url', $slug)
            ->where('is_active', true)
            ->orderBy('id')
            ->get()
            ->map(function ($exam) use ($fields, $columns) {
                $item = [];
                foreach ($fields as $field) {
                    $column = $columns[$field] ?? $field;
                    $item[$field] = $exam->{$column};
                }
                return $item;
            })
            ->toArray();
    }



    private function getCounsellors(): array
    {
        return User::with('counselorDetail')
            ->where('role', 'counselor')
            ->where('is_active', true)
            ->get()
            ->map(function ($user) {
                return [
                    'id'            => $user->id,
                    'name'          => $user->name,
                    'email'         => $user->email,
                    'qualification' => $user->counselorDetail->qualification ?? '',
                    'subject'       => $user->counselorDetail->subject ?? '',
                ];
            })
            ->values()
            ->toArray();
    }


    private function getScholarshipSchemes(): array
    {
        $scholarship = ScholarshipOverview::where('is_active', true)->first();
        
        if (!$scholarship) {
            return [];
        }
        
        // The schemes are stored in the 'schemes' JSON column
        $schemes = $scholarship->schemes ?? [];
        
        $result = [];
        
        foreach ($schemes as $scheme) {
            $result[] = [
                'no' => $scheme['no'] ?? null,
                'scheme' => $scheme['name'] ?? '',
                'class_of_study' => $scheme['class_of_study'] ?? '',
                'website' => $scheme['website'] ?? '',
                'minimum_marks' => $scheme['min_marks'] ?? '', // Note: field name is 'min_marks' in JSON
                'annual_family_income' => $scheme['income'] ?? '', // Note: field name is 'income' in JSON
            ];
        }
        
        return $result;
    }

    

    private function getScholarshipRates(): array
    {
        $rates = ScholarshipRate::where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        $result = [];

        foreach ($rates as $rate) {
            $result[] = [
                'type' => $rate->type,
                'class_range' => $rate->class_of_study,
                'day_scholar' => [
                    'admission_tuition_fee' => (float) $rate->day_admission_fee,
                    'maintenance_allowance' => (float) $rate->day_maintenance_allowance,
                    'total' => (float) $rate->day_total,
                ],
                'hosteller' => [
                    'admission_tuition_fee' => (float) $rate->hosteller_admission_fee,
                    'maintenance_allowance' => (float) $rate->hosteller_maintenance_allowance,
                    'total' => (float) $rate->hosteller_total,
                ],
                'remarks' => $this->getRemarksForType($rate->type),
            ];
        }

        return $result;
    }

    /**
     * Get remarks based on scholarship type
     */
    private function getRemarksForType(string $type): string
    {
        $remarks = [
            'PRE MATRIC' => 'As per actual tuition & admission fees, subject to approval by State Authority',
            'POST MATRIC' => 'Includes reader charges, study tours, thesis, printing etc.',
            'MERIT CUM MEANS' => 'Reimbursement of course fee, maintenance allowance as admissible',
            'TALENT SUPPORT STIPEND (TSP)' => 'Special stipend for talented students',
        ];

        return $remarks[$type] ?? '';
    }


    private function getStudentSupportItems() 
    {
        return \App\Models\StudentSupport::where('status', true)
            ->orderBy('sort_order')
            ->get(['id', 'title', 'description as desc', 'link as href', 'icon', 'tone', 'level']);
    }

    /**
     * Get Scholarships & Education Loans sections with their cards and schemes.
     */
    private function getEduFundSections()
    {
        return \App\Models\EduFundSection::with([
                'cards' => fn ($q) => $q->where('status', true)->orderBy('sort_order'),
                'schemes' => fn ($q) => $q->where('status', true)->orderBy('sort_order'),
            ])
            ->orderBy('sort_order')
            ->get();
    }







    

}
