<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePresenzaTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('presenza', function (Blueprint $table) {
        $table->increments('id');
    });

    Schema::table('presenza', function (Blueprint $table) {
        $table->date('data_presenza')->nullable();
        $table->boolean('cancelato')->default(false);
        $table->string('tipo_presenza',20)->nullable();
        $table->string('nota',250)->nullable();
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
      Schema::drop('presenza');
  }
}
