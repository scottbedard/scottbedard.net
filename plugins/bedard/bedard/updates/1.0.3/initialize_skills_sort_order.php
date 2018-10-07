<?php namespace Bedard\Bedard\Updates;

use Bedard\Bedard\Models\Skill;
use Schema;
use October\Rain\Database\Updates\Migration;

class InitializeSkillsSortOrder extends Migration
{
    public function up()
    {
        Skill::all()->each(function($skill) {
            $skill->sort_order = $skill->id;
            $skill->save();
        });
    }

    public function down()
    {
    }
}
