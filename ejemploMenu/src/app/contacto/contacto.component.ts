import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  correo:string ='';
  nombre:string ='';
  telfono:string ='';
  comentario:string='';
 enviado:boolean = false;
  mensaje:string = '';

  enviarInfo(){
    this.enviado=true;
    this.mensaje='Sus datos se han enviado';
  }
}
