import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {contentHeaders} from "./headers";

@Injectable()
export class ApiService {
    //debemos acostumbranos a que  el api no este junto a los ficheros
  protected urlBase: string = '/api/vetture'; //url web api

  //options = new RequestOptions({ headers: contentHeaders });
   private headers = new Headers({'Content-Type': 'application/json'});
  //reclamar la dependencia sobre http
  //se registra en la raiz, pues se le supone un uso comùn a varios objetos
  constructor(protected http: Http) { }

    /*getData(): Promise<any[]>{
        return this.http.get(this.urlBase)
        .toPromise()
        .then(response=>response.json().data as any[])
        .catch(this.handleError)
    }*/

    getService (): Observable<any[]> {
        return this.http.get(this.urlBase)
                        .map(this.extractData)
                        .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleErrorObservable (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
            return Observable.throw(errMsg);
    }

    getVettura(id: number): Promise<any> {
        const url = `${this.urlBase}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as any)
            .catch(this.handleError);
    }
    
    delete(id: number): Promise<void> {
        const url = `${this.urlBase}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(vettura: any): Promise<any> {
        return this.http
            .post(this.urlBase, JSON.stringify({vettura}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }   

    update(model,id): Promise<any> {
        const url = `${this.urlBase}/${id}`;
        return this.http
            .put(url, JSON.stringify(model), {headers: this.headers})
            .toPromise()
            .then(() => model)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

export class Vettura {

    //modificado:boolean;
    public id:number=0;
    public nome:string;
    public targa:string;
    public marchio:string;
    public modello:string;
    public tipologia:string='';
    //constructor(public id?,public documento?,public active?){
        constructor(){   }
 
}
