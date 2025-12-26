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
            return $this->successResponse(data: OfferCollection::make($offers));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
    public function store(StoreOfferRequest $request)
    {
        try {
            $request->validated();
            // $company_id = Company::where('id', )
            $offer = Offer::create([
                "title" => $request->title,
                "description" => $request->description,
                "location" => $request->location,
                "duration" => $request->duration,
                "offer_type" => $request->offer_type,
                "company_id" => Auth::user()->id,
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

    public function applyOffer(Request $request, $offerId)
    {
        $offer = Offer::findOrFail($offerId);
        // Auth::user()->id
        $offer->users()->syncWithoutDetaching("019b459e-16ff-73c7-8e5a-429ec885579e");

        // return response()->json($offer, 200);
        return $this->successResponse(data: new OfferResource($offer));
    }

    public function saveOffer($offerId)
    {
        $offer = Offer::findOrFail($offerId);
        $offer->saversusers()->syncWithoutDetaching("019b459e-16ff-73c7-8e5a-429ec885579e");
        return $this->successResponse(data: new OfferResource($offer));
        // return response()->json($offer, 200);
    }
}
