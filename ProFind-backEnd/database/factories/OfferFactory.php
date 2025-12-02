<?php

namespace Database\Factories;

use App\Models\Company;
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
            "duration" => fake()->numberBetween(5, 10),
            "company_id" => Company::all(['id'])->random(),
            "company_name" => fake()->company(),
            "likes" => fake()->numberBetween(20, 40),
        ];
    }
}
