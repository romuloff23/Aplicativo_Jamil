import { Observable } from "rxjs";
import { Mcmodel } from "../model/interfacesdb/intercm.model";

export class Mc {
    private mestre$:Observable<Mcmodel[]>
    private db;
    constructor(){

    }
    setDado(dados){
        this.db = dados;
    }
    getAll(): Observable<Mcmodel[]> {
        var cont = 0;
        for (const key in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, key)) {
              const element = this.db[key];
              this.mestre$[cont] = element;
              cont++;
            }
          }
          return this.mestre$;
    }
}