
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttivitaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('attivita', function (Blueprint $table) {
          $table->increments('id');
      });

      Schema::table('attivita', function (Blueprint $table) {
          $table->string('nome',10);
          $table->integer('calendario_id')->unsigned();
          $table->foreign('calendario_id')->references('id')->on('calendario');
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
        Schema::drop('attivita');
    }
}
