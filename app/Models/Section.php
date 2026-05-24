<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    //
    protected $fillable = [
        'section_key',
        'heading',
        'heading_prefix',
        'heading_highlight',
        'subheading',
    ];
}
