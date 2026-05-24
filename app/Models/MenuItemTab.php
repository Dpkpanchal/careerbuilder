<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItemTab extends Model
{
    protected $fillable = [
        'menu_item_id',
        'name',
        'icon',
        'sort_order'
    ];

    public function menuItem()
    {
        return $this->belongsTo(MenuItem::class);
    }

    public function contents()
    {
        return $this->hasMany(MenuItemTabContent::class, 'menu_item_tab_id');
    }
}
