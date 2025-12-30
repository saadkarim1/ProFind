<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOfferRequest;
use App\Http\Resources\OfferCollection;
use App\Http\Resources\OfferResource;
use App\Jobs\testTask;
use App\Models\Company;
use App\Models\Offer;
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
        // try {
        $user = Auth::guard('recruiter')->user();
        // $offers =  Offer::where('company_id', $user->id)->get();
        $offers =  $user->offers()->get();

        return $this->successResponse(data: OfferResource::collection($offers));
        // return "haaanaaawww";
        // } catch (Exception $e) {
        // return response()->json($e->getMessage());
        // }
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
            $offer = Offer::findOrFail($offerId);
            // return response()->json("sdlfkjsd", 200);
            return $this->successResponse(data: new OfferResource($offer));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function applyOffer($offerId)
    {
        $offer = Offer::findOrFail($offerId);
        $id = Auth::guard('web')->user()->id;
        $result = $offer->users()->syncWithoutDetaching($id);
        $is_applied = count($result['attached']) > 0;
        $offer->is_applied = $is_applied;


        // return response()->json($offer, 200);
        return $this->successResponse(data: new OfferResource($offer));
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
}
