<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
   protected $fillable = ['title', 'content', 'user_id', 'category_id'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function categories()
    {
        return $this->belongsToMany(ForumCategory::class, 'forum_categories');
    }
    
    public function answers()
    {
        return $this->hasMany(Answer::class)->withCount('replies');
    }
    
    public function reports()
    {
        return $this->morphMany(Report::class, 'reportable');
    }

}
