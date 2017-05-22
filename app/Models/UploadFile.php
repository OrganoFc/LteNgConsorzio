<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UploadFile extends Model
{
 protected $table ='upload_file';
   /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'id',
      'url',
      'nome',
      'modulo',
      'cartella',
      'id_fk_modulo' 
  ];
  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
  ];
}
