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
            "title" => $this->title,
            "description" => $this->description,
            "location" => $this->location,
            "duration" => $this->duration,
            "company_id" => $this->company_id,
            "likes" => $this->likes,
            "company" => $this->company,
        ];
    }
}
