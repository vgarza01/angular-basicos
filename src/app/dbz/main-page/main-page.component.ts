import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

 
   nuevo: Personaje = {
     nombre: 'Otro',
     poder: 2000
   }

    
   constructor() { }
}
