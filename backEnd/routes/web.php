<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecruiterController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(
    function () {
        Route::controller(UserController::class)->group(function () {
            Route::post('register', 'register');
            Route::post('login', 'login');
            Route::post('logout', 'logout');
        });
        Route::controller(RecruiterController::class)->group(function () {

            Route::post('logout/recruiter', 'logoutRecruiter');
            Route::post('register/recruiter', 'registerRecruiter');
            Route::post('login/recruiter', 'loginRecruiter');
        });
    }
);
