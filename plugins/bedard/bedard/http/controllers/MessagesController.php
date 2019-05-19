<?php namespace Bedard\Bedard\Http\Controllers;

use Bedard\Bedard\Models\Message;
use Illuminate\Routing\Controller;
use October\Rain\Database\ModelException;

class MessagesController extends Controller
{
    /**
     * Create message
     */
    public function store()
    {
        $data = input();

        try {
            $message = Message::create($data);
        } catch (ModelException $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        } catch (Exception $e) {
            return response()->json(['error' => 'Unknown'], 422);
        }

        return $message;
    }
}
