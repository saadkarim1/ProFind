<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOfferRequest;
use App\Http\Resources\ApplicantResource;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\OfferResource;
use App\Jobs\testTask;
use App\Models\Company;
use App\Models\Offer;
use App\Models\Resume;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OfferController extends Controller
{
    use ApiResponse;



    public function index()
    {
        try {
            $userId = auth('web')->id();
            $offers = Offer::latest()->withUserStatus($userId)->get();

            return $this->successResponse(data: OfferResource::collection($offers));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function getRecruiterOffers()
    {
        try {
            $user = Auth::guard('recruiter')->user();
            $offers =  $user->offers()->latest()->get();

            return $this->successResponse(data: OfferResource::collection($offers));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function getAppliedOffers()
    {
        $user = Auth::guard('web')->user();
        $offers = $user->offers()->latest()->withUserStatus($user->id)->get();
        return $this->successResponse(data: OfferResource::collection($offers));
    }

    public function getSavedOffers()
    {
        $user = Auth::guard('web')->user();
        $offers = $user->savedOffers()->latest()->withUserStatus($user->id)->get();
        return $this->successResponse(data: OfferResource::collection($offers));
    }
    public function store(StoreOfferRequest $request)
    {
        try {
            $validated = $request->validated();
            $validated['recruiter_id'] = Auth::guard('recruiter')->id();
            $offer = Offer::create($validated);
            return $this->successResponse(data: new OfferResource($offer), status: 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function show($offerId)
    {
        try {
            $user = Auth::guard('web')->user();
            if ($user) {

                $offer = Offer::when($user, function ($query) use ($user) {
                    $query->withUserStatus($user->id);
                })->findOrFail($offerId);
            } else {

                $offer = Offer::findOrFail($offerId);
            }

            return $this->successResponse(new OfferResource($offer));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function applyOffer(Request $request, $offerId)
    {
        try {
            $offer = Offer::findOrFail($offerId);
            $id = Auth::guard('web')->user()->id;
            $result = $offer->users()->syncWithoutDetaching([$id => ['resume_id' => $request->resume_id, 'message' => $request->message]]);
            $is_applied = count($result['attached']) > 0;
            $offer->is_applied = $is_applied;
            return response()->json($offer, 200);
            // return $this->successResponse(data: new OfferResource($offer));
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage(), "trat chi hahja");
        }
    }

    public function toggleSave($offerId)
    {
        $id = Auth::guard('web')->user()->id;
        $offer = Offer::findOrFail($offerId);
        $result = $offer->saversusers()->toggle($id);
        $isSaved = count($result['attached']) > 0;

        $offer->is_saved = $isSaved;

        return $this->successResponse(data: new OfferResource($offer));
    }

    public function getOfferApplicatns($offerId)
    {
        $offer = Offer::with('users')->find($offerId);
        $applicants = $offer->users;
        // return response()->json($applicants, 200);
        return response()->json(ApplicantResource::collection($applicants), 200);
    }

    public function acceptApplication($offerId, $userId)
    {
        $offer = Offer::findOrFail($offerId);
        $offer->users()->updateExistingPivot($userId, ['status' => 'accepted']);
        return $this->successResponse(data: $offer, message: 'Applicant accepted');
    }

    public function rejectedApplication($offerId, $userId)
    {
        $offer = Offer::findOrFail($offerId);
        $offer->users()->updateExistingPivot($userId, ['status' => 'rejected']);
        return $this->successResponse(message: 'Applicant rejected');
    }
}
