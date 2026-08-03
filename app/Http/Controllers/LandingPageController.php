<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\LandingPageContent;


class LandingPageController extends Controller
{
    //
    // public function medicalLandingPage()
    // {
    //     return inertia('Frontend/LandingPage/medical');
    // }

    // public function civilServicesPage()
    // {
    //     return inertia('Frontend/LandingPage/civil-services');
    // }

    // public function commercePage()
    // {
    //     return inertia('Frontend/LandingPage/commerce');
    // }

    // public function defencePage()
    // {
    //     return inertia('Frontend/LandingPage/defence');
    // }

    // public function engineeringPage()
    // {
    //     return inertia('Frontend/LandingPage/engineering');
    // }

    // public function lawPage()
    // {
    //     return inertia('Frontend/LandingPage/law');
    // }

    // public function mediaPage()
    // {
    //     return inertia('Frontend/LandingPage/media');
    // }


    public function medicalLandingPage()
    {
        $landingPage = LandingPageContent::where('slug', 'medical')->first();
        
        if (!$landingPage) {
            // If not found, create default
            $landingPage = $this->createDefaultLandingPage('medical');
        }

        return Inertia::render('Frontend/LandingPage/medical', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Civil Services Landing Page
     */
    public function civilServicesPage()
    {
        $landingPage = LandingPageContent::where('slug', 'civil-services')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('civil-services');
        }

        return Inertia::render('Frontend/LandingPage/civil-services', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Commerce Landing Page
     */
    public function commercePage()
    {
        $landingPage = LandingPageContent::where('slug', 'commerce')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('commerce');
        }

        return Inertia::render('Frontend/LandingPage/commerce', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Defence Landing Page
     */
    public function defencePage()
    {
        $landingPage = LandingPageContent::where('slug', 'defence')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('defence');
        }

        return Inertia::render('Frontend/LandingPage/defence', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Engineering Landing Page
     */
    public function engineeringPage()
    {
        $landingPage = LandingPageContent::where('slug', 'engineering')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('engineering');
        }

        return Inertia::render('Frontend/LandingPage/engineering', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Law Landing Page
     */
    public function lawPage()
    {
        $landingPage = LandingPageContent::where('slug', 'law')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('law');
        }

        return Inertia::render('Frontend/LandingPage/law', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Media Landing Page
     */
    public function mediaPage()
    {
        $landingPage = LandingPageContent::where('slug', 'media-journalism')->first();
        
        if (!$landingPage) {
            $landingPage = $this->createDefaultLandingPage('media-journalism');
        }

        return Inertia::render('Frontend/LandingPage/media', [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Generic Landing Page (for any slug)
     */
    public function show($slug)
    {
        $landingPage = LandingPageContent::where('slug', $slug)->first();
        
        if (!$landingPage) {
            abort(404, 'Landing page not found');
        }

        // Map slug to component name
        $component = $this->getComponentName($slug);

        return Inertia::render($component, [
            'landingPage' => $landingPage,
            'content' => $landingPage->content ?? [],
        ]);
    }

    /**
     * Get component name for a slug
     */
    private function getComponentName($slug)
    {
        $map = [
            'medical' => 'Frontend/LandingPage/medical',
            'engineering' => 'Frontend/LandingPage/engineering',
            'commerce' => 'Frontend/LandingPage/commerce',
            'law' => 'Frontend/LandingPage/law',
            'media-journalism' => 'Frontend/LandingPage/media',
            'civil-services' => 'Frontend/LandingPage/civil-services',
            'defence' => 'Frontend/LandingPage/defence',
        ];

        return $map[$slug] ?? 'Frontend/LandingPage/generic';
    }

    /**
     * Create default landing page if not exists
     */
    private function createDefaultLandingPage($slug)
    {
        $defaultContent = $this->getDefaultContent($slug);
        
        return LandingPageContent::create([
            'slug' => $slug,
            'frontend_url' => $this->getFrontendUrl($slug),
            'content' => $defaultContent,
        ]);
    }

    /**
     * Get default content for a slug
     */
    private function getDefaultContent($slug)
    {
        $defaults = [
            'medical' => [
                'hero' => [
                    'title' => 'Medical & Healthcare Career Guide',
                    'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                    'description' => 'Planning a career in the medical field can feel confusing — MBBS, Nursing, Paramedical, Pharmacy, AYUSH, eligibility rules, counselling, and entrance exams like NEET. This page is built to simplify everything in one place.',
                    'description2' => 'Whether you\'re exploring options after Class 10 or preparing seriously after Class 12 (Science), you\'ll find clear pathways, course choices, exam guidance, institute types, and direct links to detailed pages across the portal — so you can decide your next step with confidence.'
                ]
            ],
            'engineering' => [
                'hero' => [
                    'title' => 'Engineering Career Guide',
                    'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                    'description' => 'Engineering is one of the most popular career choices in India, offering diverse specializations like Computer Science, Mechanical, Civil, Electronics, and more.',
                    'description2' => 'Whether you\'re a Class 12 student exploring engineering options or a graduate preparing for GATE, you\'ll find clear pathways and exam guidance here.'
                ]
            ],
            'commerce' => [
                'hero' => [
                    'title' => 'Commerce & Management Career Guide',
                    'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                    'description' => 'Commerce opens one of the widest sets of career doors — B.Com, BBA, MBA, CA, CS, CMA, banking, finance, taxation, and management.',
                    'description2' => 'Whether you\'ve just completed Class 12 (Commerce) or are a graduate planning your next move — MBA, professional certification, or a career switch — you\'ll find clear pathways here.'
                ]
            ],
            'law' => [
                'hero' => [
                    'title' => 'Law Career Guide',
                    'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                    'description' => 'A career in law offers one of the most intellectually demanding and socially impactful paths available — but navigating it requires clarity.',
                    'description2' => 'Whether you\'re a Class 12 student planning to take the 5-year integrated law route, or a graduate considering the 3-year LLB, you\'ll find clear pathways here.'
                ]
            ],
            'media-journalism' => [
                'hero' => [
                    'title' => 'Media & Journalism Career Guide',
                    'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                    'description' => 'Media and journalism offer some of the most dynamic and impactful career paths available — but the field is broad.',
                    'description2' => 'Whether you\'re a Class 12 student choosing between a BA in Journalism or a graduate looking at postgraduate programmes, you\'ll find clear pathways here.'
                ]
            ],
            'civil-services' => [
                'hero' => [
                    'title' => 'Civil Services Career Guide',
                    'subtitle' => 'UPSC, WBCS, Exam Stages, Services & Preparation — A Complete Roadmap',
                    'description' => 'A career in civil services is one of the most ambitious and respected paths in India — but it demands years of disciplined preparation.',
                    'description2' => 'Whether you are a student in graduation or have already begun preparation, you\'ll find clear pathways and exam guidance here.'
                ]
            ],
            'defence' => [
                'hero' => [
                    'title' => 'Defence Forces Career Guide',
                    'subtitle' => 'Entry Routes, Exams, Services & Preparation — A Complete Roadmap',
                    'description' => 'A career in the Indian Armed Forces — Army, Navy, or Air Force — is one of the most honourable and structured paths available.',
                    'description2' => 'Whether you\'re a Class 11–12 student aiming for NDA, or a graduate targeting CDS or AFCAT — you\'ll find the right entry route here.'
                ]
            ]
        ];

        return $defaults[$slug] ?? [
            'hero' => [
                'title' => ucfirst(str_replace('-', ' ', $slug)) . ' Career Guide',
                'subtitle' => 'Courses, Entrance Exams, Colleges & Career Scope — A Complete Roadmap',
                'description' => 'Complete guide for ' . str_replace('-', ' ', $slug) . ' careers.',
                'description2' => 'Find all the information you need about ' . str_replace('-', ' ', $slug) . ' career paths.'
            ]
        ];
    }

    /**
     * Get frontend URL for a slug
     */
    private function getFrontendUrl($slug)
    {
        $urls = [
            'medical' => '/courses/medical-paramedical/medical',
            'engineering' => '/career/by-profession/engineering',
            'commerce' => '/courses/business-management/mba',
            'law' => '/career/by-profession/law',
            'media-journalism' => '/career/by-profession/media',
            'civil-services' => '/career/by-profession/civil-services',
            'defence' => '/career/by-profession/defence',
        ];

        return $urls[$slug] ?? '/landing/' . $slug;
    }
}
