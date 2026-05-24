<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\ItiCollege;
use App\Models\CentralUniversity;


class CollegesController extends Controller
{
    public function iits()
    {
        return Inertia::render('Frontend/Colleges/iits', [
            'title' => 'Indian Institutes of Technology (IITs)',
            'description' => 'Explore the premier engineering institutes in India.',
        ]);
    }

    public function nits()
    {
        return Inertia::render('Frontend/Colleges/nits', [
            'title' => 'National Institutes of Technology (NITs)',
            'description' => 'Discover the top NITs across India for engineering education.',
        ]);
    }

    /*public function iiits()
    {
        return Inertia::render('Frontend/Colleges/iiits', [
            'title' => 'Indian Institutes of Information Technology (IIITs)',
            'description' => 'Learn about the leading IIITs in India for IT education.',
        ]);
    }*/

    public function aiims()
    {
        return Inertia::render('Frontend/Colleges/aiims', [
            'title' => 'All India Institutes of Medical Sciences (AIIMS)',
            'description' => 'Explore the premier medical institutes in India.',
        ]);
    }

    public function iims()
    {
        return Inertia::render('Frontend/Colleges/iims', [
            'title' => 'Indian Institutes of Management (IIMs)',
            'description' => 'Discover the top management institutes in India.',
        ]);
    }

    public function design()
    {
        return Inertia::render('Frontend/Colleges/design', [
            'title' => 'NIFT / NID – Fashion & Design Institutes',
            'description' => 'Explore premier fashion and design institutes in India.',
        ]);
    }

    public function nlu()
    {
        return Inertia::render('Frontend/Colleges/nlu', [
            'title' => 'National Law Universities (NLUs)',
            'description' => 'Discover the top law universities in India.',
        ]);
    }

    public function centralUniversities()
    {
        $universities = CentralUniversity::query()
        ->where('is_active', true)
        ->orderBy('name')
        ->get();

        return Inertia::render('Frontend/Colleges/Universities/central', [
            'title' => 'Central Universities in India',
            'description' => 'Explore the prestigious central universities across India.',
            'universities' => $universities,
        ]);
    }

    public function stateUniversities()
    {
        return Inertia::render('Frontend/Colleges/Universities/state', [
            'title' => 'State Universities in India',
            'description' => 'Discover the leading state universities across India.',
        ]);
    }

    public function privateDeemedUniversities()
    {
        return Inertia::render('Frontend/Colleges/Universities/private', [
            'title' => 'Private & Deemed Universities in India',
            'description' => 'Explore the top private and deemed universities across India.',
        ]);
    }

    public function openDistanceUniversities()
    {
        return Inertia::render('Frontend/Colleges/Universities/open', [
            'title' => 'Open & Distance Universities in India',
            'description' => 'Discover the leading open and distance learning universities across India.',
        ]);
    }

    public function engineeringColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/engineering', [
            'title' => 'Engineering Colleges in India',
            'description' => 'Explore top engineering colleges across India.',
        ]);
    }

    public function medicalColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/medical', [
            'title' => 'Medical & Paramedical Colleges in India',
            'description' => 'Discover leading medical and paramedical colleges across India.',
        ]);
    }

    public function nursingColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/nursing', [
            'title' => 'Nursing Colleges in India',
            'description' => 'Discover leading nursing colleges across India.',
        ]);
    } 

    public function pharmacyColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/pharmacy', [
            'title' => 'Pharmacy Colleges in India',
            'description' => 'Discover leading pharmacy colleges across India.',
        ]);
    } 
    
    public function managementColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/management', [
            'title' => 'Management Colleges in India',
            'description' => 'Discover leading management colleges across India.',
        ]);
    }

    public function lawColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/law', [
            'title' => 'Law Colleges in India',
            'description' => 'Discover leading law colleges across India.',
        ]);
    }

    public function agricultureColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/agriculture', [
            'title' => 'Agriculture Colleges in India',
            'description' => 'Discover leading agriculture colleges across India.',
        ]);
    }

    public function teacherTrainingColleges()
    {
        return Inertia::render('Frontend/Colleges/byFieldOfStudy/teacher-training', [
            'title' => 'Teacher Training Colleges in India',
            'description' => 'Discover leading teacher training colleges across India.',
        ]);
    }

    public function itiCentres()
    {
        $itis = ItiCollege::with('trades')
        ->orderBy('name')
        ->get();

       // dd($itis);

        return Inertia::render('Frontend/Colleges/vocationalTechnical/iti', [
            'title' => 'ITI Centres (Govt / Private) in India',
            'description' => 'Discover leading ITI centres across India.',
            'itis' => $itis,
        ]);
    }

    public function polytechnicColleges()
    {
        return Inertia::render('Frontend/Colleges/vocationalTechnical/polytechnic', [
            'title' => 'Polytechnic Colleges in India',
            'description' => 'Discover leading polytechnic colleges across India.',
        ]);
    }

    public function msmeToolRoomInstitutes()
    {
        return Inertia::render('Frontend/Colleges/vocationalTechnical/msme', [
            'title' => 'MSME Tool Room Institutes in India',
            'description' => 'Discover leading MSME tool room institutes across India.',
        ]);
    }

    public function skillDevelopmentCentres()
    {
        return Inertia::render('Frontend/Colleges/vocationalTechnical/skill', [
            'title' => 'Skill Development Centres in India',
            'description' => 'Discover leading skill development centres across India.',
        ]);
    }
    
}   