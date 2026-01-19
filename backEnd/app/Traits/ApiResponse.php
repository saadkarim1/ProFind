<?php

namespace App\Traits;

trait ApiResponse
{

    public function apiResponse($data = null, string $message, $errors = null, int $status = 200)
    {

        return response()->json(["message" => $message, "errors" => $errors, "data" => $data, "status" => $status], $status);
    }


}
