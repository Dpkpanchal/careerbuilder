<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipsController extends Controller
{
    public function overview()
    {
        return Inertia::render('Frontend/Scholarship/overview', [
            'title' => 'Scholarship Overview',
            'description' => 'Overview of scholarships available for students.',
        ]);
    }

    public function rateOfScholarship()
    {
        return Inertia::render('Frontend/Scholarship/rate-of-scholarship', [
            'title' => 'Rate of Scholarship',
            'description' => 'Details about the rate of scholarships offered.',
        ]);
    }

    public function moreScholarships()
    {
        return Inertia::render('Frontend/Scholarship/more-scholarships', [
            'title' => 'More Scholarships',
            'description' => 'Explore more scholarship opportunities for students.',
        ]);
    }

    public function educationLoans()
    {
        return Inertia::render('Frontend/Scholarship/education-loans', [
            'title' => 'Education Loans',
            'description' => 'Information about education loans for students.',
        ]);
    }  
    
    public function nationalFellowships()
    {
        return Inertia::render('Frontend/Scholarship/national-fellowships', [
            'title' => 'National Fellowships',
            'description' => 'Details about national fellowships available for students.',
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
