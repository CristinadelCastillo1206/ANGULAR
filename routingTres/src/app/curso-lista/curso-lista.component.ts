import { Component, OnInit } from '@angular/core';
import { Curso } from '../_modelo/curso';
import { CursosService } from '../_servicio/cursos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-curso-lista',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './curso-lista.component.html',
  styleUrl: './curso-lista.component.css'
})
export class CursoListaComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(public cursoService: CursosService,
    private route:ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    let id = idParam ? +idParam : 0;
    this.devolverCursos();
  }

  devolverCursos(){
    return this.cursos = this.cursoService.cursos;
  }

  modificar(id: number) {
    //Buscamos el curso correspondiente al ID en la lista de cursos
    let curso = this.cursos.find(c => c._id == id);

    if (curso) {
      // Si encontramos el curso, redirigimos al usuario a la página de modelo
      this.router.navigate(['/curso', id]);
    }else {
      //Si no encontramos el curso, mostramos un mensaje de error
      alert('No se ha encontrado el curso con ID' + id);
    }

  }
      
    
}
