<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginAuthRequest;
use App\Http\Requests\RegisterAuthRequest;
use App\Http\Resources\AuthResource;
use App\Models\User;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    use ApiResponse;

    public function register(RegisterAuthRequest $request)
    {
        try {
            $request->validated();
            $user = User::create([
                'name' => $request->name,
                'email'     => $request->email,
                'password'  => $request->password,
            ]);

            Auth::guard('web')->login($user);
            $request->session()->regenerate();

            return response()->json([
                'message' => 'Registration successful',
                'user'    => $user
            ]);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }

    public function login(LoginAuthRequest $request)
    {
        try {
            $request->validated();

            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json([
                    'message' => 'Invalid credentials'
                ], 401);
            }

            $request->session()->regenerate();

            return response()->json([
                'message' => 'Login successful',
                'user'    => Auth::user()
            ]);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    public function getUser(Request $request)
    {
        // $user = $request->user();
        $user = Auth::guard('recruiter')->user() ?? Auth::guard(name: 'web')->user();
        return $this->successResponse(data: new AuthResource($user));
        // return $user;
    }
}
