<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobGroup extends Model
{
    protected $fillable = [
        'job_sector_id',
        'label',
        'website',
        'sort_order',
    ];

    public function sector()
    {
        return $this->belongsTo(JobSector::class, 'job_sector_id');
    }

    public function links()
    {
        return $this->hasMany(JobGroupLink::class)->orderBy('sort_order');
    }

    public function rows()
    {
        return $this->hasMany(JobRow::class)->orderBy('sort_order');
    }
}
