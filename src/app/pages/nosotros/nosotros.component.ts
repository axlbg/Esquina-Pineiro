import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [NgStyle, GalleryComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
})
export class NosotrosComponent {
  img_background = 'assets/back_contacto.jpeg';
}
