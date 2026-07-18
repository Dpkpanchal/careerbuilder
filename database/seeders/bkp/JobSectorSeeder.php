<?php

namespace Database\Seeders;

use App\Models\JobSector;
use Illuminate\Database\Seeder;

class JobSectorSeeder extends Seeder
{
    public function run(): void
    {
        $sectors = [
            [
                'key' => 'government',
                'title' => 'Government Officials Type',
                'note' => 'Major recruitment bodies and common job groups.',
                'sort_order' => 1,
            ],
            [
                'key' => 'banking',
                'title' => 'Banking Sector Job',
                'note' => 'Popular banking recruitment paths.',
                'sort_order' => 2,
            ],
            [
                'key' => 'defence',
                'title' => 'Defence Sector',
                'note' => 'Army, Air Force, Navy, CAPFs and Coast Guard.',
                'sort_order' => 3,
            ],
            [
                'key' => 'teaching',
                'title' => 'Teaching',
                'note' => 'West Bengal + Central teacher eligibility snapshots.',
                'sort_order' => 4,
            ],
            [
                'key' => 'engineering',
                'title' => 'Engineering Type',
                'note' => 'PSU/Central/State engineering routes + WB examples.',
                'sort_order' => 5,
            ],
            [
                'key' => 'railway',
                'title' => 'Railway Sector',
                'note' => 'RRB recruitment snapshots.',
                'sort_order' => 6,
            ],
            [
                'key' => 'after-class-8',
                'title' => 'Jobs Opportunity After Class 8',
                'note' => 'These are indicative examples shown in the Career Book table.',
                'sort_order' => 7,
            ],
        ];

        foreach ($sectors as $sector) {
            JobSector::updateOrCreate(['key' => $sector['key']], $sector);
        }
    }
}
