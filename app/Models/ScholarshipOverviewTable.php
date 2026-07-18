<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScholarshipOverviewTable extends Model
{
    use HasFactory;

    protected $table = 'scholarship_overview_tables';

    protected $fillable = [
        'name',
        'class_of_study',
        'website',
        'minimum_marks',
        'annual_family_income',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}