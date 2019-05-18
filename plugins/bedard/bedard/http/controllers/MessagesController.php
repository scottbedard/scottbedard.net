<?php namespace Bedard\Bedard\Http\Controllers;

use Bedard\Bedard\Models\Message;
use Illuminate\Routing\Controller;

class MessagesController extends Controller
{
    /**
     * Create message
     */
    public function store()
    {
        $data = input();
        $message = Message::create($data);

        return $message;
    }
}
