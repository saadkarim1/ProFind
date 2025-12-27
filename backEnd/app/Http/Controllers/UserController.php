<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    use ApiResponse;

    public function register(RegisterUserRequest $request)
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

    public function login(LoginUserRequest $request)
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
        $user = Auth::guard('recruiter')->user() ?? Auth::guard(name: 'web')->user();
        return $this->successResponse(data: new UserResource($user));
    }

    public function updateUser(UpdateUserRequest $request, $id)
    {

        $request->validated();
        $recruiter = User::findOrFail($id);
        $recruiter->update($request->validated());
        return response()->json($recruiter, 200);;
    }
}
