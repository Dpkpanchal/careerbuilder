<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CentralUniversity extends Model
{
    //
    protected $fillable = [
        'name',
        'city',
        'state',
        'website',
        'is_active',
    ];
}
