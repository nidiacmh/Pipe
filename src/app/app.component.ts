import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Nidia Carolina';

  personajes: string[] = ['Ironman'.'Spiderman'.'Thor','Loki','Groot'];

  Pi : number = Math.PI;

  porcentaje: number = 0.234;

  salario :  number = 1234.5;
}
