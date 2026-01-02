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

            return $this->successResponse(data: new UserResource(Auth::guard('web')->user()));
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), status: 404);
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

            return $this->successResponse(data: new UserResource(Auth::guard('web')->user()));
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), status: 404);
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
        try {
            $user = Auth::guard('recruiter')->user() ?? Auth::guard(name: 'web')->user();
            return $this->successResponse(data: new UserResource($user));
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), status: 404);
        }
    }

    public function updateUser(UpdateUserRequest $request, $id)
    {
        try {
            $request->validated();
            $user = User::findOrFail($id);
            $user->update($request->validated());
            return $this->successResponse(data: new UserResource($user));
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), status: 404);
        }
    }
}
