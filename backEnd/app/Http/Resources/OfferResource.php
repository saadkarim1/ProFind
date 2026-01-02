<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OfferResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $company = $this->recruiter;
        return [
            "offer_id" => $this->id,
            "offer_title" => $this->title,
            "offer_description" => $this->description,
            "location" => $this->location,
            "duration" => $this->duration,
            "company_id" => $this->recruiter_id,
            "offer_type" => $this->offer_type,
            "offer_category" => $this->offer_category,
            "salary" => $this->salary,
            "email_to_apply" => $this->email_to_apply,
            "company_name" => $company->company_name,
            "created_at" => $this->created_at,
            'is_saved' => (bool) ($this->is_saved ?? false),
            'is_applied' => (bool) ($this->is_applied ?? false),
        ];
    }
}
