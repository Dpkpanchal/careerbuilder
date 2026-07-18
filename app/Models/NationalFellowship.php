<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NationalFellowship extends Model
{
    // Same options as the original frontend's CATEGORIES list, minus "All"
    // (which was only ever a filter option, not a real category).
    public const CATEGORIES = [
        'Science & Technology',
        'Doctoral Research',
        'International',
        'Minority',
        'Social Sciences',
        'Rural Development',
        'Other',
    ];

    protected $fillable = [
        'name',
        'organization',
        'link',
        'category',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];
}
