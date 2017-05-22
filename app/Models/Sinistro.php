<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sinistro extends Model
{

protected $table ='sinistri';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id','n_sinistro' ,'data_sinistro', 'autista','automezzo_id'
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
