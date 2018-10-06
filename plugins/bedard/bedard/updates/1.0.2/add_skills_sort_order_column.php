<?php namespace Bedard\Bedard\Updates;

use Bedard\Bedard\Updates\SchemaHelper;
use Schema;
use October\Rain\Database\Updates\Migration;

class AddSkillsSortOrderColumn extends Migration
{
    public function up()
    {
        Schema::table('bedard_bedard_skills', function($table)
        {
            $table->integer('sort_order')->unsigned()->default(0);
        });
    }

    public function down()
    {
        SchemaHelper::dropColumn('bedard_bedard_skills', 'sort_order');
    }
}
