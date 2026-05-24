<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesController extends Controller
{
    public function classEightPlus()
    {
        return Inertia::render('Frontend/Courses/Vocational/class-8-plus', [
            'title' => 'Class 8+ Vocational Trades',
            'description' => 'Explore vocational trades available after class 8.',
        ]);
    }

    public function classTenPlus()
    {
        return Inertia::render('Frontend/Courses/Vocational/class-10-plus', [
            'title' => 'Class 10+ Vocational Trades',
            'description' => 'Explore vocational trades available after class 10.',
        ]);
    }

    public function itiCourses()
    {
        return Inertia::render('Frontend/Courses/Vocational/iti', [
            'title' => 'ITI Courses',
            'description' => 'Discover various ITI courses offered.',
        ]);
    }

    public function msme()
    {
        return Inertia::render('Frontend/Courses/Vocational/msme', [
            'title' => 'MSME Courses',
            'description' => 'Learn about courses offered by MSME.',
        ]);
    }

    public function diplomaEngineering()
    {
        return Inertia::render('Frontend/Courses/Diploma/engineering', [
            'title' => 'Diploma in Engineering',
            'description' => 'Pursue a diploma in various engineering disciplines.',
        ]);
    }

    public function diplomaParamedical()
    {
        return Inertia::render('Frontend/Courses/Diploma/paramedical', [
            'title' => 'Diploma in Paramedical',
            'description' => 'Explore diploma courses in paramedical fields.',
        ]);
    }

    public function diplomaPharmacy()
    {
        return Inertia::render('Frontend/Courses/Diploma/pharmacy', [
            'title' => 'Diploma in Pharmacy',
            'description' => 'Get information about diploma courses in pharmacy.',
        ]);
    }

    public function diplomaIT()
    {
        return Inertia::render('Frontend/Courses/Diploma/it', [
            'title' => 'Diploma in IT',
            'description' => 'Discover diploma courses in Information Technology.',
        ]);
    }

    public function degreeGraduationArts()
    {
        return Inertia::render('Frontend/Courses/Streamlined/arts', [
            'title' => 'Degree Graduation in Arts',
            'description' => 'Explore graduation courses in Arts (BA & Allied).',
        ]);
    }

    public function degreeGraduationCommerce()
    {
        return Inertia::render('Frontend/Courses/Streamlined/commerce', [
            'title' => 'Degree Graduation in Commerce',
            'description' => 'Discover graduation courses in Commerce (B.Com & Allied).',
        ]);
    }

    public function degreeGraduationScience()
    {
        return Inertia::render('Frontend/Courses/Streamlined/science', [
            'title' => 'Degree Graduation in Science',
            'description' => 'Learn about graduation courses in Science (B.Sc & Allied).',
        ]);
    }

    public function degreePostGraduationArts()
    {
        return Inertia::render('Frontend/Courses/Streamlined/arts-pg', [
            'title' => 'Degree Post Graduation in Arts',
            'description' => 'Explore post graduation courses in Arts (MA, MSW & Allied).',
        ]);
    }

    public function degreePostGraduationCommerce()
    {
        return Inertia::render('Frontend/Courses/Streamlined/commerce-pg', [
            'title' => 'Degree Post Graduation in Commerce',
            'description' => 'Discover post graduation courses in Commerce (M.Com & Allied).',
        ]);
    }

    public function degreePostGraduationScience()
    {
        return Inertia::render('Frontend/Courses/Streamlined/science-pg', [
            'title' => 'Degree Post Graduation in Science',
            'description' => 'Learn about post graduation courses in Science (M.Sc & Allied).',
        ]);
    }

    public function nursingCourses()
    {
        return Inertia::render('Frontend/Courses/Medical/nursing', [
            'title' => 'Nursing Courses',
            'description' => 'Explore various nursing courses available.',
        ]);
    }

    public function mbbsCourses()
    {
        return Inertia::render('Frontend/Courses/Medical/mbbs', [
            'title' => 'MBBS & Core Medical Degrees',
            'description' => 'Discover MBBS and other core medical degree programs.',
        ]);
    }

    public function paramedicalDiploma()
    {
        return Inertia::render('Frontend/Courses/Medical/diploma', [
            'title' => 'Medical & Paramedical Courses',
            'description' => 'Discover courses in the medical and paramedical fields.',
        ]);
    }

    public function paramedicalUG()
    {
        return Inertia::render('Frontend/Courses/Medical/ug', [
            'title' => 'UG Medical & Paramedical Courses',
            'description' => 'Explore undergraduate courses in medical and paramedical fields.',
        ]);
    }

    public function paramedicalPG()
    {
        return Inertia::render('Frontend/Courses/Medical/pg', [
            'title' => 'PG Medical & Paramedical Courses',
            'description' => 'Learn about postgraduate courses in medical and paramedical fields.',
        ]);
    }

    public function alliedHealthSciences()
    {
        return Inertia::render('Frontend/Courses/Medical/allied-health', [
            'title' => 'Allied Health Sciences Courses',
            'description' => 'Explore courses in Allied Health Sciences like Physiotherapy, MLT, Radiology, OT, etc.',
        ]);
    }

    public function ayushCourses()
    {
        return Inertia::render('Frontend/Courses/Medical/ayush', [
            'title' => 'AYUSH Courses',
            'description' => 'Get information about AYUSH courses including Ayurveda, Homoeopathy, Unani, and Siddha.',
        ]);
    }

    public function naturopathyYoga()
    {
        return Inertia::render('Frontend/Courses/Medical/naturopathy-yoga', [
            'title' => 'Naturopathy & Yoga Courses',
            'description' => 'Discover courses in Naturopathy and Yoga.',
        ]);
    }

    public function pharmacyCourses()
    {
        return Inertia::render('Frontend/Courses/Medical/pharmacy', [
            'title' => 'Pharmacy Courses',
            'description' => 'Get information about various pharmacy courses.',
        ]);
    }

    public function btechBE()
    {
        return Inertia::render('Frontend/Courses/engTech/btech', [
            'title' => 'B.Tech / B.E Programs',
            'description' => 'Explore Bachelor of Technology and Bachelor of Engineering programs.',
        ]);
    }

    public function barch()
    {
        return Inertia::render('Frontend/Courses/engTech/barch', [
            'title' => 'B.Arch Programs',
            'description' => 'Discover Bachelor of Architecture programs.',
        ]);
    }

    public function mtech()
    {
        return Inertia::render('Frontend/Courses/engTech/mtech', [
            'title' => 'M.Tech Programs',
            'description' => 'Learn about Master of Technology programs.',
        ]);
    }

    public function mscIt()
    {
        return Inertia::render('Frontend/Courses/engTech/msc', [
            'title' => 'M.Sc Computer Science / IT Programs',
            'description' => 'Explore Master of Science in Computer Science and Information Technology programs.',
        ]);
    }

    public function bca()
    {
        return Inertia::render('Frontend/Courses/engTech/bca', [
            'title' => 'BCA Programs',
            'description' => 'Discover Bachelor of Computer Applications programs.',
        ]);
    }

    public function bscIt()
    {
        return Inertia::render('Frontend/Courses/engTech/bsc-computer', [
            'title' => 'B.Sc Computer Science / IT Programs',
            'description' => 'Learn about Bachelor of Science in Computer Science and Information Technology programs.',
        ]);
    }

    public function mca()
    {
        return Inertia::render('Frontend/Courses/engTech/mca', [
            'title' => 'MCA Programs',
            'description' => 'Explore Master of Computer Applications programs.',
        ]);
    }

    public function bcom()
    {
        return Inertia::render('Frontend/Courses/businessManagement/bcom', [
            'title' => 'B.Com Programs',
            'description' => 'Discover Bachelor of Commerce programs.',
        ]);
    }

    public function mcom()
    {
        return Inertia::render('Frontend/Courses/businessManagement/mcom', [
            'title' => 'M.Com & PG Commerce Programs',
            'description' => 'Explore Master of Commerce and Postgraduate Commerce programs.',
        ]);
    }

    public function bba()
    {
        return Inertia::render('Frontend/Courses/businessManagement/bba', [
            'title' => 'BBA Programs',
            'description' => 'Learn about Bachelor of Business Administration programs.',
        ]);
    }

    public function mba()
    {
        return Inertia::render('Frontend/Courses/businessManagement/mba', [
            'title' => 'MBA Programs',
            'description' => 'Explore Master of Business Administration programs.',
        ]);
    }

    public function finance()
    {
        return Inertia::render('Frontend/Courses/businessManagement/finance', [
            'title' => 'Finance / Taxation / Accounting Courses',
            'description' => 'Discover courses in Finance, Taxation, and Accounting.',
        ]);
    }

    public function professional()
    {
        return Inertia::render('Frontend/Courses/businessManagement/professional-commerce', [
            'title' => 'CA / CS / CMA',
            'description' => 'Discover courses in CA, CS, and CMA.',
        ]);
    }

}
