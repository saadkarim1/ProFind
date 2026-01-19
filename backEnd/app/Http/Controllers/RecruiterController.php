<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRecruiterRequest;
use App\Http\Requests\RegisterAuthAndRecuiterRequest;
use App\Http\Requests\RegisterRecruiterRequest;
use App\Http\Requests\UpdateRecruiterRequest;
use App\Http\Resources\UserResource;
use App\Models\Recruiter;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecruiterController extends Controller
{
    use ApiResponse;
    public function registerRecruiter(RegisterRecruiterRequest $request)
    {
        try {
            $request->validated();
            $recruiter = Recruiter::create([
                'name' => $request->name,
                'email'     => $request->email,
                'password'  => $request->password,
            ]);

            Auth::guard('recruiter')->login($recruiter);
            $request->session()->regenerate();
            return $this->apiResponse(data: new UserResource($request), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
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

            return $this->apiResponse(data: new UserResource($request), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function logoutRecruiter(Request $request)
    {
        Auth::guard('recruiter')->logout();
        $request->session()->invalidate();
        $request->session()->regenerate();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    public function updateRecruiter(UpdateRecruiterRequest $request, $id)
    {
        try {
            $recruiter = Recruiter::findOrFail($id);
            $recruiter->update($request->validated());
            return $this->apiResponse(data: new UserResource($request), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }
}
