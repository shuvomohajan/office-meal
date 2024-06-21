<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class User extends Authenticatable implements HasMedia
{
    use HasFactory;
    use Notifiable;
    use InteractsWithMedia;

    public const role = [
        'SUPER_ADMIN' => 1,
        'MANAGER' => 2,
        'USER' => 3,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'role_id',
        'name',
        'phone',
        'email',
        'password',
        'status'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image')->singleFile();
    }

    public function meals(): BelongsToMany
    {
        return $this->belongsToMany(Meal::class);
    }

    public function userPayments(): HasMany
    {
        return $this->hasMany(UserPayment::class);
    }

    public function cateringPayments(): HasMany
    {
        return $this->hasMany(CateringPayment::class);
    }

    public function managerHistories(): HasMany
    {
        return $this->hasMany(ManagerHistory::class);
    }
}
