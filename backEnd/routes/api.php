<?php

use App\Http\Controllers\OfferController;
use App\Http\Controllers\RecruiterController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () {

    Route::middleware('auth:sanctum')->group(function () {

        Route::controller(UserController::class)->group(function () {
            Route::get('/user',  'getUser');
            Route::patch('/user/{id}', 'updateUser');
        });

        Route::controller(RecruiterController::class)->group(function () {
            Route::patch('/recruiter/{id}', 'updateRecruiter');
        });

        Route::controller(ResumeController::class)->group(function () {
            Route::post('/resume', 'store');
            Route::get('/resume', 'getUserResumes');
            Route::get('/resume/{resumeId}',  'show');
            Route::delete('/resume/{resumeId}', 'deleteResume');
        });

        Route::controller(OfferController::class)->group(function () {
            Route::get('/offers/saad',  'getRecruiterOffers');
            Route::post('/offers', 'store');
            Route::get('/offers/applied',  'getAppliedOffers');
            Route::get('/offers/saved',  'getSavedOffers');
            Route::post('/offers/{offerId}/apply',  'applyOffer');
            Route::post('/offers/{offerId}/save',  'toggleSave');
            Route::get('/offers/{offerId}/applicants',  'getOfferApplicatns');
            Route::post('/offers/{offerId}/applicants/{userId}/accept',  'acceptApplication');
            Route::post('/offers/{offerId}/applicants/{userId}/reject',  'rejectedApplication');
        });
    });


    Route::controller(OfferController::class)->group(function () {

        Route::get('/offers/{offerId}',  'show');
        Route::get('/offers',  'index');
    });
});
