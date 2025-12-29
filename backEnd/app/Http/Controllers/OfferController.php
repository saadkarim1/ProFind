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
            // $offers = Offer::latest()->when($userId, function ($query) use ($userId) {
            //     $query->withUserStatus();
            // })->get();

            $offers = Offer::latest()->withUserStatus($userId)->get();

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
            $validated['company_id'] = Auth::guard('recruiter')->id();

            // "title" => $request->title,
            //                 "description" => $request->description,
            //                 "location" => $request->location,
            //                 "duration" => $request->duration,
            //                 "offer_type" => $request->offer_type,
            //                 "offer_category" => $request->offer_category,
            //                 "salary" => $request->salary,
            //                 "email_to_apply" => $request->email_to_apply,
            //                 "company_id" => Auth::guard('recruiter')->user()->id,
            $offer = Offer::create($validated);
            return $offer;
            // return $this->successResponse(data: new OfferResource($offer), status: 201);
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
        $offer->users()->syncWithoutDetaching($id);

        // return response()->json($offer, 200);
        return $this->successResponse(data: new OfferResource($offer));
    }

    public function toggleSave($offerId)
    {
        $id = Auth::guard('web')->user()->id;
        $offer = Offer::findOrFail($offerId);
        $offer->saversusers()->toggle($id);
        return $this->successResponse(data: new OfferResource($offer));
    }
}
