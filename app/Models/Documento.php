<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
 protected $table ='documenti';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id', 'nome', 'attivo'
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];
  
  // get(api/autisti)
  public function getAllAutisti(){
    return $this->belongsToMany('App\Models\Autista')->withPivot('nro_documento', 'data_emissione','data_scandenza');
  }


   /*public function getFiles()
    {
        return $this->hasManyThrough('App\Models\AutistaDocumento','App\Models\UploadFile');
    }*/

}
