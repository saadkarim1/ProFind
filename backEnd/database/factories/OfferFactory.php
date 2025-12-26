<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Recruiter;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Offer>
 */
class OfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->jobTitle(),
            "description" => fake()->paragraph(),
            "location" => fake()->randomElement(['casablanca', 'rabat', 'agadir', 'safi']),
            "duration" => fake()->randomElement(["1-3 months", "3-6 months", "6+ months"]),
            "offer_type" => fake()->randomElement(["remote", "freelance", "part_time", 'full_time']),
            "company_id" => Recruiter::all(['id'])->random(),
        ];
    }
}
