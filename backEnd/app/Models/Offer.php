<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        "title",
        "description",
        "location",
        "duration",
        "offer_type",
        "recruiter_id",
        "offer_category",
        "salary",
        "email_to_apply",
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_offer_apply')->withPivot('status')->withTimestamps();
    }

    public function saversusers()
    {
        return $this->belongsToMany(User::class, 'user_offer_save')->withTimestamps();
    }

    public function recruiter()
    {
        return $this->belongsTo(Recruiter::class);
    }

    public function scopeWithUserStatus($query, $userId)
    {
        return $query->withExists(['saversusers as is_saved' => function ($q) use ($userId) {
            $q->where('user_id', $userId);
        }])->withExists(['users as is_applied' => function ($q) use ($userId) {
            $q->where('user_id', $userId);
        }]);
    }
}
