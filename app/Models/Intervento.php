<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Intervento extends Model
{

protected $table ='interventi';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id','nota' ,'km', 'intervento','data_intervento','automezzo_id'
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
