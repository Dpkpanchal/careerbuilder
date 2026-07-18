<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScholarshipRate extends Model
{
    use HasFactory;

    protected $table = 'scholarship_rates';

    protected $fillable = [
        'type',
        'class_of_study',

        'day_admission_fee',
        'day_maintenance_allowance',
        'day_total',

        'hosteller_admission_fee',
        'hosteller_maintenance_allowance',
        'hosteller_total',

        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'day_admission_fee' => 'decimal:2',
        'day_maintenance_allowance' => 'decimal:2',
        'day_total' => 'decimal:2',

        'hosteller_admission_fee' => 'decimal:2',
        'hosteller_maintenance_allowance' => 'decimal:2',
        'hosteller_total' => 'decimal:2',

        'is_active' => 'boolean',
    ];
}