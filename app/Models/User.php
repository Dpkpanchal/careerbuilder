<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    // use HasFactory, Notifiable, SoftDeletes;
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;
   

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'mobile',
        'password',
        'avatar',
        'is_active',
        'role',
        'is_blocked',  
        'blocked_at', 
        'is_online',
        'last_activity'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Avatar accessor
    // public function getAvatarUrlAttribute()
    // {
    //     if ($this->avatar) {
    //         return asset('storage/' . $this->avatar);
    //     }
        
    //     return 'https://ui-avatars.com/api/?name=' . urlencode($this->name) . '&color=7F9CF5&background=EBF4FF';
    // }

    protected $appends = ['avatar_url'];
    
    public function getAvatarUrlAttribute()
    {
        if ($this->avatar) {
            return asset('storage/' . $this->avatar);
        }

        return 'https://ui-avatars.com/api/?name='
            . urlencode($this->name)
            . '&background=007bff&color=fff';
    }



    public function counselorDetail()
    {
        return $this->hasOne(CounselorDetail::class, 'user_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
    
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }
    
    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function counselorDetails()
    {
        return $this->hasMany(CounselorDetail::class);
    }

    
}
