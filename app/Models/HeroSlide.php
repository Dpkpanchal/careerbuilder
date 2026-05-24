<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    //
    protected $fillable = [
        'title',
        'title_gradient',
        'subtitle',
        'cta_text',
        'cta_link',
        'img_base',
        'order',
    ];
}
