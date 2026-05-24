<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int         $id
 * @property int         $menu_id
 * @property string|null $html_content
 * @property string|null $meta_title
 * @property string|null $meta_description
 * @property bool        $is_published
 */
class PageContent extends Model
{
    protected $fillable = [
        'menu_id',
        'html_content',
        'meta_title',
        'meta_description',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class);
    }
}
