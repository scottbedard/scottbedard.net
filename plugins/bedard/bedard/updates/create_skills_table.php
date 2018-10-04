<?php namespace Bedard\Bedard\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateSkillsTable extends Migration
{
    public function up()
    {
        Schema::create('bedard_bedard_skills', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->text('notes');
            $table->unsignedTinyInteger('orbit')->default(0);
            $table->timestamp('retired_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bedard_bedard_skills');
    }
}
