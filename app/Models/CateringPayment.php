<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CateringPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'catering_id',
        'payment_method',
        'amount',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function catering()
    {
        return $this->belongsTo(Catering::class);
    }
}
