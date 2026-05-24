<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdmissionSupport extends Model
{
    //
    protected $fillable = [
        'category',
        'university',
        'name',
        'phone',
        'email',
        'sort_order',
        'is_active',
    ];
}
