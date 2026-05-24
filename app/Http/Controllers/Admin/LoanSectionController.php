<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LoanSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanSectionController extends Controller
{
    public function index()
    {
        $items = LoanSection::orderBy('order')
            ->orderBy('id')
            ->get();
        return Inertia::render('Admin/LoanSections/Index', [
            'items' => $items
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/LoanSections/Create');
    }

    public function store(Request $request)
    {
        LoanSection::create($request->all());

        return redirect()->route('loan-sections.index')
            ->with('success', 'Saved Successfully');
    }

    public function edit(LoanSection $loanSection)
    {
        return Inertia::render('Admin/LoanSections/Edit', [
            'item' => $loanSection
        ]);
    }

    public function update(Request $request, LoanSection $loanSection)
    {
        $loanSection->update($request->all());

        return redirect()->route('admin.loan-sections.index');
    }

    public function destroy(LoanSection $loanSection)
    {
        $loanSection->delete();

        return back()->with('success', 'Deleted Successfully');
    }
}