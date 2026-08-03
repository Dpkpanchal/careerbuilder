<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ScholarshipOverview extends Model
{
    protected $fillable = [
        'hero_title',
        'hero_breadcrumb',
        'intro_title',
        'intro_subtitle',
        'paragraph_1',
        'paragraph_2',
        'stats',
        'quick_access_items',
        'quick_access_note',
        'rules_left',
        'rules_right',
        'schemes',
        'table_note',
        'is_active',
    ];

    protected $casts = [
        'stats' => 'array',
        'quick_access_items' => 'array',
        'rules_left' => 'array',
        'rules_right' => 'array',
        'schemes' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * This page has only ONE row (singleton). Always fetch / create id = 1.
     */
    public static function singleton(): self
    {
        return static::firstOrCreate(
            ['id' => 1],
            [
                'hero_title' => 'Scholarships & Educational Support',
                'hero_breadcrumb' => 'Scholarships → Overview',
                'intro_title' => 'How this section helps you',
                'intro_subtitle' => 'A single place to understand all major school-level scholarships and who they are meant for.',
                'paragraph_1' => 'Scholarships reduce the financial burden on families so that students can stay in school and progress to higher studies. This section highlights the main schemes available from school level up to research, with a special focus on minority and economically weaker students.',
                'paragraph_2' => 'You will find a clear view of eligibility, income limits, study level, and where to apply. Each detailed page in the tabs above explains one scheme at a time so that parents, students and counsellors can make confident decisions.',
                'stats' => [
                    ['label' => 'Core schemes', 'value' => '4', 'meta' => 'Pre-Matric, Post-Matric, Merit-cum-Means'],
                    ['label' => 'Study coverage', 'value' => 'Class IX → Ph.D.', 'meta' => 'From school to research'],
                    ['label' => 'Family income', 'value' => '₹1–2.5 Lakh', 'meta' => 'Depending on the scheme'],
                ],
                'quick_access_items' => [
                    ['text' => 'Apply online on the National Scholarship Portal', 'link_url' => 'https://scholarships.gov.in', 'link_label' => 'scholarships.gov.in'],
                ],
                'quick_access_note' => 'Use this overview to understand options, then open the specific tab above for full details before applying.',
                'rules_left' => [
                    'Applications are submitted online. For most schemes, the primary gateway is the National Scholarship Portal.',
                    'The student must be an Indian citizen and a permanent resident of the state where the application is filed.',
                    'Aadhaar-linked bank accounts are preferred to enable direct transfer of the scholarship amount.',
                    'Only one active bank account should be used for a single student\'s registration.',
                    'In general, a minimum of 50% marks in the last annual examination is required (scheme-wise variations apply).',
                ],
                'rules_right' => [
                    'Students who already received scholarship earlier and have a permanent ID should apply as renewal candidates.',
                    'One mobile number is mapped to one registration; avoid using shared or temporary numbers.',
                    'A fixed percentage of the total scholarship pool is reserved for girl students.',
                    'Distance-education or correspondence courses are generally not covered under these schemes.',
                    'A student can receive scholarship from only one government scheme for a given period.',
                ],
                'schemes' => [
                    [
                        'no' => 1,
                        'name' => 'Pre Matric',
                        'class_of_study' => 'Class IX – X',
                        'website' => 'https://scholarships.gov.in',
                        'min_marks' => '50% in last exam (Class I exempt)',
                        'income' => 'Up to ₹1 Lakh',
                    ],
                    [
                        'no' => 2,
                        'name' => 'Post Matric',
                        'class_of_study' => 'XI Upto Ph.D.',
                        'website' => 'https://scholarships.gov.in',
                        'min_marks' => '50% in last exam',
                        'income' => 'Up to ₹2 Lakh',
                    ],
                    [
                        'no' => 3,
                        'name' => 'Merit-cum-Means',
                        'class_of_study' => 'Specified Technical & Professional courses',
                        'website' => 'https://scholarships.gov.in',
                        'min_marks' => '50% in last exam',
                        'income' => 'Up to ₹2.5 Lakh',
                    ],
                ],
                'table_note' => 'Exact eligibility and amounts can change over time. Always follow the latest official notification on the relevant portal.',
                'is_active' => true,
            ]
        );
    }
}
