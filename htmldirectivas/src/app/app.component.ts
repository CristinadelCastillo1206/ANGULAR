import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadodinamicoComponent } from './empleadodinamico/empleadodinamico.component';
import { ArmarpcComponent } from './armarpc/armarpc.component';
import { ReservaVuelosComponent } from './reserva-vuelos/reserva-vuelos.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadodinamicoComponent,ArmarpcComponent,ReservaVuelosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'htmldirectivas';
}
