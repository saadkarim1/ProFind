<?php

namespace App\Http\Controllers;

use App\Http\Resources\OfferCollection;
use App\Http\Resources\OfferResource;
use App\Jobs\testTask;
use App\Models\Offer;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    use ApiResponse;

    public function index()
    {
        try {
            $offers = Offer::paginate(10);
            return $this->successResponse(data: OfferCollection::make($offers));
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }
    public function store(Request $request)
    {
        try {
            $offer = Offer::create($request->all());
            return response()->json($offer, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function show($offerId)
    {
        try {
            $offer = Offer::findOrFail($offerId);
            return response()->json($offer, 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage());
        }
    }

    public function applyOffer(Request $request, $offerId)
    {
        $offer = Offer::findOrFail($offerId);
        // Auth::user()->id
        $offer->users()->syncWithoutDetaching("01kbg95d0p1wk6bh43mvhmqacq");

        return response()->json($offer, 200);
    }

    public function saveOffer($offerId)
    {
        $offer = Offer::findOrFail($offerId);
        $offer->saversusers()->syncWithoutDetaching("01kbg95d0p1wk6bh43mvhmqacq");
        return response()->json($offer, 200);
    }
}
