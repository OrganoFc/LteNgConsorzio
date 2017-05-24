<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAutomezzoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('automezzo', function (Blueprint $table) {
            $table->increments('id');
        });

        Schema::table('automezzo', function (Blueprint $table) {
            $table->string('targa',10);
            $table->string('marca',30);
            $table->string('modelo',30);
            $table->string('telaio',50);
            $table->boolean('inforza')->default(false);
            $table->boolean('venduta')->default(false);
            $table->date('data_inforza')->nullable();
            $table->date('data_venduta')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('automezzo');
    }
}
