import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  correElectronico: string='';
  contrasena: string='';
  contrasenaRepetir:string='';
  correcto:boolean=false;

  verificar():void{
    if(this.contrasena==this.contrasenaRepetir){
      this.correcto=true;

    }else{
      this.correcto=false;
    }
  }


}
