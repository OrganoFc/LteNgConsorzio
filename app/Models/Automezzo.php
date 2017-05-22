<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Automezzo extends Model
{
   protected $table ='automezzi';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id', 
      'targa', 
      'marca',
      'modelo',
      'telaio',
      'intestato',
      'inforza',
      'venduta',
      'data_inforza',
      'data_venduta',
      'azienda_id'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];

  public function getAllInterventi(){
      return $this->hasMany('App\Models\Intervento');
    //return $this->belongsToMany('App\Models\Intervento');
  }

  public function getAllUtilizzo(){
      return $this->hasMany('App\Models\Utilizzo');
    //return $this->belongsToMany('App\Models\Intervento');
  }

    public function getAllPolizza(){
      return $this->hasMany('App\Models\Polizza','automezzo_id');
    //return $this->belongsToMany('App\Models\Intervento');
  }

    public function getAllSinistri(){
      return $this->hasMany('App\Models\Sinistro','automezzo_id');
    //return $this->belongsToMany('App\Models\Intervento');
  }

  public function getAllCollaudo(){
      return $this->hasMany('App\Models\Collaudo','automezzo_id');
    //return $this->belongsToMany('App\Models\Intervento');
  }
}
