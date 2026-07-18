<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EducationLoan;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EducationLoanController extends Controller
{
    public function index()
    {
        $loan = EducationLoan::first();
      //  return view('admin.education-loan.index', compact('loan'));

         return Inertia::render('Admin/EducationLoan/Index', [
            'loan' => $loan,
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'eligibility' => 'nullable|string',
            'application_process' => 'nullable|string',
            'age_group' => 'nullable|string|max:100',
            'income_rates' => 'nullable|array',
            'disbursement_info' => 'nullable|string',
            'loan_care_link' => 'nullable|url',
            'vidya_lakshmi_link' => 'nullable|url',
            'is_active' => 'boolean'
        ]);

        $loan = EducationLoan::first();
        
        if (!$loan) {
            $loan = EducationLoan::create($validated);
        } else {
            $loan->update($validated);
        }

        return redirect()->back()->with('success', 'Education Loan page updated successfully!');
    }
}