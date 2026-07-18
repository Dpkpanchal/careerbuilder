<?php

namespace Database\Seeders;

use App\Models\Menu;
use App\Services\MenuService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        // TRUNCATE CASCADE handles page_contents FK automatically (PostgreSQL)
        DB::statement('TRUNCATE TABLE menus RESTART IDENTITY CASCADE;');

        foreach ($this->menuTree() as $sort => $node) {
            $this->insertNode($node, null, $sort);
        }

        MenuService::clearCache();
    }

    private function insertNode(array $node, ?int $parentId, int $sort): void
    {
        $record = Menu::create([
            'key'         => $node['key'],
            'label'       => $node['label'],
            'href'        => $node['href'] ?? null,
            'route_name'  => $node['route_name'] ?? null,
            'slug'        => $node['slug'] ?? null,
            'tabbed'      => $node['tabbed'] ?? false,
            'no_dropdown' => $node['no_dropdown'] ?? false,
            'parent_id'   => $parentId,
            'type'        => $node['type'],
            'sort_order'  => $sort,
            'is_active'   => true,
        ]);

        foreach ($node['children'] ?? [] as $childSort => $child) {
            $this->insertNode($child, $record->id, $childSort);
        }
    }

    private function link(string $key, string $label, string $slug): array
    {
        return ['key' => $key, 'label' => $label, 'type' => 'link', 'slug' => $slug];
    }

    private function menuTree(): array
    {
        return [
            // ===========================
            // 1) CAREERS
            // ===========================
            [
                'key' => 'careers', 'label' => 'Careers', 'type' => 'menu', 'tabbed' => true,
                'children' => [
                    [
                        'key' => 'by-stage', 'label' => 'By Stage', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'choose-by-stage', 'label' => 'Choose by Class / Stage', 'type' => 'section',
                                'children' => [
                                    $this->link('after-class-8',           'After Class 8',                        'careers/after-class-8'),
                                    $this->link('after-class-10',          'After Class 10',                       'careers/after-class-10'),
                                    $this->link('after-class-12-arts',     'After Class 12 • Arts',                'careers/after-class-12-arts'),
                                    $this->link('after-class-12-commerce', 'After Class 12 • Commerce',            'careers/after-class-12-commerce'),
                                    $this->link('after-class-12-science',  'After Class 12 • Science',             'careers/after-class-12-science'),
                                    $this->link('after-graduation',        'After Graduation',                     'careers/after-graduation'),
                                    $this->link('after-class-12-eng',      'After Class 12 • Engineering',         'careers/after-class-12-engineering'),
                                    $this->link('after-class-12-medical',  'After Class 12 • Medical/Paramedical', 'careers/after-class-12-medical'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'by-profession', 'label' => 'By Profession', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'popular-professional-paths', 'label' => 'Popular Professional Paths', 'type' => 'section',
                                'children' => [
                                    $this->link('career-engineering',    'Engineering',                        'careers/engineering'),
                                    $this->link('career-medical',        'Medical • Doctor (MBBS)',            'careers/medical-doctor-mbbs'),
                                    $this->link('career-nursing',        'Nursing & Allied Health',           'careers/nursing-allied'),
                                    $this->link('career-pharmacy',       'Pharmacy',                          'careers/pharmacy'),
                                    $this->link('career-ca',             'Chartered Accountant (CA)',         'careers/chartered-accountant-ca'),
                                    $this->link('career-law',            'Law (LLB, Integrated)',             'careers/law-llb-integrated'),
                                    $this->link('career-design',         'Design (Fashion, Graphic, Arch.)',  'careers/design-fashion-graphic-arch'),
                                    $this->link('career-hospitality',    'Hospitality & Tourism',             'careers/hospitality-tourism'),
                                    $this->link('career-media',          'Media & Journalism',                'careers/media-journalism'),
                                    $this->link('career-civil-services', 'Civil Services',                    'careers/civil-services'),
                                    $this->link('career-defence',        'Defence Forces',                    'careers/defence-forces'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'future-paths', 'label' => 'Future & Alternative Paths', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'long-term-alternative', 'label' => 'Long-Term & Alternative Careers', 'type' => 'section',
                                'children' => [
                                    $this->link('career-research',        'Research & PhD',              'careers/research-phd'),
                                    $this->link('career-entrepreneurship', 'Entrepreneurship / Startups', 'careers/entrepreneurship-startups'),
                                    $this->link('career-social-work',     'Social Work / NGOs',          'careers/social-work-ngos'),
                                ],
                            ],
                        ],
                    ],
                ],
            ],

            // ===========================
            // 2) COURSES
            // ===========================
            [
                'key' => 'courses', 'label' => 'Courses', 'type' => 'menu', 'tabbed' => true,
                'children' => [
                    [
                        'key' => 'vocational-skill', 'label' => 'Vocational & Skill', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'vocational-skill-courses', 'label' => 'Vocational & Skill Courses', 'type' => 'section',
                                'children' => [
                                    $this->link('class8plus-vocational', 'Class 8+ Vocational Trades',  'courses/class-8-vocational-trades'),
                                    $this->link('class10plus-vocational','Class 10+ Vocational Trades', 'courses/class-10-vocational-trades'),
                                    $this->link('iti-itc-trades',        'ITI & ITC Trades',            'courses/iti-itc-trades'),
                                    $this->link('msme-tool-room',        'MSME Tool Room Courses',      'courses/msme-tool-room-courses'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'diploma-poly', 'label' => 'Diploma & Polytechnic', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'diploma-programs', 'label' => 'Diploma & Polytechnic Programs', 'type' => 'section',
                                'children' => [
                                    $this->link('diploma-engineering', 'Diploma in Engineering (Polytechnic)', 'courses/diploma-in-engineering-polytechnic'),
                                    $this->link('diploma-paramedical', 'Diploma in Paramedical',               'courses/diploma-in-paramedical'),
                                    $this->link('diploma-pharmacy',    'Diploma in Pharmacy (D.Pharm)',        'courses/diploma-in-pharmacy-dpharm'),
                                    $this->link('diploma-computer-it', 'Diploma in Computer / IT',             'courses/diploma-in-computer-it'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'streamlined-degree', 'label' => 'Streamlined Degree Courses', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'graduation-courses', 'label' => 'Graduation Courses (After Class 12)', 'type' => 'section',
                                'children' => [
                                    $this->link('arts-graduation',    'Arts Graduation Courses (BA & Allied)',        'courses/arts-graduation-courses-ba-allied'),
                                    $this->link('commerce-graduation','Commerce Graduation Courses (B.Com & Allied)', 'courses/commerce-graduation-courses-bcom-allied'),
                                    $this->link('science-graduation', 'Science Graduation Courses (B.Sc & Allied)',  'courses/science-graduation-courses-bsc-allied'),
                                ],
                            ],
                            [
                                'key' => 'postgraduation-courses', 'label' => 'Post Graduation Courses', 'type' => 'section',
                                'children' => [
                                    $this->link('arts-pg',     'Arts PG Courses (MA, MSW & Allied)',    'courses/arts-pg-courses-ma-msw-allied'),
                                    $this->link('commerce-pg', 'Commerce PG Courses (M.Com & Allied)',  'courses/commerce-pg-courses-mcom-allied'),
                                    $this->link('science-pg',  'Science PG Courses (M.Sc & Allied)',    'courses/science-pg-courses-msc-allied'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'medical-paramedical', 'label' => 'Medical & Paramedical', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'core-medical-nursing', 'label' => 'Core Medical & Nursing', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-nursing', 'Nursing (ANM / GNM / B.Sc / M.Sc)', 'courses/nursing-anm-gnm-bsc-nursing'),
                                    $this->link('courses-mbbs',    'MBBS & Core Medical Degrees',        'courses/medical/mbbs'),
                                ],
                            ],
                            [
                                'key' => 'paramedical-allied', 'label' => 'Paramedical & Allied Health', 'type' => 'section',
                                'children' => [
                                    $this->link('paramedical-diploma', 'Diploma Paramedical Courses (After 10)',               'courses/paramedical-diplomas'),
                                    $this->link('paramedical-ug',      'UG Paramedical Degrees (After 10+2)',                  'courses/ug-paramedical-degrees'),
                                    $this->link('medical-pg',          'PG Paramedical Courses',                               'courses/medical/pg'),
                                    $this->link('allied-health',       'Allied Health Sciences (Physio, MLT, Radiology, OT)', 'courses/medical/allied-health'),
                                ],
                            ],
                            [
                                'key' => 'pharmacy-section', 'label' => 'Pharmacy', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-pharmacy', 'Pharmacy (D.Pharm / B.Pharm / M.Pharm / Pharm.D)', 'courses/pharmacy-dpharm-bpharm-mpharm-pharmd'),
                                ],
                            ],
                            [
                                'key' => 'ayush-alternative', 'label' => 'AYUSH & Alternative Medicine', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-ayush',    'AYUSH (Ayurveda, Homoeopathy, Unani, Siddha)', 'courses/medical/ayush'),
                                    $this->link('naturopathy-yoga', 'Naturopathy & Yoga',                           'courses/medical/naturopathy-yoga'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'engineering-it', 'label' => 'Engineering, Technology & IT', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'engineering-tech-section', 'label' => 'Engineering & Technology', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-btech', 'B.Tech / B.E Programs', 'courses/btech-be-programs'),
                                    $this->link('courses-barch', 'B.Arch',                'courses/barch'),
                                    $this->link('courses-mtech', 'M.Tech',                'courses/mtech'),
                                ],
                            ],
                            [
                                'key' => 'computer-it-section', 'label' => 'Computer & IT', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-bca',    'BCA',                         'courses/bca'),
                                    $this->link('courses-bsc-it', 'B.Sc Computer Science / IT',  'courses/bsc-computer-science-it'),
                                    $this->link('courses-mca',    'MCA',                         'courses/mca'),
                                    $this->link('courses-msc-it', 'M.Sc Computer Science / IT',  'courses/msc'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'business-management', 'label' => 'Business & Management', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'commerce-business-section', 'label' => 'Commerce & Business', 'type' => 'section',
                                'children' => [
                                    $this->link('courses-bcom',    'B.Com & Allied Programs',               'courses/bcom-allied-programs'),
                                    $this->link('courses-mcom',    'M.Com & PG Commerce',                   'courses/mcom'),
                                    $this->link('courses-bba',     'BBA & UG Management',                   'courses/bba'),
                                    $this->link('courses-mba',     'MBA / PGDM',                            'courses/mba-pgdm'),
                                    $this->link('courses-finance', 'CA / CS / CMA (Professional Commerce)', 'courses/finance-taxation-accounting'),
                                ],
                            ],
                        ],
                    ],
                ],
            ],

            // ===========================
            // 3) COLLEGES
            // ===========================
            [
                'key' => 'colleges', 'label' => 'Colleges', 'type' => 'menu', 'tabbed' => true,
                'children' => [
                    [
                        'key' => 'national-institutes', 'label' => 'National Institutes', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'national-importance', 'label' => 'Institutes of National Importance', 'type' => 'section',
                                'children' => [
                                    $this->link('colleges-iits',   'IITs – Indian Institutes of Technology',  'colleges/iits-indian-institutes-of-technology'),
                                    $this->link('colleges-nits',   'NITs – National Institutes of Technology','colleges/nits-national-institutes-of-technology'),
                                    $this->link('colleges-iims',   'IIMs – Management Institutes',            'colleges/iims-management-institutes'),
                                    $this->link('colleges-aiims',  'AIIMS – Medical Institutes',              'colleges/aiims-medical-institutes'),
                                    $this->link('colleges-design', 'NIFT / NID – Fashion & Design',           'colleges/nift-nid-fashion-design'),
                                    $this->link('colleges-nlu',    'National Law Universities (NLUs)',         'colleges/national-law-universities-nlus'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'universities', 'label' => 'Universities', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'university-types', 'label' => 'Types of Universities', 'type' => 'section',
                                'children' => [
                                    $this->link('colleges-central', 'Central Universities',                           'colleges/central-universities'),
                                    $this->link('colleges-state',   'State Universities',                             'colleges/state-universities'),
                                    $this->link('colleges-open',    'Open & Distance Universities (IGNOU, NSOU...)', 'colleges/open-distance-universities-ignou-nsou'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'by-field', 'label' => 'By Field of Study', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'stream-colleges', 'label' => 'Stream-wise Colleges', 'type' => 'section',
                                'children' => [
                                    $this->link('colleges-engineering',      'Engineering Colleges',              'colleges/engineering-colleges'),
                                    $this->link('colleges-medical',          'Medical & Paramedical Colleges',    'colleges/medical-paramedical-colleges'),
                                    $this->link('colleges-nursing',          'Nursing Colleges',                  'colleges/nursing-colleges'),
                                    $this->link('colleges-pharmacy',         'Pharmacy Colleges',                 'colleges/pharmacy-colleges'),
                                    $this->link('colleges-management',       'Management & Business Colleges',    'colleges/management-business-colleges'),
                                    $this->link('colleges-law',              'Law Colleges',                      'colleges/law-colleges'),
                                    $this->link('colleges-agriculture',      'Agriculture & Veterinary Colleges', 'colleges/agriculture-veterinary-colleges'),
                                    $this->link('colleges-teacher-training', 'Teacher Training / B.Ed Colleges',  'colleges/teacher-training-bed-colleges'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'vocational-technical', 'label' => 'Vocational & Technical Institutes', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'vocational-institutes', 'label' => 'Vocational, Skill & Technical Institutes', 'type' => 'section',
                                'children' => [
                                    $this->link('colleges-iti',        'ITI Centres (Govt / Private)', 'colleges/iti-centres-govt-private'),
                                    $this->link('colleges-polytechnic','Polytechnic Colleges',         'colleges/polytechnic-colleges'),
                                    $this->link('colleges-msme',       'MSME Tool Room Institutes',    'colleges/msme-tool-room-institutes'),
                                    $this->link('colleges-skill',      'Skill Development Centres',    'colleges/skill-development-centres'),
                                ],
                            ],
                        ],
                    ],
                ],
            ],

            // ===========================
            // 4) EXAMS
            // ===========================
            [
                'key' => 'exams', 'label' => 'Exams', 'type' => 'menu', 'tabbed' => true,
                'children' => [
                    [
                        'key' => 'engineering-tech-exams', 'label' => 'Engineering & Tech', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'engineering-entrance', 'label' => 'Engineering Entrance', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-eng-national',   'National Level',   'exams/national-level-eg-jee-main-jee-advanced'),
                                    $this->link('exams-eng-state',      'State Level',      'exams/state-level-wbjee-etc'),
                                    $this->link('exams-eng-university', 'University Level', 'exams/university-level-exams'),
                                ],
                            ],
                            [
                                'key' => 'computer-applications', 'label' => 'Computer Applications', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-eng-mca', 'MCA Entrance Exams', 'exams/mca'),
                                ],
                            ],
                            [
                                'key' => 'architecture-exams', 'label' => 'Architecture', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-eng-arch', 'Architecture Exams (NATA/AAT/TANATA)', 'exams/architecture'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'medical-allied-exams', 'label' => 'Medical & Allied', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'medical-entrance', 'label' => 'Medical Entrance', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-med-national', 'National Level',                  'exams/national-level-eg-neet-ug'),
                                    $this->link('exams-med-state',    'State Level (NEET replaced list)', 'exams/state-level-medical-exams'),
                                ],
                            ],
                            [
                                'key' => 'nursing-exams', 'label' => 'Nursing', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-med-nursing', 'Nursing & Allied Exams', 'exams/university-level-medical-exams'),
                                ],
                            ],
                            [
                                'key' => 'pg-medical-exams', 'label' => 'PG Medical', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-med-pg', 'MS/MD & PG Medical Exams', 'exams/pg'),
                                ],
                            ],
                            [
                                'key' => 'pharmacy-exams', 'label' => 'Pharmacy', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-med-pharmacy', 'Pharmacy Entrance Exams', 'exams/pharmacy'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'hospitality-tourism-exams', 'label' => 'Hospitality & Tourism', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'hotel-management-ug', 'label' => 'Hotel Management (UG)', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-hotel-national',   'National Level',             'exams/hotel-management/national'),
                                    $this->link('exams-hotel-state',      'State Level',                'exams/hotel-management/state'),
                                    $this->link('exams-hotel-university', 'University Level',           'exams/hotel-management/university'),
                                    $this->link('exams-hotel-run',        'Hotel-run / Industry Exams', 'exams/hotel-management/hotel-run'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'law-management-finance-exams', 'label' => 'Law • Management • Finance', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'law-exams-section', 'label' => 'Law', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-law-law', 'Law Entrance Exams', 'exams/law/law'),
                                ],
                            ],
                            [
                                'key' => 'management-exams-section', 'label' => 'Management', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-law-management', 'MBA & Management Exams', 'exams/law/management'),
                                ],
                            ],
                            [
                                'key' => 'finance-accounts-section', 'label' => 'Finance & Accounts', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-law-finance', 'CA / CS / CMA / CFA Exams', 'exams/law/finance-accounts'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'design-media-humanities-exams', 'label' => 'Design • Media • Humanities', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'fashion-design-section', 'label' => 'Fashion & Design', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-design-fashion', 'Design & Fashion Exams', 'exams/design/design'),
                                ],
                            ],
                            [
                                'key' => 'media-mass-comm', 'label' => 'Media & Mass Comm', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-design-masscomm', 'Mass Comm Exams', 'exams/design/mass-comm'),
                                ],
                            ],
                            [
                                'key' => 'humanities-section', 'label' => 'Humanities & Social Science', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-design-humanities', 'Humanities Exams', 'exams/design/humanities'),
                                ],
                            ],
                            [
                                'key' => 'mathematics-section', 'label' => 'Mathematics', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-design-math', 'Mathematics (UG) Admissions/Tests', 'exams/design/mathematics'),
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'agri-defence-school-exams', 'label' => 'Agri • Defence • School', 'type' => 'tab',
                        'children' => [
                            [
                                'key' => 'agriculture-exams', 'label' => 'Agriculture', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-agri-agriculture', 'Agriculture Exams',  'exams/agri/agriculture'),
                                ],
                            ],
                            [
                                'key' => 'veterinary-exams', 'label' => 'Veterinary Science', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-agri-vet', 'Veterinary Exams', 'exams/agri/veterinary'),
                                ],
                            ],
                            [
                                'key' => 'defence-marine', 'label' => 'Defence & Marine', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-agri-defence', 'Defence Exams (NDA/CDS/TES etc.)', 'exams/agri/defence'),
                                ],
                            ],
                            [
                                'key' => 'school-level-exams', 'label' => 'School-level', 'type' => 'section',
                                'children' => [
                                    $this->link('exams-agri-school', 'School Scholarship / Talent Exams', 'exams/agri/school'),
                                ],
                            ],
                        ],
                    ],
                ],
            ],

            // ===========================
            // 5) SIMPLE LINKS (no dropdown) — kept on static routes via route_name
            // ===========================
            ['key' => 'forum',    'label' => 'Scholarship',           'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'scholarship.overview'],
            ['key' => 'about',    'label' => 'Counsellors Directory', 'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.counsellorsDirectory'],
            ['key' => 'jobs',     'label' => 'Jobs Opportunities',    'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.jobsOpportunities'],
            ['key' => 'schemes',  'label' => 'Minority Schemes',      'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.minoritySchemes'],
            ['key' => 'hostel',   'label' => 'Waqf Run Hostel',       'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.waqfRunHostel'],
            ['key' => 'support',  'label' => 'Admission Support',     'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.admissionSupport'],
            ['key' => 'coaching', 'label' => 'Coaching Support',      'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.coachingSupport'],
            ['key' => 'links',    'label' => 'Important Web Links',   'type' => 'menu', 'no_dropdown' => true, 'route_name' => 'more.importantWebLinks'],
        ];
    }
}
