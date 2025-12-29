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
            "name" => 'sometimes|nullable|string|max:40',
            "email" => 'sometimes|nullable|email|unique:recruiters,email',
            "password" => 'sometimes|nullable|string|min:8',

            "company_name" => 'sometimes|nullable|string|max:40',
            "company_description" => 'sometimes|nullable|string|max:400',
            "company_website" => 'sometimes|nullable|string',
            "sector" => 'sometimes||nullable',
            "company_logo" => 'sometimes||nullable',
            "location" => 'sometimes|nullable|string',
        ];
    }
}
