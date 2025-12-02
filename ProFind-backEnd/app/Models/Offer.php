<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasUlids, HasFactory;

    protected $fillable = [
        "title",
        "description",
        "location",
        "duration",
        "company_id",
        "company_name",
        "likes",
        "image"
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_offer_apply');
    }

    public function saversusers()
    {
        return $this->belongsToMany(User::class, 'user_offer_save');
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
