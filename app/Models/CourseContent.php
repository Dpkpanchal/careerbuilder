<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'menu_id',
        'tab_id',
        'section_id',
        'link_id',
        'url',
        'intro_heading',
        'intro_description',
        'intro_description_secondary',
        'snapshot',
        'sectors',
        'admission_heading',
        'admission_description',
        'admission_info',
        'next_steps',
        'skill_agencies',
        'long_term_programs',
        'short_term_courses',
        'cta_button',
        'branch_groups',
        'post_diploma',
        'polytechnic_links',
        
        // Degree fields
        'subject_families',
        'degree_options',
        'course_groups',
        'after_degree',
        'admission_points',
        'documents',
        'careers_snapshot',
        
        // Nursing fields
        'nursing_ladder',
        'specialisations',
        'work_settings',
        'admission_notes',
        'common_docs',
        'build_profile',
        
        // MBBS fields
        'course_ladder',
        'eligibility_notes',
        'core_subjects',
        
        // Pharmacy fields
        'pharmacy_ladder',
        
        // Paramedical Diploma fields
        'diploma_ladder',
        'common_diploma_options',
        'paramedical_ladder',
        'ug_course_options',
        'pg_ladder',
        'pg_course_options',

        "allied_ladder",
        "allied_domains",
        "ayush_ladder",
        "ayush_systems",

         // Naturopathy & Yoga fields
        'naturopathy_ladder',
        'what_you_do',
        'where_you_work',

         // Tech/IT fields
        'btech_ladder',
        'barch_ladder',
        'mtech_ladder',
        'bca_ladder',
        'bsc_it_ladder',
        'mca_ladder',
        'msc_it_ladder',
        'who_should_do',
        'core_areas',
        'specialisation_tracks',


        'bcom_ladder',
        'mcom_ladder',
        'bba_ladder',
        'mba_ladder',
        'finance_ladder',
        'professional_commerce_ladder',
        'typical_roles',
        'next_step_options',
        'business_types',
        'course_options',
        'choose_right',
        'common_prep',




        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'snapshot' => 'array',
        'sectors' => 'array',
        'admission_info' => 'array',
        'next_steps' => 'array',
        'skill_agencies' => 'array',
        'long_term_programs' => 'array',
        'short_term_courses' => 'array',
        'cta_button' => 'array',
        'branch_groups' => 'array',
        'post_diploma' => 'array',
        'polytechnic_links' => 'array',
        'paramedical_ladder' => 'array',
        'ug_course_options' => 'array',
        
        // Degree fields
        'subject_families' => 'array',
        'degree_options' => 'array',
        'course_groups' => 'array',
        'after_degree' => 'array',
        'admission_points' => 'array',
        'documents' => 'array',
        'careers_snapshot' => 'array',
        
        // Nursing fields
        'nursing_ladder' => 'array',
        'specialisations' => 'array',
        'work_settings' => 'array',
        'admission_notes' => 'array',
        'common_docs' => 'array',
        'build_profile' => 'array',
        
        // MBBS fields
        'course_ladder' => 'array',
        'eligibility_notes' => 'array',
        'core_subjects' => 'array',
        
        // Pharmacy fields
        'pharmacy_ladder' => 'array',
        
        // Paramedical Diploma fields
        'diploma_ladder' => 'array',
        'common_diploma_options' => 'array',

        "pg_ladder" => 'array',
        'pg_course_options' => 'array',

        "allied_ladder" => 'array',
        "allied_domains" => 'array',
        "ayush_ladder" => 'array',
        "ayush_systems" => 'array',

         // Naturopathy & Yoga fields
        'naturopathy_ladder' => 'array',
        'what_you_do' => 'array',
        'where_you_work' => 'array',

        // Tech/IT fields
        'btech_ladder' => 'array',
        'barch_ladder' => 'array',
        'mtech_ladder' => 'array',
        'bca_ladder' => 'array',
        'bsc_it_ladder' => 'array',
        'mca_ladder' => 'array',
        'msc_it_ladder' => 'array',
        'who_should_do' => 'array',
        'core_areas' => 'array',
        'specialisation_tracks' => 'array',


         // Business/Commerce fields
        'bcom_ladder' => 'array',
        'mcom_ladder' => 'array',
        'bba_ladder' => 'array',
        'mba_ladder' => 'array',
        'finance_ladder' => 'array',
        'professional_commerce_ladder' => 'array',
        'typical_roles' => 'array',
        'next_step_options' => 'array',
        'business_types' => 'array',
        'course_options' => 'array',
        'choose_right' => 'array',
        'common_prep' => 'array',
        'important_notes' => 'array',


        
        
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'menu_id');
    }

    public function tab()
    {
        return $this->belongsTo(Menu::class, 'tab_id');
    }

    public function section()
    {
        return $this->belongsTo(Menu::class, 'section_id');
    }

    public function link()
    {
        return $this->belongsTo(Menu::class, 'link_id');
    }
}