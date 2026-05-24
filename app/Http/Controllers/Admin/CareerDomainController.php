<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CareerDomain;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerDomainController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/CareerDomains/Index', [
            'domains' => CareerDomain::latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/CareerDomains/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'subtitle' => 'nullable',
            'image' => 'nullable|image',
            'link' => 'nullable',
            'details' => 'nullable',
        ]);

        $path = null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('career-domains', 'public');
        }

        CareerDomain::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'image' => $path,
            'link' => $request->link,
            'details' => $request->details,
        ]);

        return redirect()->route('admin.career-domains.index')->with('success', 'Saved Successfully');
   
    }

    public function edit(CareerDomain $careerDomain)
    {
        return Inertia::render('Admin/CareerDomains/Edit', [
            'domain' => $careerDomain
        ]);
    }

    public function update(Request $request, CareerDomain $careerDomain)
    {
        $path = $careerDomain->image;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('career-domains', 'public');
        }

        $careerDomain->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'link' => $request->link,
            'details' => $request->details,
            'image' => $path,
        ]);

        return redirect()->route('admin.career-domains.index')
            ->with('success', 'Updated Successfully');
    }

    public function destroy(CareerDomain $careerDomain)
    {
        // 🔹 delete image (optional but recommended)
        if ($careerDomain->image && \Storage::disk('public')->exists($careerDomain->image)) {
            \Storage::disk('public')->delete($careerDomain->image);
        }

        $careerDomain->delete();

        return redirect()->route('admin.career-domains.index')
            ->with('success', 'Deleted Successfully');
    }

}