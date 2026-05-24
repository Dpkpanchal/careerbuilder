<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItemTabContent extends Model
{
    protected $fillable = [
        'menu_item_tab_id',
        'title',
        'subtitle',
        'html_content',
        'sort_order'
    ];

    public function tab()
    {
        return $this->belongsTo(MenuItemTab::class, 'menu_item_tab_id');
    }
}
