<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerContent extends Model
{
    protected $table = 'career_contents';

    protected $fillable = [
        'menu_id',
        'tab_id',
        'section_id',
        'link_id',
        'url',
        'branch_groups',
        'pathways',
        'courses',
        'exams',
        'institute_links',
        'industries',
        'role_examples',

        'education_pathways',
        'vocational_courses',

        'overview',
        'stream_selection',
        'overview_tree',
        'related_exams',
        'top_colleges_and_universities',
        'key_instructions_eligibility',
        
        'is_active',
    ];

    protected $casts = [
        'branch_groups'    => 'array',
        'pathways'         => 'array',
        'courses'          => 'array',
        'exams'            => 'array',
        'institute_links'  => 'array',
        'industries'       => 'array',
        'role_examples'    => 'array',
        'education_pathways' => 'array',
        'vocational_courses' => 'array',

        'overview' => 'array',
        'stream_selection' => 'array',
        'overview_tree' => 'array',
        'related_exams' => 'array',
        'top_colleges_and_universities' => 'array',
        'key_instructions_eligibility' => 'array',
        'is_active'        => 'boolean',
    ];

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
