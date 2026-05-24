<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CmMessage;
use Inertia\Inertia;
use App\Models\HeroSlide;
use App\Models\LeaderMessage;
use App\Models\LoanSection;
use App\Models\CareerDomain;
use App\Models\Section;

use App\Models\News;
use Carbon\Carbon;


class HomeController extends Controller
{
    //
    public function index()
    {
       $heroSlides = HeroSlide::orderBy('order')->get()->map(function ($slide) {

       $imgPath = $slide->img_base
        ? '/storage/' . pathinfo($slide->img_base, PATHINFO_DIRNAME) . '/' . pathinfo($slide->img_base, PATHINFO_FILENAME)
        : null;

        return [
            'id' => $slide->id,
            'title' => $slide->title . ' ', // keep space like your static data
            'titleGredient' => ' ' . $slide->title_gradient, // leading space like your array
            'subtitle' => $slide->subtitle,
            'ctaText' => $slide->cta_text,
            'ctaLink' => $slide->cta_link,
            'imgBase' => $imgPath,
        ];
         })->values();

         $leaders = LeaderMessage::latest()->get();
         $items = LoanSection::orderBy('order')->get();

           $factCards = $items
                ->where('type', 'fact_card')
                ->values()
                ->map(function ($item) {
                    return [
                        'icon' => $item->icon,
                        'title' => $item->title,
                        'text' => $item->description, // 👈 important rename
                    ];
                });

            $schemes = $items
                ->where('type', 'scheme')
                ->values()
                ->map(function ($item) {
                    return [
                        'full' => $item->title,
                        'short' => $item->short,
                        'href' => $item->link,
                    ];
                });

               // dd($schemes);
        $careerDomains = CareerDomain::orderBy('id', 'asc')
            ->get()
            ->map(function ($item) {
                return [
                    'title' => $item->title,
                    'subtitle' => $item->subtitle,
                    'image' => $item->image 
                        ? '/storage/' . $item->image 
                        : '/images/default.png',
                    'link' => $item->link && \Illuminate\Support\Facades\Route::has($item->link)
                            ? route($item->link)
                            : null,
                    'details' => $item->details,
                ];
            });


            $news = News::orderBy('date', 'desc')->get();
    

            $newsData = $news->groupBy('category')->map(function ($items) {
                return $items->map(function ($item) {
                    return [
                        'title' => $item->title,
                        'date' => Carbon::parse($item->date)->format('M d, Y'),
                        'desc' => $item->description,
                        'link' => route('news.updates', [
                            'news' => $item->slug,
                        ]),
                    ];
                })->values();
            });

            $labels = [
                'government' => 'Government Announcements',
                'scholarships' => 'Scholarships & Financial Aid',
                'exams' => 'Exams & Results',
                'career' => 'Career Guidance',
            ];

            $categories = $news->pluck('category')
                ->unique()
                ->values()
                ->map(function ($cat) use ($labels) {
                    return [
                        'id' => $cat,
                        'name' => $labels[$cat] ?? ucfirst($cat),
                    ];
                });

            $sections = Section::all()->keyBy('section_key');

            // dd($sections);
            return Inertia::render('Frontend/Home', [
                'title' => 'Home',
                'cmMessage' => CmMessage::first(),
                'heroSlides' => $heroSlides,
                'leaders' => $leaders,
                'factCards' => $factCards,
                'schemes' => $schemes,
                'careerDomains' => $careerDomains,
                'newsData' => $newsData->toArray(),
                'categories' => $categories->toArray(),
                'sections' => $sections
            ]);
    }

 public function showNewsUpdates()
{
    $news = News::orderBy('date', 'desc')->get();

    return Inertia::render('Frontend/NewsUpdates', [

        'title' => 'News & Updates',

        'news' => $news->map(function ($item) {

            return [
                'id' => $item->id,

                'title' => $item->title,

                'slug' => $item->slug,

                'date' => Carbon::parse($item->date)
                            ->format('M d, Y'),

                'description' => $item->description,

                'image' => $item->image,

                'link' => route('news.updates', [
                    'news' => $item->slug
                ]),
            ];
        })->values(),

    ]);
}



    
}
