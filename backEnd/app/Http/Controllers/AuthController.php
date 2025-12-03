<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuthRequest;
use App\Http\Requests\RegisterAuthRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterAuthRequest $request)
    {
        try {
            $validated = $request->validated();
            $user = User::create([
                'user_name' => $validated['user_name'],
                'email'     => $validated['email'],
                'password'  => $validated['password'],
            ]);
            $token = $user->createToken('api-token');
            return response()->json([
                'user'  => $user,
                'token' => $token->plainTextToken
            ], 201);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }

    public function login(LoginAuthRequest $request)
    {
        try {
            $validated = $request->validated();

            $user = User::whereEmail($validated['email'])->first();

            if (!$user || !Hash::check($validated['password'], $user->password)) {
                return response()->json(['message' => 'Invalid credentials'], 401);
            }

            $token = $user->createToken('api-token');

            return response()->json([
                'user' => $user,
                'token' => $token->plainTextToken
            ], 200);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        if ($user) {
            // Supprime le token actuel
            $user->currentAccessToken()->delete();
            return response()->json(['message' => 'Logged out'], 200);
        }

        return response()->json(['message' => 'User not authenticated'], 401);
    }
}
