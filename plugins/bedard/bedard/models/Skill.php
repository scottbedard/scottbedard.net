<?php namespace Bedard\Bedard\Models;

use Model;

/**
 * Skill Model
 */
class Skill extends Model
{
    use \October\Rain\Database\Traits\Sortable,
        \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'bedard_bedard_skills';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [
        'created_at',
        'name',
        'notes',
        'orbit',
        'retired_at',
        'sort_order',
        'updated_at',
    ];

    /**
     * Relationships
     */
    public $attachOne = [
        'logo' => 'System\Models\File'
    ];

    /**
     * @var array Validation rules
     */
    public $rules = [
        'name' => 'required',
        'orbit' => 'required',
    ];
    
    /**
     * Show only retired skills.
     */
    public function scopeRetired($query)
    {
        return $query->whereNotNull('retired_at');
    }
}
