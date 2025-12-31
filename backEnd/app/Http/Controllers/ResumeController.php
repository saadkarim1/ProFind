<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ResumeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'cvFile' => 'required|mimes:pdf|max:2048',
        ]);
        $upload = null;

        try {
            return DB::transaction(function () use ($request, &$upload) {

                $upload = Cloudinary::uploadApi()->upload($request->file('cvFile')->getRealPath(), [
                    'folder' => 'profind/resumes',
                    'resource_type' => 'auto'
                ]);

                $resume = Resume::create([
                    'user_id' => Auth::guard('web')->user()->id,
                    'file_name' => $request->file('cvFile')->getClientOriginalName(),
                    'public_id' => $upload['public_id'],
                    'cv_url' => $upload['secure_url']
                ]);

                return response()->json($resume, 200);
            });
        } catch (\Exception $e) {
            if ($upload) {
                Cloudinary::uploadApi()->destroy($upload['public_id']);
            }

            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
