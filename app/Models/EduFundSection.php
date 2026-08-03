<?php
// app/Models/EduFundSection.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EduFundSection extends Model
{
    protected $fillable = [
        'key', 'heading_prefix', 'heading_highlight', 'description',
        'cta_label', 'cta_link', 'extra_note',
        'note_title', 'note_text', 'note_icon',
        'bg_style', 'sort_order',
    ];

    public function cards()
    {
        return $this->hasMany(EduFundCard::class, 'section_id')->orderBy('sort_order');
    }

    public function schemes()
    {
        return $this->hasMany(EduFundScheme::class, 'section_id')->orderBy('sort_order');
    }
}