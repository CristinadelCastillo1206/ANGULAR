import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  nombre: string='';
  fechaNacimiento:any='';
  nacionalidad:string='Española';
  genero:string='';
  cMas:boolean=false;
  java:boolean=false;
  pythons:boolean=false;
  js:boolean=false;
  
  mostrarInfo():void {
    let mensaje:string=`Nombre ${this.nombre}
    fecha nacimiento :${this.fechaNacimiento}
    Nacionalidad :${this.nacionalidad}
    Genero :${this.genero}
    Lenguajes de programacion `;
    if(this.cMas){
      mensaje +='C++';
    }

    if(this.java){
      mensaje +='Java';
    }

    if(this.js){
      mensaje+='JS';
    }
    if(this.pythons){
      mensaje+='pythons';
    }

    alert(mensaje);

  }
   

  }

