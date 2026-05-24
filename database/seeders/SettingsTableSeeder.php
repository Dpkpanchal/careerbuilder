<?php
// database/seeders/SettingsTableSeeder.php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    public function run()
    {
        $settings = [
            [
                'key' => 'app_name',
                'value' => 'AdminLTE React',
                'type' => 'text',
                'group' => 'general',
                'label' => 'Application Name',
                'description' => 'The name of your application',
                'order' => 1,
                'is_public' => true,
            ],
            [
                'key' => 'app_description',
                'value' => 'A beautiful admin panel built with Laravel, React, and Inertia.js',
                'type' => 'textarea',
                'group' => 'general',
                'label' => 'Application Description',
                'description' => 'A brief description of your application',
                'order' => 2,
                'is_public' => true,
            ],
            [
                'key' => 'app_timezone',
                'value' => 'UTC',
                'type' => 'select',
                'group' => 'general',
                'options' => ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'],
                'label' => 'Timezone',
                'description' => 'The default timezone for your application',
                'order' => 3,
                'is_public' => false,
            ],
            [
                'key' => 'app_debug',
                'value' => '0',
                'type' => 'boolean',
                'group' => 'general',
                'label' => 'Debug Mode',
                'description' => 'Enable or disable debug mode',
                'order' => 4,
                'is_public' => false,
            ],
            [
                'key' => 'contact_email',
                'value' => 'admin@example.com',
                'type' => 'email',
                'group' => 'email',
                'label' => 'Contact Email',
                'description' => 'The email address for contact forms',
                'order' => 1,
                'is_public' => true,
            ],
            [
                'key' => 'items_per_page',
                'value' => '10',
                'type' => 'number',
                'group' => 'appearance',
                'label' => 'Items Per Page',
                'description' => 'Number of items to show per page in lists',
                'order' => 1,
                'is_public' => false,
            ],
            [
                'key' => 'enable_registration',
                'value' => '1',
                'type' => 'boolean',
                'group' => 'security',
                'label' => 'Enable User Registration',
                'description' => 'Allow new users to register accounts',
                'order' => 1,
                'is_public' => false,
            ],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }
    }
}