<?php
// app/Models/EduFundScheme.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EduFundScheme extends Model
{
    protected $fillable = ['section_id', 'full_name', 'short_name', 'href', 'sort_order', 'status'];

    protected $casts = ['status' => 'boolean'];

    public function section()
    {
        return $this->belongsTo(EduFundSection::class, 'section_id');
    }
}