<?php

namespace Database\Seeders;

use App\Models\NationalFellowship;
use Illuminate\Database\Seeder;

class NationalFellowshipSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->fellowships() as $index => $item) {

            NationalFellowship::updateOrCreate(
                ['name' => $item['name']],
                [
                    'organization' => $item['organization'] ?: null,
                    'link' => $item['link'] ?: null,
                    'category' => $this->guessCategory($item['name'], $item['organization']),
                    'sort_order' => $index,
                    'is_active' => true,
                ]
            );

        }

        $this->command?->info('National Fellowships seeded successfully.');
    }

    /**
     * Same rules the frontend's getCategory() used to apply on the fly —
     * run once here so the result gets stored instead of re-guessed on
     * every page load. Falls back to "Other" instead of the old "All"
     * (which was only ever a filter option, not a real category).
     */
    protected function guessCategory(string $name, string $organization): string
    {
        $name = strtolower($name);
        $org = strtolower($organization);

        if (str_contains($name, 'minority') || str_contains($name, 'maulana azad')) {
            return 'Minority';
        }

        if (str_contains($name, 'doctoral') || str_contains($name, 'research') || str_contains($name, 'phd')) {
            return 'Doctoral Research';
        }

        if (str_contains($name, 'rural') || str_contains($name, 'development')) {
            return 'Rural Development';
        }

        if (str_contains($name, 'fulbright') || str_contains($name, 'commonwealth') || str_contains($name, 'international')) {
            return 'International';
        }

        if (str_contains($org, 'science') || str_contains($org, 'technology') || str_contains($org, 'biotechnology')) {
            return 'Science & Technology';
        }

        if (str_contains($org, 'social') || str_contains($org, 'cultural') || str_contains($org, 'media')) {
            return 'Social Sciences';
        }

        return 'Other';
    }

    protected function fellowships(): array
    {
        return [
            ['name' => 'SRTT Visiting Fellowships', 'organization' => 'Institute For Social And Economic Change', 'link' => 'http://www.isec.ac.in/srtt-fellowships.htm'],
            ['name' => 'Raman – Charpak Fellowship', 'organization' => 'Department Of Science And Technology, Government Of India And Ministry Of Foreign Affairs, Government Of France', 'link' => ''],
            ['name' => 'Tata Innovation Fellowship', 'organization' => 'Department Of Biotechnology', 'link' => 'www.dbtindia.nic.in'],
            ['name' => 'Ramalingaswamy Re-Entry Fellowship', 'organization' => 'Department Of Biotechnology', 'link' => 'www.dbtindia.nic.in'],
            ['name' => 'Ramanujan Fellowship', 'organization' => 'Department Of Science And Technology', 'link' => 'http://serb.gov.in/formats.php#ramanujan'],
            ['name' => 'J C Bose National Fellowships', 'organization' => 'Department Of Science And Technology', 'link' => 'www.dst.gov.in'],
            ['name' => 'Swarna Jayanti Fellowship', 'organization' => 'Ministry Of Science And Technology And Department Of Science And Technology', 'link' => 'index.htm'],
            ['name' => 'Vartha Fellowship', 'organization' => 'Department Of Information, Government Of Karnataka', 'link' => 'http://Karnatakavarthe.org/downloads/'],
            ['name' => 'Margdarshi Fellowship', 'organization' => 'Wellcome trust –DBT India Alliance', 'link' => 'www.wellcomedbt.org/margdarshi.html'],
            ['name' => 'Intermediate Researcher Fellowship', 'organization' => 'Welcome trust-DBT India Alliance', 'link' => 'http://www.wellcomedbt.org/intermediate.html'],
            ['name' => 'National Doctoral Fellowship', 'organization' => 'All India Council For Technical Educdational, (AICTE)', 'link' => 'http://www.aicte-india.org/dipndf.htm'],
            ['name' => 'NCERT Doctoral Fellowships', 'organization' => 'National Council Of Educational Research And Training', 'link' => 'http://www.ncert.nic.in/departments/nie/der/publication/pdf/guidelinesdoctoralfellowship.pdf'],
            ['name' => 'Fulbright – Nehru Doctoral Research Fellowships', 'organization' => 'United States- India Educational Foundation', 'link' => 'http://www.usief.org.in/Fulbright-nehru-doctoralresearch-fellowships.aspx'],
            ['name' => "Prime Minister's Fellowship Scheme For Doctoral Research", 'organization' => 'Department Of Science And Technology ,Ministry Of Science And Technology. Government Of India And Confederation Of Indian Industry', 'link' => 'www.cii.in/jointfellowshipscheme'],
            ['name' => 'Jawaharlal Nehru Scholarships', 'organization' => 'Jawaharlal Nehru Memorial Fund', 'link' => 'http://www.jnmf.in'],
            ['name' => 'Intermediate Fellowship For Researchers In India', 'organization' => 'Department Of Biotechnology', 'link' => 'http://www.wellcomedbt.org/intermediate.html'],
            ['name' => 'ICSSR Doctoral Research Fellowships For Indian Students', 'organization' => 'Indian Council Of Social Science Research', 'link' => 'http://www.icssr.org'],
            ['name' => 'Maulana Azad National Fellowship For Minority Students', 'organization' => 'University Grant Commission (UGC)', 'link' => 'http://www.ugc.ac.in/manf/default.aspx'],
            ['name' => 'ICMR International Fellowships', 'organization' => 'Indian Council Of Medical Research', 'link' => 'http://icmr.nic.in/ifc_research.htm'],
            ['name' => 'Media Fellowship', 'organization' => 'Indo- Global Social Service Society', 'link' => 'http://www.bidar.nic.in/scholarships/6-26.pdf'],
            ['name' => 'Rajiv Gandhi National Research Fellowship', 'organization' => 'University Grant Commission (UGC)', 'link' => 'www.ugc.ac.in/rgnf/'],
            ['name' => 'National Solar Science Fellows Program', 'organization' => 'Ministry Of New And Renewable Energy Government Of India', 'link' => 'proramme-scheme/national-solar-sciencefellowships-programme.pdf'],
            ['name' => 'IUSSTF Indo-US Science And Technology Forum Introduces Indo-Us Research Fellowships For Indian Researchers', 'organization' => '', 'link' => 'http://www.indousstf.org/fellowship.htm'],
            ['name' => 'Minister Of Culture Invites Application From Indian Nationals For The Award Of Senior Fellowships', 'organization' => 'Ministry Of Culture, Government Of India', 'link' => 'http://indiaculture.nic.in/indiaculture/senior-juniorfellowship.html'],
            ['name' => 'Young Fellowship', 'organization' => 'International Foundation For Research And Education (IFRE)', 'link' => 'http://youngindiafellowship.com/Apply-Now.aspx'],
            ['name' => 'Commonwealth Scholarships And Fellowships', 'organization' => 'Ministry Of Human Resource Development, Government Of India', 'link' => 'http://www.csfp-online.org/'],
            ['name' => 'Nehru Memorial Museum And Library Fellowships', 'organization' => 'Department Of Science And Technology', 'link' => 'http://www.nehrumemorial.org/index.php'],
            ['name' => 'The Ravi Sankaran Fellowship Program For Indian Students', 'organization' => 'Inlaks Shivdasani Foundation', 'link' => 'http://www.ravisankaran.org/index.php'],
            ['name' => 'The Legislative Assistants To Members Of Parliament (LAMP) Fellowship', 'organization' => 'PRS Legislative Research, Centre For Policy Research', 'link' => 'http://lamp.prsindia.org/about-%20the-fellowship'],
            ["name" => "Prime Minister's Rural Development Fellows Scheme", 'organization' => 'Ministry Of Rural Development, Government Of India', 'link' => 'http://rural.nic.in/pmrdfs/'],
        ];
    }
}
