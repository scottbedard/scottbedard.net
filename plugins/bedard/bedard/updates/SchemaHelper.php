<?php namespace Bedard\Bedard\Updates;

use Schema;

class SchemaHelper
{
    /**
     * Drop a column if it exists.
     * 
     * @return void
     */
    public static function dropColumn($table, $col)
    {
        if (Schema::hasTable($table) && Schema::hasColumn($table, $col) ) {
            Schema::table($table, function($table) use ($col) {
                $table->dropColumn($col);
            });
        }
    }
}