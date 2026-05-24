<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ItiCollege;

class CareerController extends Controller
{
    public function AfterClassEight()
    {
         $itis = ItiCollege::with('trades')
            ->orderBy('name')
            ->get();

        return Inertia::render('Frontend/career/after-class-8', [
            'title' => 'Career Options After Class 8',
            'description' => 'Explore various career options available after completing class 8.',
            'itis' => $itis,
        ]);

    }

    public function AfterClassTenth()
    {
        return Inertia::render('Frontend/career/after-class-10th', [
            'title' => 'Career Options After Class 10',
            'description' => 'Discover the best career paths after completing class 10.',
        ]);
    }

    public function AfterClassTwelveArts()
    {
        return Inertia::render('Frontend/career/after-12/arts', [
            'title' => 'Career Options After Class 12 Arts',
            'description' => 'Find out the career opportunities available after class 12 in Arts stream.',
        ]);
    }


    public function afterClassTwelveCommerce()
    {
        return Inertia::render('Frontend/career/after-12/commerce', [
            'title' => 'Career Options After Class 12 Commerce',
            'description' => 'Explore the various career paths available after class 12 in Commerce stream.',
        ]);     
    }

    public function afterClassTwelveScience()
    {
        return Inertia::render('Frontend/career/after-12/general-science', [
            'title' => 'Career Options After Class 12 Science',
            'description' => 'Explore the various career paths available after class 12 in Science stream.',
        ]);     
    }   


    public function AfterGraduation()
    {
        return Inertia::render('Frontend/career/after-graduation', [
            'title' => 'Career Options After Graduation',
            'description' => 'Explore various career options available after completing graduation.',
        ]);
    }

    public function engineering()
    {
        return Inertia::render('Frontend/career/by-profession/engineering', [
            'title' => 'Engineering Specializations',
            'description' => 'Explore various engineering specializations and career paths.',
        ]);
    }

    public function medical()
    {
        return Inertia::render('Frontend/career/by-profession/medical', [
            'title' => 'Medical Careers',
            'description' => 'Explore various medical career options and specializations.',
        ]); 
    }

    public function nursing()
    {
        return Inertia::render('Frontend/career/by-profession/nursing', [
            'title' => 'Nursing Careers',
            'description' => 'Explore various nursing career options and specializations.',
        ]); 
    }   

    public function pharmacy()
    {
        return Inertia::render('Frontend/career/by-profession/pharmacy', [
            'title' => 'Pharmacy Careers',
            'description' => 'Explore various pharmacy career options and specializations.',
        ]); 
    }

    public function ca()
    {
        return Inertia::render('Frontend/career/by-profession/ca', [
            'title' => 'Chartered Accountancy Careers',
            'description' => 'Explore various career options in Chartered Accountancy.',
        ]); 
    }

    public function law()
    {
        return Inertia::render('Frontend/career/by-profession/law', [
            'title' => 'Law Careers',
            'description' => 'Explore various career options in the field of Law.',
        ]); 
    }

    public function design()
    {
        return Inertia::render('Frontend/career/by-profession/design', [
            'title' => 'Design Careers',
            'description' => 'Explore various career options in the field of Design.',
        ]); 
    }

    public function hospitality()
    {
        return Inertia::render('Frontend/career/by-profession/hospitality', [
            'title' => 'Hospitality Careers',
            'description' => 'Explore various career options in the field of Hospitality.',
        ]); 
    }

    public function media()
    {
        return Inertia::render('Frontend/career/by-profession/media', [
            'title' => 'Media Careers',
            'description' => 'Explore various career options in the field of Media.',
        ]); 
    }

    public function civilServices()
    {
        return Inertia::render('Frontend/career/by-profession/civil-services', [
            'title' => 'Civil Services Careers',
            'description' => 'Explore various career options in Civil Services.',
        ]); 
    }

    public function defence()
    {
        return Inertia::render('Frontend/career/by-profession/defence', [
            'title' => 'Defence Careers',
            'description' => 'Explore various career options in the Defence sector.',
        ]); 
    }
    
    public function research()
    {
        return Inertia::render('Frontend/career/future/research', [
            'title' => 'Research & PhD Careers',
            'description' => 'Explore various career options in Research and PhD programs.',
        ]);
    }
    public function entrepreneurship()
    {
        return Inertia::render('Frontend/career/future/entrepreneurship', [
            'title' => 'Entrepreneurship / Startups Careers',
            'description' => 'Explore various career options in Entrepreneurship and Startups.',
        ]);
    }

    public function socialWork()
    {
        return Inertia::render('Frontend/career/future/social-work', [
            'title' => 'Social Work Careers',
            'description' => 'Explore various career options in Social Work.',
        ]);
    }

    public function afterClassTwelveEngineering()
    {
        return Inertia::render('Frontend/career/after-12/engineering', [
            'title' => 'Engineering Work Careers',
            'description' => 'Explore various career options in Social Work.',
        ]);
    }

    public function afterClassTwelveMedical()
    {
        return Inertia::render('Frontend/career/after-12/medical', [
            'title' => 'Medical Work Careers',
            'description' => 'Explore various career options in Social Work.',
        ]);
    }

    

    

    // public function AfterClassTwelveCommerce(){
    //     return Inertia::render('Frontend/career/after-12/commerce', [
    //         'title' => 'Career Options After Class 12 Commerce',
    //         'description' => 'Find out the career opportunities available after class 12 in Arts stream.',
    //     ]);
        
    // }

    // public function AfterClassTwelveScience(){
    //     return Inertia::render('Frontend/career/after-12/science', [
    //         'title' => 'Career Options After Class 12 Science',
    //         'description' => 'Find out the career opportunities available after class 12 in Arts stream.',
    //     ]);
        
    // }

    // public function AfterGraduation()
    // {
    //     return Inertia::render('Frontend/career/after-12/graduation', [
    //         'title' => 'Career Options After Graduation',
    //         'description' => 'Find out career opportunities after graduation.',
    //     ]);
    // }

}
