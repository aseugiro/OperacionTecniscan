import { Injectable} from "@angular/core";
import {HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import {Global} from './global';

@Injectable()
export class OperacionService{

    public url:string;

    constructor(  
        private _http:HttpClient
    ){
      this.url=Global.url;
    }

    pruebas(){
        return "soy el servicio de articulos" ;
    }


    getResultado(operador:String,op1:BigInt,op2:BigInt):Observable<any>{
        return this._http.get(this.url+operador,{
            params: {
                operador1: op1.toString(),
                operador2: op2.toString()
              },
        })
    }
}