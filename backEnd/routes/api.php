<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ->middleware('auth:sanctum')

Route::get('/user', [AuthController::class, 'getUser'])->middleware('auth:sanctum');
Route::prefix('v1')->group(function () {

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
});
