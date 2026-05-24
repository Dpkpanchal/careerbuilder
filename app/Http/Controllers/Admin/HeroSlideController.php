<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class HeroSlideController extends Controller
{
    public function index()
    {
             $records = HeroSlide::orderBy('order')->paginate(10);

            return Inertia::render('Admin/HeroSlides/Index', [
                'records' => $records
            ]);
    }

    public function create()
    {
        return Inertia::render('Admin/HeroSlides/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'title_gradient' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string',
            'cta_text' => 'nullable|string|max:255',
            'cta_link' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048', // ✅ FIXED
            'order' => 'nullable|integer',
        ]);

        // ✅ Handle image upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('hero-slides', 'public');
            $validated['img_base'] = $path; // ✅ SAVE path to DB
        }

        HeroSlide::create($validated);

         return redirect()->route('admin.hero-slides.index')
            ->with('success', 'Hero slide added successfully.');
    }

    public function edit(HeroSlide $heroSlide)
    {
        return Inertia::render('Admin/HeroSlides/Edit', [
            'slide' => $heroSlide
        ]);
    }

    public function update(Request $request, HeroSlide $heroSlide)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'title_gradient' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string',
            'cta_text' => 'nullable|string|max:255',
            'cta_link' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'order' => 'nullable|integer',
        ]);

        // ✅ If new image uploaded
        if ($request->hasFile('image')) {

            // delete old image
            if ($heroSlide->img_base) {
                Storage::disk('public')->delete($heroSlide->img_base);
            }

            // store new image
            $validated['img_base'] = $request->file('image')->store('hero-slides', 'public');
        }

        $heroSlide->update($validated);

        return redirect()->route('admin.hero-slides.index')
            ->with('success', 'Hero slide updated successfully.');
    }

    public function destroy(HeroSlide $heroSlide)
    {
        $heroSlide->delete();

        return redirect()->back();
    }
}