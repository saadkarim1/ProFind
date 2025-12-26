<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRecruiterRequest;
use App\Http\Requests\RegisterAuthAndRecuiterRequest;
use App\Http\Requests\RegisterRecruiterRequest;
use App\Models\Recruiter;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecruiterController extends Controller
{
    public function registerRecruiter(RegisterRecruiterRequest $request)
    {
        try {
            $request->validated();
            $recruiter = Recruiter::create([
                'name' => $request->name,
                'email'     => $request->email,
                'password'  => $request->password,
            ]);

            // if ($recruiter instanceof Recruiter) {

            Auth::guard('recruiter')->login($recruiter);
            $request->session()->regenerate();
            // }

            return response()->json([
                'message' => 'Registration successful',
                'user'    => $recruiter
            ]);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }

    public function loginRecruiter(LoginRecruiterRequest $request)
    {
        try {
            $request->validated();

            if (!Auth::guard('recruiter')->attempt($request->only('email', 'password'))) {
                return response()->json([
                    'message' => 'Invalid credentials'
                ], 401);
            }

            $request->session()->regenerate();

            return response()->json([
                'message' => 'Login successful',
                'user'    => Auth::guard('recruiter')->user(),
                'type' => 'recruiter'
            ]);
        } catch (Exception $e) {
            return response()->json(["message" => "somethig went wrong while updating an episode", "error" => $e->getMessage()], 404);
        }
    }
}
