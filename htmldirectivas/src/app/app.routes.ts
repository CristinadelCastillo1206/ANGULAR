import { Routes } from '@angular/router';
import { ArmarpcComponent } from './armarpc/armarpc.component';
import { ReservaVuelosComponent } from './reserva-vuelos/reserva-vuelos.component';
import { EmpleadodinamicoComponent } from './empleadodinamico/empleadodinamico.component';

export const routes: Routes = [

    {path:'arma',component:ArmarpcComponent},
    {path:'reserva',component:ReservaVuelosComponent},
    {path:'empleadoo',component:EmpleadodinamicoComponent}
];
