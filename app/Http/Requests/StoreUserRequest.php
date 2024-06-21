<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'image' => ['nullable', 'image', 'max:1024', 'mimes:jpg,jpeg,png,gif,webp,svg'],
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'digits:11', 'unique:' . User::class],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'status' => ['required', 'boolean'],
        ];
    }
}
