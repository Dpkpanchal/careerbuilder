<?php

namespace App\Providers;

use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\Category;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    // public function boot(): void
    // {
    //     Vite::prefetch(concurrency: 3);

    //     Inertia::share([
    //     'auth' => fn () => [
    //         'user' => auth()->user(),
    //     ],
    // ]);

    // }


    public function boot(): void
    {
        // Redirect authenticated admins to their dashboard instead of '/'
        RedirectIfAuthenticated::redirectUsing(function ($request) {
            if (Auth::guard('admin')->check()) {
                return route('admin.dashboard');
            }
            return '/';
        });

        Vite::prefetch(concurrency: 3);

        Inertia::share([

            // ✅ Auth (as it is – DO NOT TOUCH)
            'auth' => fn () => [
                'user' => auth()->user(),
            ],

            // ✅ Global Menus (NEW)
            'menus' => function () {

                $categories = Category::with([
                    'subCategories.menuGroups.menuItems'
                ])->get();

                $menus = $categories->map(function ($category) {

                    return [
                        'key'    => $category->slug,
                        'label'  => $category->name,
                        'tabbed' => true,

                        'tabs' => $category->subCategories->map(function ($sub) use ($category) {

                            return [
                                'key'   => $sub->slug,
                                'label' => $sub->name,

                                'sections' => $sub->menuGroups->map(function ($group) use ($category) {

                                    return [
                                        'title' => $group->title,
                                        'links' => $group->menuItems->map(function ($item) use ($category) {
                                            return [
                                                'label' => $item->name,
                                                'href'  => url("{$category->slug}/{$item->slug}"),
                                            ];
                                        })->values(),
                                    ];
                                })->values(),
                            ];
                        })->values(),
                    ];
                })->values();

                // ➕ Join Forum (NO dropdown)
                $menus->push([
                    'key'        => 'forum',
                    'label'      => 'Join Forum',
                    'href'       => '/forum',
                    'noDropdown' => true,
                ]);

                // ➕ More menu
                $menus->push([
                    'key'   => 'more',
                    'label' => 'More',
                    'columns' => [
                        [
                            'links' => [
                                ['label' => 'Resources',   'href' => '/resources'],
                                ['label' => 'Scholarship', 'href' => '/scholarship/overview'],
                                ['label' => 'Counselor',   'href' => '/counselor'],
                            ],
                        ],
                    ],
                ]);

                return $menus;
            },
        ]);
    }


}
