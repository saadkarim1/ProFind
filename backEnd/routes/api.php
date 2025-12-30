<?php

use App\Http\Controllers\OfferController;
use App\Http\Controllers\RecruiterController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ->middleware('auth:sanctum')

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return "dkfhjds";
// });
Route::prefix('v1')->group(function () {

    Route::controller(UserController::class)->group(function () {
        Route::get('/user',  'getUser')->middleware('auth:sanctum');
        Route::patch('/user/{id}', 'updateUser');
    });

    Route::controller(OfferController::class)->group(function () {
        Route::get('/offers/saad',  'getRecruiterOffers');
        Route::post('/offers', 'store');
        Route::get('/offers',  'index');
        Route::get('/offers/applied',  'getAppliedOffers');
        Route::get('/offers/saved',  'getSavedOffers');
        Route::get('/offers/{offerId}',  'show');
        Route::post('/offers/{offerId}/apply',  'applyOffer');
        Route::post('/offers/{offerId}/save',  'toggleSave');
    });

    Route::controller(RecruiterController::class)->group(function () {
        Route::patch('/recruiter/{id}', 'updateRecruiter');
    });
});
