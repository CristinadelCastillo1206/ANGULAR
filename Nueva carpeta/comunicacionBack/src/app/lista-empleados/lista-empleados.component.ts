import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../_servicio/empleado.service';
import { Empleado } from '../_modelo/empleado';
import { CommonModule } from '@angular/common';
import { AltaEmpleadoComponent } from '../alta-empleado/alta-empleado.component';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [AltaEmpleadoComponent,RouterModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit {


  constructor(private servicio:EmpleadoService){}
  empleados:Empleado[] = [];

  ngOnInit(): void {
    this.servicio.empleadoCambio.subscribe(
      (data) => {this.empleados = data}
    )



    this.servicio.listar()
    .subscribe(datos => {
      this.empleados = datos;
    })
  }

  recibirAviso(listaActualizada:Observable<Empleado[]>){
    console.warn("regresa el padre ----")
    this.servicio.listar()
    .subscribe(datos =>{
      this.empleados =datos;
      console.log("entra");
    })
  }

}
