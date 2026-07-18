<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobSector extends Model
{
    protected $fillable = [
        'key',
        'title',
        'note',
        'sort_order',
    ];

    public function groups()
    {
        return $this->hasMany(JobGroup::class)->orderBy('sort_order');
    }
}
