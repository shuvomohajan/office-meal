<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Catering extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'phone',
        'address',
        'email',
        'website',
        'status',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('logo')->singleFile();
    }

    public function meals(): HasMany
    {
        return $this->hasMany(Meal::class);
    }

    public function routines(): HasManyThrough
    {
        return $this->hasManyThrough(MealRoutine::class, Meal::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(CateringPayment::class);
    }
}
