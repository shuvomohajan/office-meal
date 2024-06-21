<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreMealRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'catering_id' => ['required', 'integer', Rule::exists('caterings', 'id')],
            'name' => ['required', 'string', 'max:255', Rule::unique('meals', 'name')],
            'price' => ['required', 'integer', 'max:255'],
            'description' => ['nullable', 'string', 'max:255'],
            'status' => ['boolean'],
        ];
    }
}
