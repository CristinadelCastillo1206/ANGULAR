import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleadodinamico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleadodinamico.component.html',
  styleUrl: './empleadodinamico.component.css'
})
export class EmpleadodinamicoComponent {
  genero:string="";
  generos:string[]=["Mujer","Hombre","Otros"];
  nacionalidad:string="";
  nacionalidades:string[]=["Española","Norteamericana","Rusa","Mexicana"];
  lenguajesProgramacion:string[]=["C++","Java","JS","Python"];
  cMas:boolean=false;
  js:boolean=false;
  java:boolean=false;
  python:boolean=false;

  mostarInfo():void{
    let mensaje:string=`Genero :${this.genero}
    Nacionalidad:${this.nacionalidad}
    Lenguajes de Programacion: ${this.lenguajesProgramacion}`
    alert(mensaje);
  }

}
