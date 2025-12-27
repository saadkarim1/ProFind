<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => 'sometimes|string|max:40',
            "email" => 'sometimes|email|unique:users,email',
            "password" => 'sometimes|string|min:8',

            "about_me" => 'sometimes|string|max:400',
            "phone" => 'sometimes|string',
            "job" => 'sometimes|string',
            "location" => 'sometimes|string',

        ];
    }
}
