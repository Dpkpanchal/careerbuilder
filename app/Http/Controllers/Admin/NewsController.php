<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    // 🔹 List
    public function index(Request $request)
    {
        $query = News::query();

        // ✅ CATEGORY FILTER
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $news = $query->latest()->get();

        return Inertia::render('Admin/News/Index', [
            'news' => $news,
            'filters' => $request->only('category'),
        ]);
    }

    // 🔹 Create page
    public function create()
    {
        return Inertia::render('Admin/News/Create');
    }

    // 🔹 Store
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category' => 'required',
            'date' => 'nullable|date',
            'description' => 'nullable'

        ]);

        News::create([

            'title' => $request->title,

            'slug' => Str::slug($request->title),

            'category' => $request->category,

            'date' => $request->date,

            'description' => $request->description,


        ]);

        return redirect()->route('admin.news.index')
            ->with('success', 'News created successfully');
    }

    // 🔹 Edit page
    public function edit(News $news)
    {
        return Inertia::render('Admin/News/Edit', [
            'news' => $news
        ]);
    }

    // 🔹 Update
 public function update(Request $request, News $news)
{
    $request->validate([
        'title' => 'required',
        'category' => 'required',
    ]);

    $news->update([

        'title' => $request->title,

        'category' => $request->category,

        'date' => $request->date ?? $news->date,

        'description' => $request->description

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
}