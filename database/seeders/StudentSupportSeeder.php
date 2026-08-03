<?php
// database/seeders/StudentSupportSeeder.php

namespace Database\Seeders;

use App\Models\StudentSupport;
use Illuminate\Database\Seeder;

class StudentSupportSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'title'       => 'Admission Support Team',
                'description' => 'Support for admissions planning, course selection direction and next-step clarity.',
                'link'        => '/more/admission-support',
                'icon'        => 'University',
                'tone'        => 'Admissions',
                'level'       => 'India',
                'sort_order'  => 1,
                'status'      => true,
            ],
            [
                'title'       => 'Contact Details of SNAP Career Counsellors',
                'description' => 'Verified counsellor contacts to discuss stream choice, careers and personal guidance.',
                'link'        => '/more/counsellors-directory',
                'icon'        => 'Users',
                'tone'        => 'Counselling',
                'level'       => 'Help',
                'sort_order'  => 2,
                'status'      => true,
            ],
            [
                'title'       => 'Coaching Support Centre',
                'description' => 'Support centres and preparation resources for competitive exams and career readiness.',
                'link'        => '/more/coaching-support',
                'icon'        => 'BookOpen',
                'tone'        => 'Preparation',
                'level'       => 'Exams',
                'sort_order'  => 3,
                'status'      => true,
            ],
            [
                'title'       => 'Information about Wakf-run Hostels',
                'description' => 'Hostel support information for students who need safe accommodation for studies.',
                'link'        => '/more/waqf-run-hostel',
                'icon'        => 'Home',
                'tone'        => 'Stay',
                'level'       => 'Hostels',
                'sort_order'  => 4,
                'status'      => true,
            ],
            [
                'title'       => 'Jobs Opportunity in Different Sector',
                'description' => 'Sector-wise job areas and role types to help students understand where careers exist.',
                'link'        => '/more/jobs-opportunities',
                'icon'        => 'Briefcase',
                'tone'        => 'Careers',
                'level'       => 'All',
                'sort_order'  => 5,
                'status'      => true,
            ],
            [
                'title'       => 'Important Web Links',
                'description' => 'Official portals for scholarships, admissions, exams, results and student services.',
                'link'        => '/more/important-web-links',
                'icon'        => 'Link2',
                'tone'        => 'Official',
                'level'       => 'Links',
                'sort_order'  => 6,
                'status'      => true,
            ],
        ];

        foreach ($items as $item) {
            StudentSupport::updateOrCreate(
                ['link' => $item['link']], // duplicate na bane isliye link ko unique check bana diya
                $item
            );
        }
    }
}