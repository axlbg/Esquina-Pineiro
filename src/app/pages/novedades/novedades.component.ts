import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './novedades.component.html',
  styleUrl: './novedades.component.css',
})
export class NovedadesComponent {
  img_background = 'assets/back_contacto.jpeg';
}
