<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecruiterRequest extends FormRequest
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
            "email" => 'sometimes|email|unique:recruiters,email',
            "password" => 'sometimes|string|min:8',

            "company_name" => 'sometimes|string|max:40',
            "company_description" => 'sometimes|string|max:400',
            "company_website" => 'sometimes|string',
            "sector" => 'sometimes|',
            "company_logo" => 'sometimes|',
            "location" => 'sometimes|string',
        ];
    }
}
