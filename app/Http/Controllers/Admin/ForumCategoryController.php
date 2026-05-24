<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ForumCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ForumCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = ForumCategory::query();

        // Search
        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        // Sorting
        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';

        $categories = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->withQueryString();

        return $this->adminRender('Admin/ForumCategory/Index', [
            'categories' => $categories,
            'filters'    => $request->all(),
        ]);
    }

    public function create()
    {
        return $this->adminRender('Admin/ForumCategory/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:forum_categories,name',
            'slug' => 'nullable|string|max:255|unique:forum_categories,slug'
        ]);

        ForumCategory::create([
            'name' => $request->name,
            'slug' => $request->slug
                ? Str::slug($request->slug)
                : Str::slug($request->name),
        ]);

        return redirect()->route('admin.forum-categories.index')
            ->with('success', 'Forum Category created successfully.');
    }

    public function edit(ForumCategory $forum_category)
    {
        return $this->adminRender('Admin/ForumCategory/Edit', [
            'category' => $forum_category,
        ]);
    }

   public function update(Request $request, ForumCategory $forum_category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:forum_categories,slug,' . $forum_category->id,
            'category_icon' => 'nullable|string|max:255', // NEW VALIDATION
        ]);

        // Generate slug if not provided
        $slug = $request->slug
            ? Str::slug($request->slug)
            : Str::slug($request->name);

        $forum_category->update([
            'name'          => $request->name,
            'slug'          => $slug,
            'category_icon' => $request->category_icon, // SAVE ICON
        ]);

        return redirect()->route('admin.forum-categories.index')
            ->with('success', 'Forum Category updated successfully.');
    }
    public function destroy(ForumCategory $forum_category)
    {
        $forum_category->delete();

        return redirect()->route('admin.forum-categories.index')
            ->with('success', 'Forum Category deleted successfully.');
    }
}
