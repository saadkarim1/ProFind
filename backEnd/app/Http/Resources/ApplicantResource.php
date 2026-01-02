<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicantResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $pivot = $this->pivot;
        return [
            'about_me' => $this->about_me,
            'email' => $this->email,
            'applicant_id' => $this->id,
            'job' => $this->job,
            'location' => $this->location,
            'name' => $this->name,
            'phone' => $this->phone,
            'status' => $pivot->status,
            'applied_at' => $pivot->created_at,
            'message' => $pivot->message,
            'resume_id' => $pivot->resume_id,

        ];
    }
}
