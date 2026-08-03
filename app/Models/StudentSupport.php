<?php
// app/Models/StudentSupport.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentSupport extends Model
{
    protected $fillable = [
        'title',
        'description',
        'link',
        'icon',
        'tone',
        'level',
        'sort_order',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('status', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }
}