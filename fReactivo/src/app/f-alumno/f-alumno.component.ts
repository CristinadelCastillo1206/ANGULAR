import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../_servicio/alumnos.service';

@Component({
  selector: 'app-f-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './f-alumno.component.html',
  styleUrl: './f-alumno.component.css'
})
export class FAlumnoComponent implements OnInit  {
  empt_alumno!:Alumno;

  constructor({
    private alumnosServicio: AlumnosService){
      
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
