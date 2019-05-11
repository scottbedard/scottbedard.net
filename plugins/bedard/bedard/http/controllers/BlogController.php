<?php namespace Bedard\Bedard\Http\Controllers;

use BackendAuth;
use RainLab\Blog\Models\Post;
use Illuminate\Routing\Controller;

class BlogController extends Controller
{
    /**
     * List.
     */
    public function index()
    {
        $query = Post
            ::select('id', 'title', 'slug', 'excerpt', 'published_at', 'published')
            ->orderBy('published_at', 'desc');

        if (!BackendAuth::getUser()) {
            $query->isPublished();
        }

        return $query->get();
    }

    /**
     * Show.
     */
    public function show($slug)
    {
        $query = Post::whereSlug($slug);

        if (!BackendAuth::getUser()) {
            $query->isPublished();
        }

        return $query->firstOrFail();
    }
}
