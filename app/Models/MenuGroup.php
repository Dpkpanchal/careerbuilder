<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuGroup extends Model
{
    protected $fillable = [
        'sub_category_id',
        'title',
        'sort_order',
        'is_active',
    ];

    public function subCategory()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function menuItems()
    {
        return $this->hasMany(MenuItem::class, 'group_id');
    }
}
