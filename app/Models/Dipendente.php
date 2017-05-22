<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dipendente extends Model
{
  protected $table ='dipendente';
    /**
    * The attributes that are mass assignable.
    *
    * @var array
    */
   protected $fillable = [
       'id',
       'nome',
       'cognome',
       'domicilio',
       'residenza',
       'telefono',
       'professione',
       'patente',
       'cat_patente',
       'inforza',
       'noninforza',
       'data_inforza',
       'data_noninforza',
       'azienda_id'
   ];
   /**
    * The attributes that should be hidden for arrays.
    *
    * @var array
    */
   protected $hidden = [
   ];

   public function getAllDocumenti(){
     return $this->belongsToMany('App\Models\Documento','autista_documento','dipendente_id','documento_id')->withPivot('id','nro_documento','attivo' ,'data_emissione','data_scadenza');
   }
}
