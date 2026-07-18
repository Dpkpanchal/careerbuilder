<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Menu extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'key', 'label', 'href', 'route_name', 'slug',
        'tabbed', 'no_dropdown', 'parent_id', 'type', 'sort_order', 'is_active',
    ];

    protected $casts = [
        'tabbed'      => 'boolean',
        'no_dropdown' => 'boolean',
        'is_active'   => 'boolean',
    ];

    public function tabs()
    {
        return $this->hasMany(Tab::class, 'menu_id')->orderBy('sort_order');
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    // public function children(): HasMany
    // {
    //     return $this->hasMany(Menu::class, 'parent_id')->orderBy('sort_order');
    // }

    public function children(): HasMany
    {
        return $this->hasMany(Menu::class, 'parent_id')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->with('children');
    }
}
