<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->company(),
            "description" => fake()->paragraph(),
            "link" => fake()->text(),
            "sector" => fake()->randomElement(['teck', 'marketing', 'finance']),
            "city" => fake()->randomElement(['casablanca', 'rabat', 'agadir', 'safi']),
        ];
    }
}
