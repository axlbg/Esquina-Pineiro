import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { slideInAnimation } from '../../animations';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterOutlet],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Inicio: invisible
        animate('500ms ease-in', style({ opacity: 1 })), // Fin: visible
      ]),
    ]),
    slideInAnimation,
  ],
})
export class NovedadesComponent {
  img_background = 'assets/back_contacto.jpeg';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
