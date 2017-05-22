<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Polizza extends Model
{

protected $table ='polizza';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'cod_polizza', 
      'agenzia', 
      'data_registro',
      'scad_semestre_1',
      'scad_checked_1',
      'n_pagado_1',
      'scad_semestre_2',
      'scad_checked_2',
      'n_pagado_2',
      'note',
      'costo',
      'cop_incendio',
      'cop_furto',
      'cop_rca',
      'cop_casco',
      'automezzo_id'
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [];

   public function getAutomezzo(){
		//return $this->belongsTo('Usuario','id');
        return $this->belongsTo('App\Models\Automezzo');
	}
}
