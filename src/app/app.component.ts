import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Christopher";
  nombre2 = "cHRisTOpher aleXAnder aEdo piZARRo"
  contrasenaactiva=true;
  arreglo = [1,2,3,4,5,6,7,8,9,10]

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe={
    nombre:"logan",
    clave: "wolverine",
    edad:500,
    direccion:{
      calle:"primera",
      numero:1234
    }
  }

  valordePromesa = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('llego la data!'),3500);

  })

  fecha = new Date();

  video = "M7lc1UVf-VE";
}
