<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'reportable_type',
        'reportable_id',
        'user_id',
        'reason',
        'details',
        'status',
    ];

    // 🔹 Reported content (Question / Answer / Reply)
    public function reportable()
    {
        return $this->morphTo();
    }

    // 🔹 Reporter (jisne report kiya)
    public function reporter()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
