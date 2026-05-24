<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Services\MenuService;
use Illuminate\Http\Request;

class NavMenuController extends Controller
{
    public function index(Request $request)
    {
        $search = trim($request->input('search', ''));
        $type   = $request->input('type', '');
        $status = $request->input('status', ''); // '' | 'active' | 'inactive' | 'deleted'

        $isFiltered = $search !== '' || $type !== '' || $status !== '';

        $query = match ($status) {
            'deleted'  => Menu::onlyTrashed(),
            'active'   => Menu::where('is_active', true),
            'inactive' => Menu::where('is_active', false),
            default    => Menu::query(),
        };

        $query->withCount('children')->orderBy('sort_order');

        if ($search !== '') {
            $query->where(function ($q) use ($search) {
                $q->where('label', 'like', "%{$search}%")
                  ->orWhere('key',   'like', "%{$search}%")
                  ->orWhere('slug',  'like', "%{$search}%");
            });
        }

        if ($type !== '') {
            $query->where('type', $type);
        }

        $all   = $query->get();
        $menus = $isFiltered
            ? $this->buildFlatList($all, $status === 'deleted')
            : $this->buildDisplayList($all);

        return $this->adminRender('Admin/Menus/Index', [
            'menus'   => $menus,
            'filters' => compact('search', 'type', 'status'),
            'counts'  => [
                'all'      => Menu::count(),
                'active'   => Menu::where('is_active', true)->count(),
                'inactive' => Menu::where('is_active', false)->count(),
                'deleted'  => Menu::onlyTrashed()->count(),
            ],
        ]);
    }

    public function create()
    {
        return $this->adminRender('Admin/Menus/Create', [
            'parents' => $this->parentOptions(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'label'       => 'required|string|max:255',
            'key'         => 'required|string|max:255|unique:menus,key',
            'type'        => 'required|in:menu,tab,section,link',
            'parent_id'   => 'nullable|exists:menus,id',
            'route_name'  => 'nullable|string|max:255',
            'slug'        => 'nullable|string|max:255',
            'href'        => 'nullable|string|max:500',
            'tabbed'      => 'boolean',
            'no_dropdown' => 'boolean',
            'sort_order'  => 'integer|min:0',
            'is_active'   => 'boolean',
        ]);

        Menu::create($data);
        MenuService::clearCache();

        return redirect()->route('admin.nav-menus.index')
            ->with('success', 'Menu item created successfully.');
    }

    public function edit(Menu $navMenu)
    {
        return $this->adminRender('Admin/Menus/Edit', [
            'menu'    => $navMenu,
            'parents' => $this->parentOptions($navMenu->id),
        ]);
    }

    public function update(Request $request, Menu $navMenu)
    {
        $data = $request->validate([
            'label'       => 'required|string|max:255',
            'key'         => 'required|string|max:255|unique:menus,key,' . $navMenu->id,
            'type'        => 'required|in:menu,tab,section,link',
            'parent_id'   => 'nullable|exists:menus,id',
            'route_name'  => 'nullable|string|max:255',
            'slug'        => 'nullable|string|max:255',
            'href'        => 'nullable|string|max:500',
            'tabbed'      => 'boolean',
            'no_dropdown' => 'boolean',
            'sort_order'  => 'integer|min:0',
            'is_active'   => 'boolean',
        ]);

        $navMenu->update($data);
        MenuService::clearCache();

        return redirect()->route('admin.nav-menus.index')
            ->with('success', 'Menu item updated successfully.');
    }

    public function destroy(Menu $navMenu)
    {
        if ($navMenu->children()->exists()) {
            return back()->withErrors([
                'delete' => "Cannot delete \"{$navMenu->label}\" — it has child menus. Reassign or delete all children first.",
            ]);
        }

        $navMenu->delete();
        MenuService::clearCache();

        return redirect()->route('admin.nav-menus.index')
            ->with('success', "Menu \"{$navMenu->label}\" deleted. It can be restored from the Deleted tab.");
    }

    public function restore(int $id)
    {
        $menu = Menu::withTrashed()->findOrFail($id);
        $menu->restore();
        MenuService::clearCache();

        return back()->with('success', "Menu \"{$menu->label}\" has been restored.");
    }

    public function toggleActive(Menu $navMenu)
    {
        $navMenu->update(['is_active' => !$navMenu->is_active]);
        MenuService::clearCache();

        return back()->with('success', 'Status updated.');
    }

    // -------------------------------------------------------

    private function parentOptions(?int $excludeId = null): array
    {
        $all = Menu::when($excludeId, fn($q) => $q->where('id', '!=', $excludeId))
            ->orderBy('sort_order')
            ->get(['id', 'key', 'label', 'type', 'parent_id']);

        $map = $all->keyBy('id');

        return $all->map(function ($m) use ($map) {
            $rootKey = $m->key;
            $current = $m;
            while ($current->parent_id && isset($map[$current->parent_id])) {
                $current = $map[$current->parent_id];
                $rootKey = $current->key;
            }

            return [
                'id'       => $m->id,
                'label'    => "[{$m->type}] {$m->label}",
                'type'     => $m->type,
                'root_key' => $rootKey,
            ];
        })->toArray();
    }

    private function buildDisplayList($all, ?int $parentId = null, int $depth = 0): array
    {
        $result = [];
        $items  = $all->where('parent_id', $parentId)->sortBy('sort_order');

        foreach ($items as $item) {
            $result[] = [
                'id'           => $item->id,
                'key'          => $item->key,
                'label'        => $item->label,
                'type'         => $item->type,
                'route_name'   => $item->route_name,
                'slug'         => $item->slug,
                'href'         => $item->href,
                'tabbed'       => $item->tabbed,
                'no_dropdown'  => $item->no_dropdown,
                'is_active'    => $item->is_active,
                'sort_order'   => $item->sort_order,
                'depth'        => $depth,
                'has_children' => $item->children_count > 0,
                'is_deleted'   => false,
                'deleted_at'   => null,
            ];
            $children = $this->buildDisplayList($all, $item->id, $depth + 1);
            array_push($result, ...$children);
        }

        return $result;
    }

    private function buildFlatList($items, bool $isDeleted = false): array
    {
        return $items->map(fn($item) => [
            'id'           => $item->id,
            'key'          => $item->key,
            'label'        => $item->label,
            'type'         => $item->type,
            'route_name'   => $item->route_name,
            'slug'         => $item->slug,
            'href'         => $item->href,
            'tabbed'       => $item->tabbed,
            'no_dropdown'  => $item->no_dropdown,
            'is_active'    => $item->is_active,
            'sort_order'   => $item->sort_order,
            'depth'        => 0,
            'has_children' => $item->children_count > 0,
            'is_deleted'   => $isDeleted,
            'deleted_at'   => $isDeleted ? $item->deleted_at?->format('Y-m-d H:i') : null,
        ])->toArray();
    }
}
