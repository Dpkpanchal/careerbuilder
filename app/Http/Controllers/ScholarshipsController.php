<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\EducationLoan;
use App\Models\NationalFellowship;
use App\Models\Scholarship;
use App\Models\ScholarshipRate;
use App\Models\ScholarshipOverviewTable;


class ScholarshipsController extends Controller
{
    public function overview()
    {
    
        $overview = ScholarshipOverviewTable::where('is_active', true)
        ->orderBy('sort_order')
        ->get();

        $data = $overview->map(function ($item,$i) {
            return [
                'no' => $i + 1,
                'name' => $item->name ?? '',
                'classOfStudy' => $item->class_of_study ?? '',
                'website' => $item->website ?? '',
                'minMarks' => $item->minimum_marks ?? '',
                'income' => $item->annual_family_income ?? '',
            ];
        });

        return Inertia::render('Frontend/Scholarship/overview', [
            'title' => 'Scholarship Overview',
            'description' => 'Overview of scholarships available for students.',
            'data' => $data,
        ]);
    }

    public function rateOfScholarship()
    {

     $rates = ScholarshipRate::where('is_active', true)
        ->orderBy('sort_order')
        ->get();

        $data = $rates->map(function ($rate) {
            return [
                'no' => (int) $rate->no,
                'type' => $rate->type,
                'classOfStudy' => $rate->class_of_study,

                'dayScholar' => [
                    'admissionTuitionFee'   => (int) ($rate->day_admission_tuition_fee ?? 0),
                    'maintenanceAllowance'  => (int) ($rate->day_maintenance_allowance ?? 0),
                    'total'                 => (int) ($rate->day_total ?? 0),
                ],

                'hosteller' => [
                    'admissionTuitionFee'   => (int) ($rate->hostel_admission_tuition_fee ?? 0),
                    'maintenanceAllowance'  => (int) ($rate->hostel_maintenance_allowance ?? 0),
                    'total'                 => (int) ($rate->hostel_total ?? 0),
                ],
            ];
        });
        return Inertia::render('Frontend/Scholarship/rate-of-scholarship', [
            'title' => 'Rate of Scholarship',
            'description' => 'Details about the rate of scholarships offered.',
            'data' => $data,
        ]);
    }

    public function moreScholarships()
    {

         $scholarships = Scholarship::where('is_active', true)
            ->orderBy('sort_order')
            ->get([
                'id',
                'name',
                'category',
                'criteria',
                'award',
                'eligibility',
                'when_to_apply',
                'application',
                'links',
            ]);

        return Inertia::render('Frontend/Scholarship/more-scholarships', [
            'title' => 'More Scholarships',
            'description' => 'Explore more scholarship opportunities for students.',
            'data' => $scholarships,
        ]);
    }

    public function educationLoans()
    {
        $loan = EducationLoan::where('is_active', true)->first();

        abort_unless($loan, 404);

        return Inertia::render('Frontend/Scholarship/education-loans', [
            'title' => 'Education Loans',
            'description' => 'Information about education loans for students.',
            'data' => $loan
        ]);
    }  
    
    public function nationalFellowships()
    {

         $items = NationalFellowship::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get();

           // dd($items);

        return Inertia::render('Frontend/Scholarship/national-fellowships', [
            'title' => 'National Fellowships',
            'description' => 'Details about national fellowships available for students.',
            'data' => $items,
        ]);
    }

    public function studyAbroad()
    {
        return Inertia::render('Frontend/Scholarship/study-abroad', [
            'title' => 'Study Abroad',
            'description' => 'Opportunities and information for studying abroad.',
        ]);
    }
}
