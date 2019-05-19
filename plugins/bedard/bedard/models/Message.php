<?php namespace Bedard\Bedard\Models;

use Model;

/**
 * Message Model
 */
class Message extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /**
     * @var string The database table used by the model.
     */
    public $table = 'bedard_bedard_messages';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable field
     */
    protected $fillable = [
        'subject',
        'body',
        'from',
    ];
    
    /**
     * @var array Validation rules
     */
    public $rules = [
        'from' => 'required|email',
        'body' => 'required',
    ];

    public $customMessages = [
        'body.required' => 'Please enter the message body',
        'from.email' => 'This doesn\'t look like a valid email address',
        'from.required' => 'Please enter a return email address',
    ];

}
