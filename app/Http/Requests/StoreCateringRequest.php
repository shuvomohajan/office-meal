<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCateringRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'logo' => ['nullable', 'image', 'max:1024', 'mimes:jpeg,png,gif,webp,jpg,svg'],
            'meal_menu' => ['nullable', 'image', 'max:1024', 'mimes:jpeg,png,gif,webp,jpg,svg'],
            'name' => ['required', 'string', 'max:255', Rule::unique('caterings', 'name')],
            'phone' => ['required', 'numeric', 'digits:11'],
            'address' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'website' => ['nullable', 'url', 'max:255'],
            'status' => ['boolean'],
        ];
    }
}
