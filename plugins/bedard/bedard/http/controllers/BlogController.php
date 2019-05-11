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
        // select blog posts
        $query = Post::select([
                'id', 'title', 'slug', 'excerpt', 'published_at', 'published'
            ])
            ->orderBy('published_at', 'desc');

        // permit admins to see upublished posts
        if (!BackendAuth::getUser()) {
            $query->isPublished();
        }

        return $query->get();
    }
}
