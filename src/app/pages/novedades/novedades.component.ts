import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { EllasComponent } from '../../components/novedades/ellas/ellas.component';

import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [NgStyle, EllasComponent],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Inicio: invisible
        animate('500ms ease-in', style({ opacity: 1 })), // Fin: visible
      ]),
    ]),
  ],
})
export class NovedadesComponent {
  img_background = 'assets/back_contacto.jpeg';
}
