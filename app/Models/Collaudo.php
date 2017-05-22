<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collaudo extends Model
{
   protected $table ='collaudo';


   public $timestamps = false;
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */

  protected $fillable = [
      'id', 
      'data',
      'scadenza',
      'nota',
      'automezzo_id'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

    public function getAutomezzo(){
		//return $this->belongsTo('Usuario','id');
        return $this->belongsTo('App\Models\Automezzo');
	}
}