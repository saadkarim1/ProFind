<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use App\Traits\ApiResponse;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ResumeController extends Controller
{

    use ApiResponse;
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
                    'resource_type' => 'auto',
                    'access_mode' => 'public',
                    'sign_url' => true
                ]);

                $cv_url = Cloudinary::image($upload['public_id'])
                    ->addTransformation('fl_attachment')
                    ->signUrl(true)
                    ->toUrl();

                $preview_url = Cloudinary::image($upload['public_id'])
                    ->signUrl(true)
                    ->toUrl();

                $resume = Resume::create([
                    'user_id' => Auth::guard('web')->user()->id,
                    'file_name' => $request->file('cvFile')->getClientOriginalName(),
                    'public_id' => $upload['public_id'],
                    'cv_url' => $cv_url,
                    'preview_url' => $preview_url,
                ]);

                return $this->successResponse($resume);
            });
        } catch (Exception $e) {
            if ($upload) {
                Cloudinary::uploadApi()->destroy($upload['public_id']);
            }

            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getUserResumes()
    {
        try {



            $resumes = Auth::guard('web')->user()->resumes()->get();

            return $this->successResponse($resumes);
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function deleteResume($resumeId)
    {
        try {
            $resume = Resume::findOrFail($resumeId);

            if ($resume) {
                $resume->delete();
                // Cloudinary::uploadApi()->destroy($resume->public_id);
            }

            return $this->successResponse(message: "deleted");
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function show($resumeId)
    {
        $resume = Resume::findOrFail($resumeId);

        return $this->successResponse($resume);
    }
}
