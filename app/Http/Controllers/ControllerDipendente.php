<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Dipendente;
class ControllerDipendente extends Controller
{
    public function search($id_string){
      //$data= Menu::where('parent_id',$id_parent);
      //return $this->crearRespuesta($id_string,200);
      if(is_numeric($id_string)){
        //return $this->crearRespuesta('Dipendente non numero'. $id_string,404);
        $data= Dipendente::find($id_string);
      }
      else {
        //return $this->crearRespuesta('Dipendente testo'. $id_string,404);
        $data= Dipendente::where(DB::raw("UPPER(CONCAT(dipendente.cognome, ' ', dipendente.nome))"), "like", DB::raw("UPPER('%$id_string%')"))->get();
      }
      if($data){
          return $this->crearRespuesta($data,200);
      }
      return $this->crearRespuesta('Dipendente non trovato',404);
    }
}
