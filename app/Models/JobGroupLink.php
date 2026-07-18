<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobGroupLink extends Model
{
    protected $fillable = [
        'job_group_id',
        'label',
        'href',
        'sort_order',
    ];

    public function group()
    {
        return $this->belongsTo(JobGroup::class, 'job_group_id');
    }
}
