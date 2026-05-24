<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItiCollege extends Model
{
    protected $fillable = [
        'name', 'type', 'address', 'phone'
    ];

    public function trades()
    {
        return $this->hasMany(ItiTrade::class, 'iti_college_id');
    }
}
