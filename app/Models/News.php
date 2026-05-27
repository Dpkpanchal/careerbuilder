<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class News extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'date',
        'description',
        'link',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($news) {

            $news->slug = Str::slug($news->title);

        });
    }



}