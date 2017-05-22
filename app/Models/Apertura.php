<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Apertura extends Model
{
   protected $table ='apertura_mese';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id', 'mese', 'anno','attivo'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

  
}
