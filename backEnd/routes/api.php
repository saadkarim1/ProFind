<?php

use App\Http\Controllers\OfferController;
use App\Http\Controllers\RecruiterController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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
        Route::get('/offers/{offerId}/applicants',  'getOfferApplicatns');
    });

    Route::controller(RecruiterController::class)->group(function () {
        Route::patch('/recruiter/{id}', 'updateRecruiter');
    });

    Route::post('/resume', [ResumeController::class, 'store']);
    Route::get('/resume', [ResumeController::class, 'getUserResumes']);
    Route::delete('/resume/{resumeId}', [ResumeController::class, 'deleteResume']);
});
