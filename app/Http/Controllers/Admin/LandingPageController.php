<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LandingPageContent;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    /**
     * Canonical list of supported slugs, their display titles and the
     * Inertia component that should render each one on the frontend.
     * Keeping this in one place avoids the slug/title/component maps
     * drifting out of sync with each other.
     */
    private const PAGES = [
    'medical' => [
        'title' => 'Medical',
        'description' => 'MBBS, Nursing, Paramedical, NEET, Allied Health and medical careers.',
        'component' => 'Frontend/LandingPages/Medical',
        'frontend_url' => '/courses/medical-paramedical/medical',
    ],
    'engineering' => [
        'title' => 'Engineering',
        'description' => 'B.Tech/Diploma, JEE/WBJEE, IIT/NIT and engineering careers.',
        'component' => 'Frontend/LandingPages/Engineering',
        'frontend_url' => '/career/by-profession/engineering',
    ],
    'commerce' => [
        'title' => 'Commerce & Management',
        'description' => 'B.Com, BBA/MBA, CA/CS/CMA and commerce careers.',
        'component' => 'Frontend/LandingPages/Commerce',
        'frontend_url' => '/courses/business-management/mba',
    ],
    'law' => [
        'title' => 'Law',
        'description' => 'LLB, integrated law, exams and law careers.',
        'component' => 'Frontend/LandingPages/Law',
        'frontend_url' => '/career/by-profession/law',
    ],
    'media-journalism' => [
        'title' => 'Media & Journalism',
        'description' => 'Media, journalism and mass communication careers.',
        'component' => 'Frontend/LandingPages/MediaJournalism',
        'frontend_url' => '/career/by-profession/media',
    ],
    'civil-services' => [
        'title' => 'Civil Services',
        'description' => 'UPSC/WBCS and civil services careers.',
        'component' => 'Frontend/LandingPages/CivilServices',
        'frontend_url' => '/career/by-profession/civil-services',
    ],
    'defence' => [
        'title' => 'Defence Forces',
        'description' => 'Defence careers and exams (NDA/CDS etc).',
        'component' => 'Frontend/LandingPages/Defence',
        'frontend_url' => '/career/by-profession/defence',
    ],
];

    /**
     * Show the edit form for a specific landing page
     */
    public function edit($slug)
    {
        $page = LandingPageContent::where('slug', $slug)->first();

        return Inertia::render('Admin/LandingPages/Edit', [
            'initialData' => $page ? $page->content : null,
            'pageSlug' => $slug,
            'pageTitle' => self::PAGES[$slug]['title'] ?? ucfirst(str_replace('-', ' ', $slug)),
            'pageUrl' => $page->frontend_url ?? "/landing-pages/{$slug}",
        ]);
    }

    /**
     * Update the landing page content
     */
    public function update(Request $request, $slug)
    {
        $validated = $request->validate([
            'content' => 'required|array',
            'is_active' => 'boolean',
        ]);

        LandingPageContent::updateOrCreate(
            ['slug' => $slug],
            [
                'content' => $validated['content'],
                'is_active' => $validated['is_active'] ?? true,
            ]
        );

        return back()->with('success', 'Page updated successfully.');
    }

    /**
     * Admin preview of a landing page (ignores is_active, always visible
     * to staff so drafts can be checked before publishing).
     */
    public function preview($slug)
    {
        $page = $this->findPageOrFail($slug);

        return Inertia::render('Frontend/LandingPages/Preview', [
            'pageData' => $page->content,
            'pageSlug' => $slug,
        ]);
    }

    /**
     * Public-facing landing page.
     */
    public function show($slug)
    {
        if (!array_key_exists($slug, self::PAGES)) {
            abort(404, 'Page not found');
        }

        $page = $this->findPageOrFail($slug);

        // Don't expose a page publicly while it's marked inactive.
        if (!$page->is_active) {
            abort(404, 'Page not found');
        }

        return Inertia::render(self::PAGES[$slug]['component'], [
            'landingPage' => $page,
            'content' => $page->content ?? [],
        ]);
    }

    /**
     * Get all landing pages list (for the admin index screen)
     */
    public function index()
    {
        $pages = collect(self::PAGES)->map(function ($meta, $slug) {
            return [
                'slug' => $slug,
                'frontend_url' => $meta['frontend_url'],
                'title' => $meta['title'],
                'description' => $meta['description'],
                'is_active' => LandingPageContent::where('slug', $slug)->value('is_active') ?? true,
            ];
        })->values();

       //dd($pages);

        return Inertia::render('Admin/LandingPages/Index', [
            'pages' => $pages,
        ]);
    }

    /**
     * Shared lookup used by show()/preview() so both fail the same way
     * when a row doesn't exist yet in landing_page_contents.
     */
    private function findPageOrFail(string $slug): LandingPageContent
    {
        $page = LandingPageContent::where('slug', $slug)->first();

        if (!$page) {
            abort(404, 'Page not found');
        }

        return $page;
    }
}
