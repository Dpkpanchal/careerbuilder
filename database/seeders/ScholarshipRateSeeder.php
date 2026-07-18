<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ScholarshipRate;

class ScholarshipRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ScholarshipRate::truncate();

        $rows = [

            [
                'type' => 'PRE MATRIC',
                'class_of_study' => 'Class I - V',
                'day_admission_fee' => 0,
                'day_maintenance_allowance' => 1100,
                'day_total' => 1100,
                'hosteller_admission_fee' => 0,
                'hosteller_maintenance_allowance' => 0,
                'hosteller_total' => 0,
                'sort_order' => 1,
                'is_active' => true,
            ],

            [
                'type' => 'PRE MATRIC',
                'class_of_study' => 'Class VI - X',
                'day_admission_fee' => 750,
                'day_maintenance_allowance' => 4400,
                'day_total' => 5150,
                'hosteller_admission_fee' => 750,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 7750,
                'sort_order' => 2,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'Class XI - XII',
                'day_admission_fee' => 2300,
                'day_maintenance_allowance' => 5500,
                'day_total' => 7800,
                'hosteller_admission_fee' => 2300,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 9300,
                'sort_order' => 3,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'UG (General)',
                'day_admission_fee' => 3000,
                'day_maintenance_allowance' => 5500,
                'day_total' => 8500,
                'hosteller_admission_fee' => 3000,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 10000,
                'sort_order' => 4,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'UG (Professional)',
                'day_admission_fee' => 5000,
                'day_maintenance_allowance' => 5500,
                'day_total' => 10500,
                'hosteller_admission_fee' => 5000,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 12000,
                'sort_order' => 5,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'PG (General)',
                'day_admission_fee' => 3500,
                'day_maintenance_allowance' => 5500,
                'day_total' => 9000,
                'hosteller_admission_fee' => 3500,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 10500,
                'sort_order' => 6,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'PG (Professional)',
                'day_admission_fee' => 5500,
                'day_maintenance_allowance' => 5500,
                'day_total' => 11000,
                'hosteller_admission_fee' => 5500,
                'hosteller_maintenance_allowance' => 7000,
                'hosteller_total' => 12500,
                'sort_order' => 7,
                'is_active' => true,
            ],

            [
                'type' => 'POST MATRIC',
                'class_of_study' => 'Ph.D',
                'day_admission_fee' => 8000,
                'day_maintenance_allowance' => 7000,
                'day_total' => 15000,
                'hosteller_admission_fee' => 8000,
                'hosteller_maintenance_allowance' => 9000,
                'hosteller_total' => 17000,
                'sort_order' => 8,
                'is_active' => true,
            ],

        ];

        ScholarshipRate::insert($rows);
    }
}