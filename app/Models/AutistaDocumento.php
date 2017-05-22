<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AutistaDocumento extends Model
{
 protected $table ='autista_documento';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id', 'nro_documento', 'data_emissione','data_scadenza','attivo','autista_id','documento_id'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

  
}
