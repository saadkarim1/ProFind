<?php

namespace App\Http\Controllers;

use App\Http\Resources\CompanyResource;
use App\Models\Company;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $companies = Company::all();
        return $this->successResponse(CompanyResource::collection($companies));
    }
}
