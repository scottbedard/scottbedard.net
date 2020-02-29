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
        // github
        //
        Route::get('github/contributions', 'Bedard\Bedard\Http\Controllers\GitHubController@contributions');

        //
        // messages
        //
        Route::post('messages', 'Bedard\Bedard\Http\Controllers\MessagesController@store');

        //
        // skills
        //
        Route::get('skills', 'Bedard\Bedard\Http\Controllers\SkillsController@index');
    });