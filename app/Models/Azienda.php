<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Azienda extends Model
{
   protected $table ='azienda';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */

  protected $fillable = [
      'id', 
      'nome', 
      'p_iva',
      'telefono',
      'deleted'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

}
