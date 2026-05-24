<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ForumCategory extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'category_icon',
        'status',
    ];

    // Auto-generate slug if not manually set
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($category) {
            if (empty($category->slug)) {
                $category->slug = Str::slug($category->name);
            }
        });

        static::updating(function ($category) {
            if (empty($category->slug)) {
                $category->slug = Str::slug($category->name);
            }
        });
    }

    public function questions(): BelongsToMany
    {
        return $this->belongsToMany(Question::class, 'forum_question_categories');
    }
}
