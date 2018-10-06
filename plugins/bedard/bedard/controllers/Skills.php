<?php namespace Bedard\Bedard\Controllers;

use BackendMenu;
use Backend\Classes\Controller;

/**
 * Skills Back-end Controller
 */
class Skills extends Controller
{
    public $implement = [
        'Backend.Behaviors.FormController',
        'Backend.Behaviors.ListController',
        'Backend.Behaviors.ReorderController',
    ];

    public $formConfig = 'config_form.yaml';
    public $listConfig = 'config_list.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public function __construct()
    {
        parent::__construct();

        BackendMenu::setContext('Bedard.Bedard', 'bedard', 'skills');
    }
}
