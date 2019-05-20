<?php namespace Bedard\Bedard;

use Backend;
use System\Classes\PluginBase;

/**
 * Bedard Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'author'      => 'Scott Bedard',
            'description' => 'My personal code playground.',
            'icon'        => 'icon-leaf',
            'name'        => 'Bedard',
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'skills' => [
                'icon'        => 'icon-rocket',
                'label'       => 'Skills',
                'order'       => 400,
                'permissions' => ['bedard.bedard.*'],
                'url'         => Backend::url('bedard/bedard/skills'),
            ],
            'messages' => [
                'icon'        => 'icon-envelope-o',
                'label'       => 'Messages',
                'order'       => 500,
                'permissions' => ['bedard.bedard.*'],
                'url'         => Backend::url('bedard/bedard/messages'),
            ],
        ];
    }
}
