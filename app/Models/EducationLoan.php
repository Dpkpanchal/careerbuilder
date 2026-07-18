<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EducationLoan extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'eligibility',
        'application_process',
        'age_group',
        'income_rates',
        'disbursement_info',
        'loan_care_link',
        'vidya_lakshmi_link',
        'is_active',
    ];

    protected $casts = [
        'income_rates' => 'array',
        'is_active' => 'boolean',
    ];
}