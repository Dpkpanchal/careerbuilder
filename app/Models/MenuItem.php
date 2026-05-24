<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $fillable = [
        'sub_category_id',
        'name',
        'slug',
        'description',
        'link_to_page',
        'group_id'
    ];

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function tabs()
    {
        return $this->hasMany(MenuItemTab::class);
    }

    public function group()
    {
        return $this->belongsTo(MenuGroup::class, 'group_id');
    }

    
    
}
