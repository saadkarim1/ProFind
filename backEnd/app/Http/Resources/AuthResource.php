<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "user_id" => $this->id,
            "name" => $this->name,
            "about_me" => $this->about_me,
            "phone" => $this->phone,
            "location" => $this->location,
            "email" => $this->email,
            "role" => $this->role,
            "job" => $this->job,
        ];
    }
}
