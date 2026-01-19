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

use function Laravel\Prompts\error;

class OfferController extends Controller
{
    use ApiResponse;



    public function index()
    {
        try {
            $userId = auth('web')->id();
            $offers = Offer::latest()->withUserStatus($userId)->get();

            return $this->apiResponse(data: OfferResource::collection($offers), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function getRecruiterOffers()
    {
        try {
            $user = Auth::guard('recruiter')->user();
            $offers =  $user->offers()->latest()->get();

            return $this->apiResponse(data: OfferResource::collection($offers), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed');
        }
    }

    public function getAppliedOffers()
    {
        try {
            $user = Auth::guard('web')->user();
            $offers = $user->offers()->latest()->withUserStatus($user->id)->get();
            return $this->apiResponse(data: OfferResource::collection($offers), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function getSavedOffers()
    {
        try {
            $user = Auth::guard('web')->user();
            $offers = $user->savedOffers()->latest()->withUserStatus($user->id)->get();
            return $this->apiResponse(data: OfferResource::collection($offers), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }
    public function store(StoreOfferRequest $request)
    {
        try {
            $validated = $request->validated();
            $validated['recruiter_id'] = Auth::guard('recruiter')->id();
            $offer = Offer::create($validated);
            return $this->apiResponse(data: new OfferResource($offer), message: 'Success', status: 201);
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
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

            return $this->apiResponse(data: new OfferResource($offer), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
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
            return $this->apiResponse(data: new OfferResource($offer), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function toggleSave($offerId)
    {
        try {
            $id = Auth::guard('web')->user()->id;
            $offer = Offer::findOrFail($offerId);
            $result = $offer->saversusers()->toggle($id);
            $isSaved = count($result['attached']) > 0;

            $offer->is_saved = $isSaved;

            return $this->apiResponse(data: new OfferResource($offer), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function getOfferApplicatns($offerId)
    {
        try {
            $offer = Offer::with('users')->find($offerId);
            $applicants = $offer->users;
            return $this->apiResponse(data: ApplicantResource::collection($applicants), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function acceptApplication($offerId, $userId)
    {
        try {
            $offer = Offer::findOrFail($offerId);
            $offer->users()->updateExistingPivot($userId, ['status' => 'accepted']);
            return $this->apiResponse(data: new OfferResource($offer), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }

    public function rejectedApplication($offerId, $userId)
    {
        try {
            $offer = Offer::findOrFail($offerId);
            $offer->users()->updateExistingPivot($userId, ['status' => 'rejected']);
            return $this->apiResponse(data: new OfferResource($offer), message: 'Success');
        } catch (Exception $e) {
            return $this->apiResponse(errors: $e->getMessage(), message: 'Failed', status: 404);
        }
    }
}
