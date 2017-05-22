<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDipendenteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('dipendente', function (Blueprint $table) {
          $table->increments('id');
      });

      Schema::table('dipendente', function (Blueprint $table) {
          $table->string('nome',25);
          $table->string('cognome',25);
          $table->string('domicilio',100);
          $table->string('residenza',100);
          $table->string('telefono')->nullable();
          $table->string('professione',20);
          $table->string('patente',15)->nullable();
          $table->string('cat_patente',5)->nullable();
          $table->date('data_inforza')->nullable();
          $table->date('data_noninforza')->nullable();
          $table->boolean('inforza')->default(false);
          $table->boolean('noninforza')->default(false);

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
        Schema::drop('dipendente');
    }
}
