<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::controller(OfferController::class)->group(function () {

    Route::post('/offers', 'store');
    Route::get('/offers',  'index');
    Route::get('/offers/{offerId}',  'show');
    Route::get('/offers/{offerId}/apply',  'applyOffer');
    Route::get('/offers/{offerId}/save',  'saveOffer');
});

Route::controller(CompanyController::class)->group(function () {

    Route::get('/companies',  'index');
});
