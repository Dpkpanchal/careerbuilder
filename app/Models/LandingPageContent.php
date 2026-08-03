<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LandingPageContent extends Model
{
    protected $table = 'landing_page_contents';

    protected $fillable = [
        'slug',
        'content',
        'is_active'
    ];

    protected $casts = [
        'content' => 'array',
        'is_active' => 'boolean'
    ];

    

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}