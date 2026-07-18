<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobRow extends Model
{
    protected $fillable = [
        'job_group_id',
        'recruited_by',
        'website',
        'post',
        'eligibility',
        'sort_order',
    ];

    public function group()
    {
        return $this->belongsTo(JobGroup::class, 'job_group_id');
    }
}
