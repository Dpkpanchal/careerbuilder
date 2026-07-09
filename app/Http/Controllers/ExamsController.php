<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ExamContent;

class ExamsController extends Controller
{

    private function getExamContents($menuId, $tabId, $sectionId)
    {
        return ExamContent::where('menu_id', $menuId)
            ->where('tab_id', $tabId)
            ->where('section_id', $sectionId)
            ->where('is_active', true)
            ->orderBy('id')
            ->get();
    }

    public function national()
    {
        return Inertia::render('Frontend/Exams/Engineering/National', [
            'title' => 'National Engineering Exams',
            'description' => 'List of National Level Engineering Entrance Exams',
        ]);
    }

    public function state()
    {
        return Inertia::render('Frontend/Exams/Engineering/State', [
            'title' => 'State Engineering Exams',
            'description' => 'List of State Level Engineering Entrance Exams',
        ]);
    }

    public function university()
    {
        return Inertia::render('Frontend/Exams/Engineering/University', [
            'title' => 'University Engineering Exams',
            'description' => 'List of University Level Engineering Entrance Exams',
        ]);
    }

    public function mcaEntranceExams()
    {
        return Inertia::render('Frontend/Exams/Engineering/computer-applications', [
            'title' => 'MCA Entrance Exams',
            'description' => 'List of MCA Entrance Exams',
        ]);
    }

    public function architectureExams()
    {
        return Inertia::render('Frontend/Exams/Engineering/architecture', [
            'title' => 'Architecture Exams (NATA/AAT/TANATA)',
            'description' => 'List of Architecture Entrance Exams like NATA, AAT, TANATA',
        ]);
    }

    public function medicalNational()
    {
        return Inertia::render('Frontend/Exams/Medical/national', [
            'title' => 'National Medical Exams',
            'description' => 'List of National Level Medical Entrance Exams',
        ]);
    }

    public function medicalState()
    {
        return Inertia::render('Frontend/Exams/Medical/state', [
            'title' => 'State Medical Exams',
            'description' => 'List of State Level Medical Entrance Exams',
        ]);
    }   

    public function nursingExams()
    {
        return Inertia::render('Frontend/Exams/Medical/nursing', [
            'title' => 'Nursing & Allied Exams',
            'description' => 'List of Nursing & Allied Entrance Exams',
        ]);
    }

    public function pgMedicalExams()
    {
        return Inertia::render('Frontend/Exams/Medical/pg', [
            'title' => 'PG Medical Exams (MD/MS)',
            'description' => 'List of Postgraduate Medical Entrance Exams (MD/MS)',
        ]);
    }
    public function pharmacyExams()
    {
        return Inertia::render('Frontend/Exams/Medical/pharmacy', [
            'title' => 'Pharmacy Entrance Exams',
            'description' => 'List of Pharmacy Entrance Exams',
        ]);
    }

    public function nationalLevelExams()
    {
        return Inertia::render('Frontend/Exams/hotelManagement/national', [
            'title' => 'National Hotel Management Exams',
            'description' => 'List of National Level Hotel Management Entrance Exams',
        ]);
    }

    public function stateLevelExams()
    {
        return Inertia::render('Frontend/Exams/hotelManagement/state', [
            'title' => 'State Hotel Management Exams',
            'description' => 'List of State Level Hotel Management Entrance Exams',
        ]);
    }
    public function hotelUniversityExams()
    {
        return Inertia::render('Frontend/Exams/hotelManagement/university', [
            'title' => 'University Hotel Management Exams',
            'description' => 'List of University Level Hotel Management Entrance Exams',
        ]);
    }
    public function industryExams()
    {
        return Inertia::render('Frontend/Exams/hotelManagement/hotel-run', [
            'title' => 'Hotel-run / Industry Hotel Management Exams',
            'description' => 'List of Hotel-run / Industry Hotel Management Entrance Exams',
        ]);
    }

    public function lawExams()
    {
        return Inertia::render('Frontend/Exams/Law/law', [
            'title' => 'Law Entrance Exams',
            'description' => 'List of Law Entrance Exams',
        ]);
    }
    public function managementExams()
    {
        return Inertia::render('Frontend/Exams/Law/management', [
            'title' => 'MBA & Management Exams',
            'description' => 'List of MBA & Management Entrance Exams',
        ]);
    }
    public function financeAccountsExams()
    {
        return Inertia::render('Frontend/Exams/Law/finance-accounts', [
            'title' => 'CA / CS / CMA / CFA Exams',
            'description' => 'List of CA / CS / CMA / CFA Entrance Exams',
        ]); 
    }

    public function fashionDesignExams()
    {
        return Inertia::render('Frontend/Exams/Design/design', [
            'title' => 'Design & Fashion Exams',
            'description' => 'List of Design & Fashion Entrance Exams',
        ]);
    }
    public function massCommExams()
    {
        return Inertia::render('Frontend/Exams/Design/mass-comm', [
            'title' => 'Mass Comm Exams',
            'description' => 'List of Mass Comm Entrance Exams',
        ]);
    }
    public function humanitiesExams()
    {
        return Inertia::render('Frontend/Exams/Design/humanities', [
            'title' => 'Humanities Exams',
            'description' => 'List of Humanities Entrance Exams',
        ]);
    }
    public function mathematicsExams()
    {
        return Inertia::render('Frontend/Exams/Design/mathematics', [
            'title' => 'Mathematics (UG) Admissions/Tests',
            'description' => 'List of Mathematics (UG) Admissions/Tests',
        ]);
    }

    public function agricultureExams()
    {

        return Inertia::render('Frontend/Exams/Agri/agriculture', [
            'title' => 'Agriculture Exams',
            'description' => 'List of Agriculture Entrance Exams',
        ]);
    }
    public function veterinaryExams()
    {
        return Inertia::render('Frontend/Exams/Agri/veterinary', [
            'title' => 'Veterinary Exams',
            'description' => 'List of Veterinary Entrance Exams',
        ]);
    }
    public function defenceExams()
    {
        return Inertia::render('Frontend/Exams/Agri/defence', [
            'title' => 'Defence Exams (NDA/CDS/TES etc.)',
            'description' => 'List of Defence Entrance Exams (NDA/CDS/TES etc.)',
        ]);
    }
    public function schoolExams()
    {
        return Inertia::render('Frontend/Exams/Agri/school', [
            'title' => 'School Scholarship / Talent Exams',
            'description' => 'List of School Scholarship / Talent Exams',
        ]);
    }
}
