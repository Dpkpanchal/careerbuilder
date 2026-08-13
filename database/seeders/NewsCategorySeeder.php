<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\NewsCategory;

class NewsCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'government'   => 'Government Announcements',
            'scholarships' => 'Scholarships & Financial Aid',
            'exams'        => 'Exams & Results',
            'career'       => 'Career Guidance',
        ];

        foreach ($categories as $slug => $name) {
            NewsCategory::firstOrCreate(
                ['slug' => $slug],
                ['name' => $name, 'is_active' => true]
            );
        }
    }
}