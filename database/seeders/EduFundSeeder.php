<?php
// database/seeders/EduFundSeeder.php

namespace Database\Seeders;

use App\Models\EduFundSection;
use Illuminate\Database\Seeder;

class EduFundSeeder extends Seeder
{
    public function run(): void
    {
        // ---- Scholarship Section ----
        $scholarship = EduFundSection::updateOrCreate(
            ['key' => 'scholarship'],
            [
                'heading_prefix'    => 'Scholarships that',
                'heading_highlight' => 'reduce your burden',
                'description'       => 'Scholarships are the first funding layer — they can cover fees, maintenance, and study support based on category, merit, income, and course type. Apply early, keep documents ready, and track renewal timelines.',
                'cta_label'         => 'Explore Scholarships',
                'cta_link'          => '/scholarship/overview',
                'extra_note'        => null,
                'note_title'        => 'How West Bengal supports students',
                'note_text'         => 'Through scholarship portals, minority-focused assistance, institutional support, and verified information — the goal is to ensure students can continue studies without financial stress.',
                'note_icon'         => 'Landmark',
                'bg_style'          => 'light',
                'sort_order'        => 1,
            ]
        );

        $scholarship->cards()->delete();
        $scholarship->cards()->createMany([
            [
                'icon'  => 'Award',
                'title' => 'Scholarships at a glance',
                'content' => '<div class="small">
<div class="d-flex justify-content-between gap-2"><b>Pre-Matric</b> <span class="text-muted">School level support</span></div>
<div class="d-flex justify-content-between gap-2"><b>Post-Matric</b> <span class="text-muted">UG/PG and above</span></div>
<div class="d-flex justify-content-between gap-2"><b>Merit-based</b> <span class="text-muted">Rewards academic effort</span></div>
<div class="d-flex justify-content-between gap-2"><b>Means-based</b> <span class="text-muted">Supports financial need</span></div>
</div>',
                'sort_order' => 1,
                'status' => true,
            ],
            [
                'icon'  => 'GraduationCap',
                'title' => 'What scholarships usually support',
                'content' => '<ul><li>Tuition / course fees (full or partial)</li><li>Maintenance support for study continuity</li><li>Special support for professional / technical pathways</li><li>Renewal-based help across years (where applicable)</li></ul>',
                'sort_order' => 2,
                'status' => true,
            ],
            [
                'icon'  => 'ShieldCheck',
                'title' => 'Why this matters after this stage',
                'content' => '<div class="small text-muted"><b>After Class 12</b>, costs rise (course fees, coaching, travel, hostel, books). Scholarships reduce drop-out risk and help students focus on learning instead of financial stress.</div>',
                'sort_order' => 3,
                'status' => true,
            ],
        ]);

        $scholarship->schemes()->delete();
        $scholarship->schemes()->createMany([
            [
                'full_name'  => 'National Scholarship Portal (NSP)',
                'short_name' => "NSP\nScholarships",
                'href'       => 'https://scholarships.gov.in',
                'sort_order' => 1,
                'status'     => true,
            ],
            [
                'full_name'  => 'WBMDFC Talent Support Program Portal',
                'short_name' => "WBMDFC\nTSP Portal",
                'href'       => 'https://tsp.wbmdfc.co.in',
                'sort_order' => 2,
                'status'     => true,
            ],
        ]);

        // ---- Loan Section ----
        $loan = EduFundSection::updateOrCreate(
            ['key' => 'loan'],
            [
                'heading_prefix'    => 'Education Loans that',
                'heading_highlight' => 'unlock opportunity',
                'description'       => 'When course cost is higher than scholarship coverage, education loans become the bridge. For eligible students in West Bengal, WBMDFC provides an education loan support option with special interest slabs (as per income/category).',
                'cta_label'         => 'Explore Education Loans',
                'cta_link'          => '/scholarship/education-loans',
                'extra_note'        => '<b>Best for:</b> Professional/technical courses where total fees are high.<br/><b>Smart strategy:</b> Combine scholarships + loan (only when needed).',
                'note_title'        => null,
                'note_text'         => null,
                'note_icon'         => null,
                'bg_style'          => 'white',
                'sort_order'        => 2,
            ]
        );

        $loan->cards()->delete();
        $loan->cards()->createMany([
            [
                'icon'  => 'BadgeIndianRupee',
                'title' => 'WBMDFC Education Loan — a bridge to higher studies',
                'content' => '<div class="small text-muted">Designed to support eligible minority students in West Bengal when course costs are higher than what scholarships can cover. A trusted state initiative that enables serious higher education journeys.</div>',
                'sort_order' => 1,
                'status' => true,
            ],
            [
                'icon'  => 'UserCheck',
                'title' => 'Best fit for career-building courses',
                'content' => '<ul><li>Professional / technical programmes</li><li>High-fee UG/PG courses where family support is limited</li><li>Students who want to invest in long-term career outcomes</li></ul>',
                'sort_order' => 2,
                'status' => true,
            ],
            [
                'icon'  => 'Landmark',
                'title' => 'Why WBMDFC loan matters',
                'content' => '<ul><li>Connects deserving students to structured financial support</li><li>Helps continue education without compromising the course choice</li><li>Complements scholarships (use both smartly)</li></ul>',
                'sort_order' => 3,
                'status' => true,
            ],
        ]);
    }
}