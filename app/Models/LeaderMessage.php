<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LeaderMessage extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'name',
        'post',
        'designation',
        'about',
        'image',
        'is_blocked',
    ];
}