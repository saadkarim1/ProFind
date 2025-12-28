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
            $offers = Offer::all();
            return $this->successResponse(data: OfferResource::collection($offers));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function getAppliedOffers()
    {
        $offers = Auth::guard('web')->user()->offers;
        // return  response()->json("dsfsdfsdfd", 200);
        return $this->successResponse(data: OfferResource::collection($offers));
    }

    public function getSavedOffers()
    {
        $offers = Auth::guard('web')->user()->savedOffers;
        return $this->successResponse(data: OfferResource::collection($offers));
    }
    public function store(StoreOfferRequest $request)
    {
        try {
            $request->validated();
            $offer = Offer::create([
                "title" => $request->title,
                "description" => $request->description,
                "location" => $request->location,
                "duration" => $request->duration,
                "offer_type" => $request->offer_type,
                "company_id" => Auth::guard('recruiter')->user()->id,
            ]);
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
            // return response()->json($offer, 200);
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

    public function saveOffer($offerId)
    {
        $id = Auth::guard('web')->user()->id;
        $offer = Offer::findOrFail($offerId);
        $offer->saversusers()->syncWithoutDetaching($id);
        return $this->successResponse(data: new OfferResource($offer));
    }
}
