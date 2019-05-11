<?php

use Bedard\Bedard\Middleware\CamelCase;

Route::prefix('api/bedard/bedard')
    ->middleware('web', 'Bedard\Bedard\Middleware\CamelCase')
    ->group(function() {

        //
        // blog
        //
        Route::get('blog', 'Bedard\Bedard\Http\Controllers\BlogController@index');
        Route::get('blog/{slug}', 'Bedard\Bedard\Http\Controllers\BlogController@show');

        //
        // skills
        //
        Route::get('skills', 'Bedard\Bedard\Http\Controllers\SkillsController@index');
    });