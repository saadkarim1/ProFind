<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * 
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "company_id" => $this->id,
            "company_name" => $this->title,
            "offers" => ["offer_name" => $this->offers->pluck('title')]
            // "offers" => $this->offers
        ];
    }
}
