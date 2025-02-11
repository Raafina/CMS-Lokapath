<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $title = fake()->sentence(),
            'author_id' => Author::factory(),
            'category_id' => Category::factory(),
            'slug' => Str::slug($title),
            'body' => implode("\n\n", fake()->paragraphs(rand(5, 7))),
        ];
    }
}
