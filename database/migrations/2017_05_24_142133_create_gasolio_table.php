<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGasolioTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('gasolio', function (Blueprint $table) {
        $table->increments('id');
    });

    Schema::table('gasolio', function (Blueprint $table) {
        $table->float('importo', 8, 2);
        $table->decimal('litri', 5, 2);
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
      Schema::drop('gasolio');
  }
}
