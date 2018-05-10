import { Component } from '@angular/core';
import { deflateRaw } from 'zlib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'John López';
  nombre2 = 'john albErto loPez hernandez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a:number = 0.234;
  salario: number = 1234.5;
  producto = {
    nombre: 'Pizza',
    precio: 2500,
    categoria: 'Emsambles',
    ingredientes: {
      queso: 'Mozarella',
      jamon: 'Serrano'
    }
  };
  valorDePromesa = new Promise( (resolve, reject) => {
      setTimeout( () => resolve('Llego la data!'), 3500);
  });
  fecha = new Date();
  video = 'lLOcKqAgcmI';
  activar: boolean = true;
}
