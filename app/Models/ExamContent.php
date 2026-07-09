<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExamContent extends Model
{
    //
    protected $fillable = [

    'menu_id',
    'tab_id',
    'section_id',
    'url',
    'tag',
    'level',
    'name',
    'exam',
    'full_form',
    'title',
    'short',
    'route',
    'nature',
    'group',

    'purpose',
    'eligibility',
    'apply',
    'activity',
    'calendar',

    'source',
    'href',
    'link_label',

    'sources',
    'links',

    'note',
    'status_note',

    'wb_focus',
    'is_active',
];


protected $casts = [
        'eligibility' => 'array',
        'activity'    => 'array',
        'sources'     => 'array',
        'links'       => 'array',
        'wb_focus'    => 'boolean',
        'is_active'   => 'boolean',
    ];



public function menu()
{
    return $this->belongsTo(Menu::class,'menu_id');
}

public function tab()
{
    return $this->belongsTo(Menu::class,'tab_id');
}

public function section()
{
    return $this->belongsTo(Menu::class,'section_id');
}



}
