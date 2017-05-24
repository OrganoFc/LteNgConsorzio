<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChilometraggioTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('chilometraggio', function (Blueprint $table) {
        $table->increments('id');
    });

    Schema::table('chilometraggio', function (Blueprint $table) {
        $table->integer('kmi')->nullable();
        $table->integer('kmf')->nullable();

        $table->integer('dipendente_id')->unsigned();
        $table->foreign('dipendente_id')->references('id')->on('dipendente');

        $table->integer('automezzo_id')->unsigned();
        $table->foreign('automezzo_id')->references('id')->on('automezzo');
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
      Schema::drop('chilometraggio');
  }
}
