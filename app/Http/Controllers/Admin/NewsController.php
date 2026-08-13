<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    // 🔹 List
    public function index(Request $request)
    {
        $query = News::with('category');

        // ✅ CATEGORY FILTER (ab category slug se filter hota hai)
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        $news = $query->latest()->orderBy('id')->get();

        $categories = NewsCategory::where('is_active', true)->orderBy('name')->get();

        return Inertia::render('Admin/News/Index', [
            'news' => $news,
            'categories' => $categories,
            'filters' => $request->only('category'),
        ]);
    }

    // 🔹 Create page
    public function create()
    {
        $categories = NewsCategory::where('is_active', true)->orderBy('name')->get();

        return Inertia::render('Admin/News/Create', [
            'categories' => $categories,
        ]);
    }

    // 🔹 Store
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:news_categories,id',
            'date' => 'nullable|date',
            'description' => 'nullable|string',
        ]);

        News::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'category_id' => $request->category_id,
            'date' => $request->date,
            'description' => $request->description,
        ]);

        return redirect()->route('admin.news.index')
            ->with('success', 'News created successfully');
    }

    // 🔹 Edit page
    public function edit(News $news)
    {
        $categories = NewsCategory::where('is_active', true)->orderBy('name')->get();

        return Inertia::render('Admin/News/Edit', [
            'news' => $news->load('category'),
            'categories' => $categories,
        ]);
    }

    // 🔹 Update
    public function update(Request $request, News $news)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:news_categories,id',
        ]);

        $news->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'date' => $request->date ?? $news->date,
            'description' => $request->description,
        ]);

        return redirect()->route('admin.news.index')
            ->with('success', 'News updated successfully');
    }

    // 🔹 Delete
    public function destroy(News $news)
    {
        $news->delete();

        return back()->with('success', 'Deleted successfully');
    }

    public function toggleStatus(News $news)
    {
        $news->update(['is_active' => !$news->is_active]);

        return back()->with('success', 'Status updated successfully.');
    }

}