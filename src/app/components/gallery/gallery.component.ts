import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  photos = [
    { url: 'assets/fotos/1.jpg', alt: 'Foto 1' },
    { url: 'assets/fotos/2.jpg', alt: 'Foto 2' },
    { url: 'assets/fotos/3.jpg', alt: 'Foto 3' },
    { url: 'assets/fotos/4.jpg', alt: 'Foto 4' },
    { url: 'assets/fotos/5.jpg', alt: 'Foto 5' },
    { url: 'assets/fotos/6.jpg', alt: 'Foto 6' },
    { url: 'assets/fotos/7.jpg', alt: 'Foto 7' },
    { url: 'assets/fotos/8.jpg', alt: 'Foto 8' },
  ];
}
