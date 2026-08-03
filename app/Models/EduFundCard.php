<?php
// app/Models/EduFundCard.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EduFundCard extends Model
{
    protected $fillable = ['section_id', 'icon', 'title', 'content', 'sort_order', 'status'];

    protected $casts = ['status' => 'boolean'];

    public function section()
    {
        return $this->belongsTo(EduFundSection::class, 'section_id');
    }
}