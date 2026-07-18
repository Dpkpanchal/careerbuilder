<?php

namespace Database\Seeders;

use App\Models\JobGroup;
use App\Models\JobSector;
use Illuminate\Database\Seeder;

class JobOpportunitiesDataSeeder extends Seeder
{
    public function run(): void
    {
        // Make sure the fixed sectors exist first.
        $this->call(JobSectorSeeder::class);

        $this->seedSector('government', $this->governmentGroups());
        $this->seedSector('banking', $this->bankingGroups());
        $this->seedSector('defence', $this->defenceGroups());
        $this->seedSector('teaching', $this->teachingGroups());
        $this->seedSector('engineering', $this->engineeringGroups());
        $this->seedSector('railway', $this->railwayGroups());

        $this->seedAfterClass8($this->afterClass8Groups());

        $this->command?->info('Jobs Opportunities data seeded successfully.');
    }

    /**
     * Insert groups for a normal sector (recruitedBy + website at the
     * group level, rows only have post + eligibility).
     */
    protected function seedSector(string $sectorKey, array $groups): void
    {
        $sector = JobSector::where('key', $sectorKey)->firstOrFail();

        foreach ($groups as $index => $groupData) {

            $group = JobGroup::create([
                'job_sector_id' => $sector->id,
                'label' => $groupData['recruitedBy'],
                'website' => $groupData['website'] ?: null,
                'sort_order' => $index,
            ]);

            foreach ($groupData['sublinks'] ?? [] as $linkIndex => $link) {

                $group->links()->create([
                    'label' => $link['label'],
                    'href' => $link['href'],
                    'sort_order' => $linkIndex,
                ]);

            }

            foreach ($groupData['rows'] as $rowIndex => $row) {

                $group->rows()->create([
                    'post' => $row['post'],
                    'eligibility' => $row['eligibility'],
                    'sort_order' => $rowIndex,
                ]);

            }

        }
    }

    /**
     * Insert groups for the "After Class 8" sector (label = typeOfJob,
     * no group-level website, each row carries its own recruited_by +
     * website).
     */
    protected function seedAfterClass8(array $groups): void
    {
        $sector = JobSector::where('key', 'after-class-8')->firstOrFail();

        foreach ($groups as $index => $groupData) {

            $group = JobGroup::create([
                'job_sector_id' => $sector->id,
                'label' => $groupData['typeOfJob'],
                'website' => null,
                'sort_order' => $index,
            ]);

            foreach ($groupData['rows'] as $rowIndex => $row) {

                $group->rows()->create([
                    'recruited_by' => $row['recruitedBy'],
                    'website' => $row['website'] ?: null,
                    'post' => $row['post'],
                    'eligibility' => $row['eligibility'],
                    'sort_order' => $rowIndex,
                ]);

            }

        }
    }

    protected function governmentGroups(): array
    {
        return [
            [
                'recruitedBy' => 'UPSC (Union Public Service Commission)',
                'website' => 'https://www.upsc.gov.in',
                'rows' => [
                    ['post' => 'Central Civil Services (IAS, IPS, IRS, IFS)', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Central Engineering Services (IES)', 'eligibility' => 'Any Engineering Graduate'],
                    ['post' => 'Indian Audit & Account Services', 'eligibility' => 'Graduate with Accountancy'],
                    ['post' => 'Miscellaneous type exams', 'eligibility' => 'As per required Post'],
                ],
            ],
            [
                'recruitedBy' => 'SSC (Central Government)',
                'website' => 'https://ssc.nic.in',
                'rows' => [
                    ['post' => 'CGL', 'eligibility' => 'Any Graduate'],
                    ['post' => 'CHSL', 'eligibility' => 'Any Higher Secondary (12th)'],
                    ['post' => 'Grade C', 'eligibility' => '12th'],
                    ['post' => 'Grade D', 'eligibility' => '10th standard'],
                    ['post' => 'Miscellaneous type', 'eligibility' => 'As per Post required'],
                ],
            ],
            [
                'recruitedBy' => 'WBPSC (Government of West Bengal)',
                'website' => 'https://psc.wb.gov.in',
                'rows' => [
                    ['post' => 'State Civil Services (WBCS)', 'eligibility' => 'Any Graduate'],
                    ['post' => 'State Judicial Services (WBJS)', 'eligibility' => 'Any Law Graduate'],
                    ['post' => 'Audit & Accounts services', 'eligibility' => 'Graduate with Accountancy'],
                    ['post' => 'State Forest Services (WBFS)', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Sub Inspector Post (Police)', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Sub Inspector (Food & Supply)', 'eligibility' => '10th'],
                    ['post' => 'Grade C', 'eligibility' => '12th'],
                    ['post' => 'Grade D', 'eligibility' => '10th'],
                ],
            ],
            [
                'recruitedBy' => 'Municipal Service Commission (W.B)',
                'website' => 'https://www.mscwb.org',
                'rows' => [
                    ['post' => 'Assistant Engineer', 'eligibility' => 'B.Tech (Electrical/Mech/Civil)'],
                    ['post' => 'Sub-Assistant Engg', 'eligibility' => 'Diploma Engineering'],
                    ['post' => 'LD Assistant', 'eligibility' => 'Madhyamik (with Typing Skill)'],
                    ['post' => 'Junior Assistant', 'eligibility' => 'Higher Secondary'],
                    ['post' => 'Surveyor', 'eligibility' => 'Madhyamik/Diploma (Survey Engg)'],
                    ['post' => 'Draftsman', 'eligibility' => 'Madhyamik / ITI Draftsmanship'],
                    ['post' => 'Accounts Assistant', 'eligibility' => 'Graduate in Commerce'],
                    ['post' => 'Miscellaneous', 'eligibility' => 'As per recruitment required'],
                ],
            ],
        ];
    }

    protected function bankingGroups(): array
    {
        return [
            [
                'recruitedBy' => 'IBPS',
                'website' => 'https://www.ibps.in',
                'rows' => [
                    ['post' => 'IBPS PO/MT', 'eligibility' => 'Any Graduate'],
                    ['post' => 'IBPS SO', 'eligibility' => 'Graduate with Specialisation required'],
                    ['post' => 'IBPS Clerk', 'eligibility' => 'Any Graduate'],
                ],
            ],
            [
                'recruitedBy' => 'SBI',
                'website' => 'https://www.sbi.co.in',
                'rows' => [
                    ['post' => 'SBI PO/MT', 'eligibility' => 'Any Graduate'],
                    ['post' => 'SBI Clerk', 'eligibility' => 'Any Graduate'],
                ],
            ],
            [
                'recruitedBy' => 'RBI',
                'website' => 'https://www.rbi.org.in',
                'rows' => [
                    ['post' => 'RBI Official', 'eligibility' => 'Any Graduate'],
                    ['post' => 'NABARD', 'eligibility' => 'Any Graduate'],
                    ['post' => 'GIC', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Miscellaneous', 'eligibility' => 'As per requirement required'],
                ],
            ],
        ];
    }

    protected function defenceGroups(): array
    {
        return [
            [
                'recruitedBy' => 'Indian Army',
                'website' => 'https://joinindianarmy.nic.in',
                'rows' => [
                    ['post' => 'Officer & Soldiers', 'eligibility' => '12th'],
                    ['post' => 'Soldier', 'eligibility' => '10th'],
                ],
            ],
            [
                'recruitedBy' => 'Indian Air Force',
                'website' => 'https://indianairforce.nic.in',
                'rows' => [
                    ['post' => 'AFCAT', 'eligibility' => 'Any Graduate / Engineer'],
                    ['post' => 'NDA', 'eligibility' => '12th (Science)'],
                    ['post' => 'Miscellaneous type', 'eligibility' => 'As per requirement required'],
                ],
            ],
            [
                'recruitedBy' => 'Indian Navy',
                'website' => 'https://indiannavy.gov.in',
                'rows' => [
                    ['post' => 'NDA & Naval Academy', 'eligibility' => '12th (Science)'],
                    ['post' => 'CDSE', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Miscellaneous type', 'eligibility' => 'As per requirement required'],
                ],
            ],
            [
                'recruitedBy' => 'CRPF',
                'website' => 'https://crpf.gov.in',
                'rows' => [
                    ['post' => 'Sub Inspector', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Assistant Sub Inspector', 'eligibility' => '12th'],
                    ['post' => 'Constable', 'eligibility' => '10th'],
                ],
            ],
            [
                'recruitedBy' => 'Indian Coast Guard',
                'website' => 'https://joinindiancoastguard.gov.in',
                'rows' => [
                    ['post' => 'Navik (Domestic Duty)', 'eligibility' => '10th Pass'],
                    ['post' => 'Assistant Commandant', 'eligibility' => 'Any Graduate'],
                    ['post' => 'Navik (General Duty)', 'eligibility' => '12th Science'],
                    ['post' => 'Yantrik', 'eligibility' => 'Diploma Engineering'],
                ],
            ],
        ];
    }

    protected function teachingGroups(): array
    {
        return [
            [
                'recruitedBy' => 'SSC (School Service Commission WB)',
                'website' => 'https://www.westbengalssc.com',
                'rows' => [
                    ['post' => 'TET (Upper Primary)', 'eligibility' => 'Any Graduate + 2 year teaching training'],
                    ['post' => 'TET (Primary)', 'eligibility' => '12th + 2 year teaching training'],
                    ['post' => 'SLST', 'eligibility' => 'Masters degree (subject-specific) + teaching training'],
                ],
            ],
            [
                'recruitedBy' => 'Central Government Teacher',
                'website' => '',
                'rows' => [
                    ['post' => 'CTET', 'eligibility' => 'Graduate with training'],
                ],
            ],
            [
                'recruitedBy' => 'Miscellaneous Type',
                'website' => '',
                'rows' => [
                    ['post' => 'Group C', 'eligibility' => '12th'],
                    ['post' => 'Group D', 'eligibility' => '10th'],
                ],
            ],
        ];
    }

    protected function engineeringGroups(): array
    {
        return [
            [
                'recruitedBy' => 'PSU (All)',
                'website' => '',
                'rows' => [
                    ['post' => 'GATE', 'eligibility' => 'Any Engineering Graduate'],
                ],
            ],
            [
                'recruitedBy' => 'Central Government',
                'website' => '',
                'rows' => [
                    ['post' => 'IES', 'eligibility' => 'Engineering Graduate'],
                ],
            ],
            [
                'recruitedBy' => 'State Government (WB examples)',
                'website' => '',
                'rows' => [
                    ['post' => 'Assistant Engineer', 'eligibility' => 'Engineering Graduate'],
                    ['post' => 'Sub Assistant Engineer', 'eligibility' => 'Diploma Engineering'],
                    ['post' => 'Technician', 'eligibility' => 'ITI'],
                ],
                'sublinks' => [
                    ['label' => 'WBSEDCL', 'href' => 'https://www.wbsedcl.in'],
                    ['label' => 'WBSETCL', 'href' => 'https://www.wbsetcl.in'],
                ],
            ],
        ];
    }

    protected function railwayGroups(): array
    {
        return [
            [
                'recruitedBy' => 'RRB (Railway Recruitment Board)',
                'website' => 'https://www.rrbkolkata.gov.in',
                'rows' => [
                    ['post' => 'Group D', 'eligibility' => '10th / ITI'],
                    ['post' => 'Group C', 'eligibility' => 'ITI / Diploma / 12th'],
                ],
            ],
        ];
    }

    protected function afterClass8Groups(): array
    {
        return [
            [
                'typeOfJob' => 'Driver Type Job',
                'rows' => [
                    ['recruitedBy' => 'Fire & Emergency Service', 'website' => 'https://www.wbfes.gov.in', 'post' => 'Driver', 'eligibility' => 'Class 8'],
                    ['recruitedBy' => 'West Bengal Police', 'website' => 'https://policewb.gov.in', 'post' => 'Driver', 'eligibility' => 'Class 8'],
                    ['recruitedBy' => 'West Bengal Health Recruitment Board', 'website' => 'https://www.wbhrb.in', 'post' => 'Driver', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Office Peon',
                'rows' => [
                    ['recruitedBy' => 'Office of District Judge & Session Judge', 'website' => '', 'post' => 'Peon', 'eligibility' => 'Class 8'],
                    ['recruitedBy' => 'District Collector & Election Office', 'website' => '', 'post' => 'Peon', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Civic Volunteer Post',
                'rows' => [
                    ['recruitedBy' => 'WBPS / Police', 'website' => 'https://policewb.gov.in', 'post' => 'Civic Volunteer', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Junior Constable',
                'rows' => [
                    ['recruitedBy' => 'WBPS / Police', 'website' => 'https://policewb.gov.in', 'post' => 'Junior Constable', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Soldier Tradesmen',
                'rows' => [
                    ['recruitedBy' => 'Indian Army', 'website' => 'https://joinindianarmy.nic.in', 'post' => 'Tradesmen', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Anganwadi Worker / Helper / Mini Anganwadi Worker',
                'rows' => [
                    ['recruitedBy' => 'Directorate of Women & Child Development', 'website' => 'https://www.wbcdsw.gov.in', 'post' => 'Anganwadi (role varies)', 'eligibility' => 'Class 8'],
                ],
            ],
            [
                'typeOfJob' => 'Lab Assistant',
                'rows' => [
                    ['recruitedBy' => 'State Fisheries Development Corporation', 'website' => 'https://wbsfdc.com', 'post' => 'Lab Assistant', 'eligibility' => 'Class 8'],
                ],
            ],
        ];
    }
}
