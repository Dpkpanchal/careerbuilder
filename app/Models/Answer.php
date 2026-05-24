<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = ['content', 'question_id', 'user_id', 'is_verified_by_counselor'];
    
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }
    
    public function reports()
    {
        return $this->morphMany(Report::class, 'reportable');
    }
}
