<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = ['content', 'answer_id', 'user_id'];
    
    public function answer()
    {
        return $this->belongsTo(Answer::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function reports()
    {
        return $this->morphMany(Report::class, 'reportable');
    }
}
