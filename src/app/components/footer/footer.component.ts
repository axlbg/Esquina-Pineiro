import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  columnas = [
    {
      titulo: 'CONTACTO',
      items: [
        { icon: 'bi bi-telephone-fill', text: '4600-3507', href: '/contacto' },
        {
          icon: 'bi bi-telephone-fill',
          text: '11 5600 2592',
          href: '/contacto',
        },
        {
          icon: 'bi bi-envelope-fill',
          text: 'esquinapineiro@gmail.com',
          href: '/contacto',
        },
      ],
    },
    {
      titulo: 'UBICACION',
      items: [
        {
          icon: '',
          text: 'Ministro Brin 2949, Lanús',
          href: '/contacto',
        },
      ],
    },
  ];
}
