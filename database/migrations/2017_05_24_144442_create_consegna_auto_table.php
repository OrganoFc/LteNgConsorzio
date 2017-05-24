<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConsegnaAutoTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('consegna_auto', function (Blueprint $table) {
        $table->increments('id');
    });

    Schema::table('consegna_auto', function (Blueprint $table) {
        $table->string('nota', 250);
        $table->string('motivo', 20);

        $table->integer('automezzo_id')->unsigned();
        $table->foreign('automezzo_id')->references('id')->on('automezzo');
        $table->integer('dipendente_id')->unsigned();
        $table->foreign('dipendente_id')->references('id')->on('dipendente');

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
      Schema::drop('consegna_auto');
  }
}
