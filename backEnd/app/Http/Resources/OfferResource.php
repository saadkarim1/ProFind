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

        return [
            "offer_id" => $this->id,
            "offer_title" => $this->title,
            "offer_description" => $this->description,
            "location" => $this->location,
            "duration" => $this->duration,
            "company_id" => $this->company_id,
            "offer_type" => $this->offer_type,
            "company" => $this->company,
            "created_at" => $this->created_at,
            'is_saved' => (bool) ($this->is_saved ?? false),
            'is_applied' => (bool) ($this->is_applied ?? false),
        ];
    }
}
