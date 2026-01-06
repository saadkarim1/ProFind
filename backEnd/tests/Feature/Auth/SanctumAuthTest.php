<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class SanctumAuthTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        $this->withHeaders([
            'Accept' => 'application/json',
            'Referer' => 'http://localhost',
        ]);
    }
    public function test_user_can_login_with_session(): void
    {

        $password = '12341234';
        // 1. Create a user in your MySQL test database
        $user = User::factory()->create([
            'password' =>  $password,
        ]);

        // 2. Hit the login endpoint
        $response = $this->postJson('v1/login', [
            'email' => $user->email,
            'password' => $password,
        ]);

        // 3. Assertions
        $response->assertStatus(200);
        $this->assertAuthenticatedAs($user);
    }

    public function test_authenticated_user_can_access_protected_api(): void
    {
        $user = User::factory()->create();

        // actingAs simulates the session-based login for Sanctum
        $response = $this->actingAs($user)
            ->getJson('/api/v1/user');

        $response->assertStatus(200)
            ->assertJsonFragment(['email' => $user->email]);
    }
}