<?php

namespace Database\Seeders;

use App\Models\CourseContent;
use Illuminate\Database\Seeder;

class CourseContentSeeder extends Seeder
{
    /**
     * This seeds the "Class 8+ Vocational Trades" tab with the exact same
     * data that used to be hardcoded in Class8VocationalPage.jsx, so you can
     * see the expected JSON shape for each column. Duplicate this block for
     * class-10-plus / iti / msme with their own slug + tab_key + content.
     */
    public function run(): void
    {
        CourseContent::updateOrCreate(
            ['tab_key' => 'class-8-plus'],
            [
                'tab_label'   => 'Class 8+ Vocational Trades',
                'slug'        => 'class-8-vocational-trades',
                'page_title'  => 'Class 8+ Vocational & Skill Courses',
                'breadcrumb'  => 'Class 8th vocational courses',

                'intro_heading'   => 'Vocational Options After Class 8',
                'intro_description' => 'After completing Class 8, students can begin structured skill training alongside regular studies. These courses focus on practical learning, early work exposure and clear pathways towards higher training like ITI, polytechnic or specialised programmes.',
                'intro_description_secondary' => 'On this page you can explore different skill sectors, understand how admission works and discover important agencies and portals related to vocational education.',

                'snapshot' => [
                    'eligibility'   => 'Completed Class 8 (VIII pass)',
                    'major_sectors' => 'Engineering & Technology, Agriculture, Home Science, Business & Commerce, Paramedical',
                    'duration'      => 'Around 6 months to 2 years depending on the trade',
                    'institutes'    => 'ITI / ITC, Junior Polytechnic, recognised vocational centres and training partners.',
                ],

                'sectors' => [
                    [
                        'code' => 'ET',
                        'title' => 'Engineering & Technology',
                        'description' => 'Practical technical skills that can lead to early employment, apprenticeships and future ITI or diploma study.',
                        'courses' => [
                            'Amin survey', 'Electrical House wiring & Motor Winding',
                            'Servicing Of Domistic Electronics product', '2/3 wheeler mechanic',
                            'Auto Electrician', 'Automobile maintenance', 'Diesel Pump set Repairing',
                            'Rural Sanitation & sanitary plumbing', 'Mechanic rural', 'Photography',
                            'Videography', 'Manufacture of jute product', 'Plumbing',
                            'Wooden Furniture Making', 'Telephone & Mobile Set Repairing',
                            'Footwear (open type)', 'Welding',
                            'Repair & maintenance of Agriculture machinaries', 'DTP', 'Mason',
                        ],
                    ],
                    [
                        'code' => 'AG',
                        'title' => 'Agriculture',
                        'description' => 'Skills related to farming, fisheries and animal husbandry, suitable for both self-employment and rural jobs.',
                        'courses' => [
                            'Marin Fisheries', 'Ornamental Fish Culture', 'Mushroom Cultivation',
                            'Composting', 'Dairy farming', 'Poultry farming', 'Bee keeping',
                            'Goat keeping', 'Seed Production Tech',
                        ],
                    ],
                    [
                        'code' => 'HS',
                        'title' => 'Home Science',
                        'description' => 'Home-based and creative skills, ideal for small businesses, boutique work and service-oriented careers.',
                        'courses' => [
                            'Tailoring', 'Commercial Art', 'Manufacture of Jam, jelly & pickles',
                            'Silk screen printing', 'Crèche management', 'Jari work & kantha embroidery',
                            'Toy Making (Soft)', 'Interior Decoration', 'Beautician', 'Boutique work',
                            'Glass painting & Prodution of ceramic & Candle items', 'Painter',
                            'Book & Doc Binder',
                        ],
                    ],
                    [
                        'code' => 'BC',
                        'title' => 'Business & Commerce',
                        'description' => 'Field and support roles for students interested in marketing, sales and basic business services.',
                        'courses' => ['Rural Marketing', 'Marketing', 'Security Guard'],
                    ],
                    [
                        'code' => 'PM',
                        'title' => 'Paramedical',
                        'description' => 'Entry-level healthcare support roles under guidance of trained medical professionals.',
                        'courses' => ['Blood Collection Assistant', 'Health Worker', 'OT Assistant'],
                    ],
                ],

                'admission_heading' => 'Admission & Where to Study',
                'admission_description' => 'Different institutes run vocational courses after Class 8. The exact process can vary, but the broad steps are similar.',
                'admission_info' => [
                    'Courses are offered through ITI, ITC, Junior Polytechnic, Rabindra Open Schooling centres and other recognised skill institutes.',
                    'Basic eligibility is usually completion of Class 8 (VIII pass). Some trades may have additional criteria decided by the institute.',
                    'For certain categories there may be entrance tests, counselling rounds or selection procedures.',
                    'Updates and notifications are commonly published through official websites, local newspapers and institute notice boards.',
                ],
                'next_steps' => [
                    'Shortlist one or two sectors that genuinely interest you.',
                    'Find nearby ITI / ITC / Junior Polytechnic / recognised centres offering those trades.',
                    'Check admission rules: direct admission, entrance test, or counselling.',
                    'Keep an eye on notices, official websites and newspapers so you don\'t miss deadlines.',
                ],

                'skill_agencies' => [
                    [
                        'title' => 'West Bengal State Council of Technical & Vocational Education and Skill Development',
                        'subtitle' => 'State-level body for technical and vocational education in West Bengal.',
                        'links' => [
                            ['label' => 'ITI Portal', 'url' => 'https://iti.webscte.co.in/'],
                            ['label' => 'e-ITI Portal', 'url' => 'https://eiti.webscte.co.in/'],
                            ['label' => 'Mini ITI Portal', 'url' => 'https://miti.webscte.co.in/'],
                            ['label' => 'WBSCVET Portal', 'url' => 'http://www.wbscvt.net/#'],
                        ],
                    ],
                    [
                        'title' => 'Directorate General of Training (DGT)',
                        'subtitle' => 'Central agency overseeing industrial training and ITIs across India.',
                        'links' => [
                            ['label' => 'DGT Official Site', 'url' => 'http://dget.nic.in/content/'],
                        ],
                    ],
                    [
                        'title' => 'National Skill Development Corporation (NSDC)',
                        'subtitle' => 'National-level organisation supporting skill development and training partners.',
                        'links' => [
                            ['label' => 'NSDC Official Site', 'url' => 'https://www.nsdcindia.org/'],
                        ],
                    ],
                    [
                        'title' => 'Fire & Safety Training Institutions',
                        'subtitle' => 'Specialised institutes offering fire and industrial safety courses.',
                        'links' => [
                            ['label' => 'National Academy of Fire & Safety Engineering', 'url' => 'https://nafsindia.com/nafs-programme.php'],
                            ['label' => 'Safety Academy – Fire & Safety Courses', 'url' => 'http://www.safetyacademy.in/course-after-12th-in-india.htm'],
                        ],
                    ],
                ],

                'more_pages' => [
                    ['label' => 'Class 10+ Vocational Trades', 'description' => 'Skill options available after completing Class 10.', 'href' => '/courses/class-10-vocational-trades'],
                    ['label' => 'ITI & ITC Trades', 'description' => 'Industrial training routes for technical trades.', 'href' => '/courses/iti-itc-trades'],
                    ['label' => 'MSME Tool Room Courses', 'description' => 'Specialised training in tool rooms and manufacturing.', 'href' => '/courses/msme-tool-room-courses'],
                ],

                'sort_order' => 1,
                'is_active'  => true,
            ]
        );

        // Repeat updateOrCreate() blocks above for:
        // 'class-10-plus' -> slug 'class-10-vocational-trades'
        // 'iti'           -> slug 'iti-itc-trades'
        // 'msme'          -> slug 'msme-tool-room-courses'
    }
}
