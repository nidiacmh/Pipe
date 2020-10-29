import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Nidia Carolina';
  nombre2: string = 'NiDIa CaroLiNA'

  personajes: string[] = ['Ironman'.'Spiderman'.'Thor','Loki','Groot'];

  Pi : number = Math.PI;

  porcentaje: number = 0.234;

  salario :  number = 1234.5;

  fecha : Date = new Date();

  idioma :string = 'es';
  videoUrl: string='https://www.youtube.com/embed/df0eH9mM9nU';

  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(()=>{
      resolve('llego la data');
    }, 4500);
  });

  heroe= {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle:'Primera',
      casa:20
    }
  };
}
