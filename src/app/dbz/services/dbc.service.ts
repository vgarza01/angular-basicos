import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "vegeta",
          poder: 7500
        }
      ];

      
      public get personajes() : Personaje[] {
          return [...this._personajes]
      }
      
  
    constructor() {
        console.log("Servicio Inicializado");        
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje)
    }
}