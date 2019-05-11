<?php namespace Bedard\Bedard\Http\Controllers;

use RainLab\Blog\Models\Post;
use Illuminate\Routing\Controller;

class BlogController extends Controller
{
    /**
     * List.
     */
    public function index()
    {
        return 'Hello';
    }
}
