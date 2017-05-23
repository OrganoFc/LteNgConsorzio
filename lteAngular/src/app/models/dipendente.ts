export class Dipendente {
  public id: number;
  public nome: string;
  public cognome: string;
  public domicilio: string;
  public residenza: string;
  public telefono: string;
  public email: string;
  public professione: string;
  public inforza:boolean=false;
  public noninforza:boolean=false;
  public edit:boolean;
  public patente: string;
  public cat_patente: string;
  public data_inforza:boolean;
  public data_noninforza:boolean;
  public azienda_id: number=1;

}
