<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsCategory;
use Illuminate\Http\Request;

class NewsCategoryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:news_categories,name',
        ]);

        NewsCategory::create($validated);

        return back()->with('success', 'Category created successfully.');
    }

    public function update(Request $request, NewsCategory $newsCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:news_categories,name,' . $newsCategory->id,
        ]);

        $newsCategory->update($validated);

        return back()->with('success', 'Category updated successfully.');
    }

    public function destroy(NewsCategory $newsCategory)
    {
        if ($newsCategory->news()->exists()) {
            return back()->with('error', 'Cannot delete a category that has news linked to it.');
        }

        $newsCategory->delete();

        return back()->with('success', 'Category deleted successfully.');
    }
}