import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbc.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  //@Input() personajes: Personaje[] = [];
  
  public get personajes() : Personaje[] {
    return this.dbzService.personajes
  }
  
  constructor(private dbzService: DbzService) { }
}
