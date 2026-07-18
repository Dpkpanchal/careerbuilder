<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Menu;

class CollegeContent extends Model
{
    //
    protected $table = 'collage_contents';

    protected $fillable = [
    'menu_id',
    'tab_id',
    'section_id',
    'link_id',
    'name',
    'code',
    'state',
    'city',
    'website',
    'address',
    'contact',
    'url',
    'note',
    'is_active',
];




public function menu()
{
    return $this->belongsTo(Menu::class, 'menu_id');
}

public function tab()
{
    return $this->belongsTo(Menu::class, 'tab_id');
}

public function section()
{
    return $this->belongsTo(Menu::class, 'section_id');
}

public function link()
{
    return $this->belongsTo(Menu::class, 'link_id');
}

}
