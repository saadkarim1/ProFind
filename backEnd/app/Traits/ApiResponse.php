<?php

namespace App\Traits;

trait ApiResponse
{
    public function successResponse($data = null, string $message = 'Success', int $status = 200)
    {

        return response()->json(["success" => true, "message" => $message, "data" => $data, "status" => $status], $status);
    }


    public function errorResponse($errors = null, string $message = 'Failed', int $status = 400)
    {

        return response()->json(["success" => false, "message" => $message, "errors" => $errors, "status" => $status], $status);
    }
}
