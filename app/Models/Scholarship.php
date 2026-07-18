<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    protected $fillable = [
        'name',
        'category',
        'criteria',
        'award',
        'eligibility',
        'when_to_apply',
        'application',
        'links',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'links' => 'array',
        'is_active' => 'boolean',
    ];
}