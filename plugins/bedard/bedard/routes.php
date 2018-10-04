<?php

use Bedard\Bedard\Middleware\CamelCase;

Route::prefix('api/bedard/bedard')
    ->middleware('web', 'Bedard\Bedard\Middleware\CamelCase')
    ->group(function() {

        //
        // skills
        //
        Route::get('skills', 'Bedard\Bedard\Http\Controllers\SkillsController@index');
    });