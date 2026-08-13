<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category_id',
        'date',
        'description',
        'link',
        'is_active'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($news) {

            $news->slug = Str::slug($news->title);

        });
    }

    public function category()
    {
        return $this->belongsTo(NewsCategory::class, 'category_id');
    }



}