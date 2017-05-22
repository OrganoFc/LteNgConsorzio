<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utilizzo extends Model
{

protected $table ='utilizzi';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id','nome', 'data_utilizzo', 'data_rientro','km_ini','km_fine','automezzo_id'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [];
}
