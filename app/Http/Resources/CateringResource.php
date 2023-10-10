<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CateringResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'address' => $this->address,
            'email' => $this->email,
            'website' => $this->website,
            'status' => $this->status,
            'logoUrl' => $this->getFirstMediaUrl('logo'),
            'mealMenuUrl' => $this->getFirstMediaUrl('meal_menu'),
        ];
    }
}
