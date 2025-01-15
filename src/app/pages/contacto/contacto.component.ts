import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Inicio: invisible
        animate('500ms ease-in', style({ opacity: 1 })), // Fin: visible
      ]),
    ]),
  ],
})
export class ContactoComponent {
  img_background = 'assets/back_contacto.jpeg';
}
