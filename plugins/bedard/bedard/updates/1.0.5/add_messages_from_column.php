<?php namespace Bedard\Bedard\Updates;

use Bedard\Bedard\Updates\SchemaHelper;
use Schema;
use October\Rain\Database\Updates\Migration;

class AddMessagesFromColumn extends Migration
{
    public function up()
    {
        Schema::table('bedard_bedard_messages', function($table)
        {
            $table->string('from')->index();
        });
    }

    public function down()
    {
        SchemaHelper::dropColumn('bedard_bedard_messages', 'from');
    }
}
