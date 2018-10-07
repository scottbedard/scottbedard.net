<?php namespace Bedard\Bedard\Http\Controllers;

use Bedard\Bedard\Models\Skill;
use Illuminate\Routing\Controller;

class SkillsController extends Controller
{
    /**
     * List skills.
     */
    public function index()
    {
        return Skill::orderBy('orbit')
            ->with('logo')
            ->orderBy('sort_order', 'asc')
            ->get();
    }
}
