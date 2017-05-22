import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    
static  MESSAGETOAST:string='MESSAGE-TOAST';
    // Event store
     static urlapi="api"
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }
}

export class MessageCustom{
    
    constructor(
    public message:string,
    public title:string,
    public class_color:string
    ){}

}