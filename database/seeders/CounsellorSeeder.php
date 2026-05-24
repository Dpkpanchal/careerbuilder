<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\CounselorDetail;

class CounsellorSeeder extends Seeder
{
    public function run(): void
    {
        $data = [
            [
                'name' => 'Siddhartha Mitra',
                'email' => 'siddhartha.13mitra@gmail.com',
                'mobile' => '7059787929',
                'subjects' => [
                    [
                        'subject' => 'Statistics',
                        'qualification' => 'M.A',
                    ],
                ],
            ],
            [
                'name' => 'Dr Abdus Samad (Medicine)',
                'email' => 'profdrsasamad@gmail.com',
                'mobile' => '8777607967',
                'subjects' => [
                    [
                        'subject' => 'Paramedical Courses / Nursing',
                        'qualification' => 'Ph.D',
                    ],
                ],
            ],
            [
                'name' => 'Dr Mir Musaraf Hussain',
                'email' => 'mirmusaraf@rediffmail.com',
                'mobile' => '9434306914',
                'subjects' => [
                    [
                        'subject' => 'Microbiology',
                        'qualification' => 'Ph.D',
                    ],
                ],
            ],
        ];

        foreach ($data as $person) {

            // Create user
            $user = User::create([
                'name' => $person['name'],
                'email' => $person['email'],
                'mobile' => $person['mobile'],
                'password' => Hash::make('password123'), // default password
                'role' => 'counselor',
                'is_active' => 1,
            ]);

            // Create counselor details
            foreach ($person['subjects'] as $row) {
                CounselorDetail::create([
                    'user_id' => $user->id,
                    'subject' => $row['subject'],
                    'qualification' => $row['qualification'],
                ]);
            }
        }
    }
}
