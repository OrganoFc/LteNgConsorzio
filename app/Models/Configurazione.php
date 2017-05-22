<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Configurazione extends Model
{
 protected $table ='configurazione';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id', 'nome', 'value'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];
}
