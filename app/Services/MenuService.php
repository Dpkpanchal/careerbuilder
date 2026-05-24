<?php

namespace App\Services;

use App\Models\Menu;
use Illuminate\Support\Facades\Cache;

class MenuService
{
    public function getMenusForFrontend(): array
    {
        return Cache::remember('frontend_menus', 3600, function () {
            $all = Menu::where('is_active', true)->orderBy('sort_order')->get();

            return $all->where('type', 'menu')
                ->values()
                ->map(fn($m) => $this->buildTree($m, $all))
                ->toArray();
        });
    }

    private function buildTree(Menu $menu, $all): array
    {
        $item = [
            'key'        => $menu->key,
            'label'      => $menu->label,
            'tabbed'     => $menu->tabbed,
            'noDropdown' => $menu->no_dropdown,
            'href'       => $this->resolveHref($menu),
        ];

        if ($menu->tabbed) {
            $tabs = $all->where('parent_id', $menu->id)->where('type', 'tab');

            $item['tabs'] = $tabs->map(function ($tab) use ($all) {
                $sections = $all->where('parent_id', $tab->id)->where('type', 'section');

                return [
                    'key'      => $tab->key,
                    'label'    => $tab->label,
                    'sections' => $sections->map(function ($section) use ($all) {
                        $links = $all->where('parent_id', $section->id)->where('type', 'link');

                        return [
                            'title' => $section->label,
                            'links' => $links->map(fn($link) => [
                                'label' => $link->label,
                                'href'  => $this->resolveHref($link),
                            ])->values()->toArray(),
                        ];
                    })->values()->toArray(),
                ];
            })->values()->toArray();
        }

        return $item;
    }

    private function resolveHref(Menu $menu): ?string
    {
        if ($menu->route_name) {
            try {
                return route($menu->route_name);
            } catch (\Throwable) {
                // fall through to slug/href
            }
        }

        if ($menu->slug) {
            return url('/' . ltrim($menu->slug, '/'));
        }

        return $menu->href;
    }

    public static function clearCache(): void
    {
        Cache::forget('frontend_menus');
    }
}
