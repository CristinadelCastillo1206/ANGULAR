import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FormsModule,HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  dato:string="";

}
