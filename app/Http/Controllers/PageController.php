<?php

namespace App\Http\Controllers;

use App\Models\CentralUniversity;
use App\Models\ItiCollege;
use App\Models\Menu;
use App\Models\PageContent;
use Inertia\Inertia;
use App\Models\ExamContent;
use App\Models\CollegeContent;

class PageController extends Controller
{
    /**
     * Maps slug → legacy Inertia component path (resources/js/Pages/{path}.jsx).
     * When no DB content is published the legacy component is rendered directly,
     * restoring the original rich content without touching 166+ JSX files.
     */
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
        'courses/finance-taxation-accounting' => 'Frontend/Courses/businessManagement/finance',

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

        // If admin has published DB content, render the generic Page component.
        if ($content?->is_published && $content->html_content) {
            // CKEditor visual-mode escapes HTML tags (&lt;div&gt; etc.).
            // Decode once so dangerouslySetInnerHTML on the frontend renders real HTML.
            $html = html_entity_decode($content->html_content, ENT_QUOTES | ENT_HTML5, 'UTF-8');

            return Inertia::render('Frontend/Page', [
                'title'           => $content->meta_title ?: $menuItem->label,
                'menuLabel'       => $menuItem->label,
                'metaDescription' => $content->meta_description,
                'htmlContent'     => $html,
                'slug'            => $slug,
            ]);
        }

        // Fall back to the legacy JSX page (original rich content).
        if (isset(self::LEGACY_PAGES[$slug])) {
            $props = match ($slug) {
                'careers/after-class-8',
                'colleges/iti-centres-govt-private' => [
                    'itis' => ItiCollege::with('trades')->orderBy('name')->get(),
                ],
                'colleges/central-universities' => [
                    'universities' => CentralUniversity::where('is_active', true)->orderBy('name')->get(),
                ],


                default => [],
            };


           if (str_starts_with($slug, 'colleges/')) {

                $fields = config("content_fields.{$menuItem->key}", []);
                $columns = config('content_columns');

                $props['collegeContents'] = CollegeContent::where('url', $slug)
                    ->where('is_active', true)
                    ->orderBy('id')
                    ->get()
                    ->map(function ($college) use ($fields, $columns) {

                        $item = [];

                        foreach ($fields as $field) {
                            $item[$field] = $college->{$columns[$field] ?? $field};
                        }

                        return $item;
                    });
            }

           if (str_starts_with($slug, 'exams/')) {


            $fields = config("content_fields.{$menuItem->key}", []);

            $columns = config('content_columns');

            $props['examContents'] = ExamContent::where('url', $slug)
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
                });

                //dd($props['examContents']);

            }

            return Inertia::render(self::LEGACY_PAGES[$slug], $props);
        }

        // No legacy page either — show "Coming Soon".
        return Inertia::render('Frontend/Page', [
            'title'     => $menuItem->label,
            'menuLabel' => $menuItem->label,
            'slug'      => $slug,
        ]);
    }
}
