<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaderMessage extends Model
{
    protected $fillable = [
        'name',
        'post',
        'designation',
        'about',
        'image'
    ];
}