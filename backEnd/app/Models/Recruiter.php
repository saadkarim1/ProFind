<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Recruiter extends Authenticatable
{
    use HasUuids, HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        "name",
        "email",
        "password",

        "company_name",
        "company_description",
        "company_website",
        "sector",
        "company_logo",
        "location",
    ];

    protected $hidden = ['password', 'remember_token'];


    public $incrementing = false;
    protected $keyType = 'string';
    public function offers()
    {
        return $this->hasMany(Offer::class);
    }

    // public function owner()
    // {
    //     return $this->belongsTo(User::class);
    // }

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
