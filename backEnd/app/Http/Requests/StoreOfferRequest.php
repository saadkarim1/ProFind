<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOfferRequest extends FormRequest
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
            "title" => 'required|string|max:255',
            "description" => 'required|string|max:400',
            "location" => 'required|string',
            "duration" => "required|string",
            "offer_type" => "required|string|in:remote,freelance,part time,full time",
            "offer_category" => "required|string|in:technology,engineering,sales and marketing,full time, finance and legal",
            "salary" => "sometimes|numeric",
            "email_to_apply" => "sometimes|string",

        ];
    }
}
