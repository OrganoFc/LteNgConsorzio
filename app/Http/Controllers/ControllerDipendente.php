<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dipendente;
class ControllerDipendente extends Controller
{
    public function search($string){
      //$data= Menu::where('parent_id',$id_parent);
      $data= Dipendente::find($string);
      if($data){

          return $this->crearRespuesta($data,200);
      }
      return $this->crearRespuesta('Dipendente non trovato',404); 

    }
}
