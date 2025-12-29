<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if ($this->role === 'recruiter') {
            return [
                "user_id" => $this->id,
                "name" => $this->name,
                "email" => $this->email,
                "role" => $this->role,
                "company_name" => $this->company_name,
                "company_description" => $this->company_description,
                "company_website" => $this->company_website,
                "company_logo" => $this->company_logo,
                "location" => $this->location,
                "sector" => $this->sector,
            ];
        }
        return [
            "user_id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "role" => $this->role,

            "about_me" => $this->about_me,
            "phone" => $this->phone,
            "location" => $this->location,
            "job" => $this->job,
        ];
    }
}
