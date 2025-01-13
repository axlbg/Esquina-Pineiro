import { Component } from '@angular/core';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-review-carousel',
  standalone: true,
  imports: [ReviewCardComponent, NgFor],
  templateUrl: './review-carousel.component.html',
  styleUrl: './review-carousel.component.css',
})
export class ReviewCarouselComponent {
  reviews = [
    {
      name: 'Maria Sol Capece',
      date: '21/12/2024',
      reviewText:
        'Todo rico y fresco, buenos precios, Mesera amable, ambiente luminoso y con aire acondicionado.',
      stars: 5,
      icon: 'https://lh3.googleusercontent.com/a-/ALV-UjVbJ0vYB9rtd9meUHSZ3gwMgRy8ZkbVj1fhWMzLYXbf2uoW-m1G=w66-h66-p-rp-mo-ba2-br100',
      isIconUrl: true,
    },
    {
      name: 'Camila',
      date: '10/10/2024',
      reviewText:
        'Fuimos a almorzar con mi mamá, pedimos estos sánguches de pollo calientes que estaban riquísimos, recomendamos! La atención también muy buena, justo agarramos el cambio de turno y tardaron bastante en traernos la comida pero bueno fue por eso, todas las veces q fui me atendieron súper',
      stars: 4,
      icon: 'https://lh3.googleusercontent.com/a-/ALV-UjXM853dB6AkNgak2LJjDdJ9XYKZWlslWj_uxTzOfRIeD_ileNumYw=w40-h40-p-rp-mo-ba2-br100',
      isIconUrl: true,
    },
    {
      name: 'Ignacio Javier Gjinovich Romero',
      date: '30/05/2024',
      reviewText:
        'Es un lugar muy lindo para ir a desayunar, merendar, para lo que quieras.  Muy buen servicio, me atendió  Leandro con muy buena atención!!!!.',
      stars: 5,
      icon: 'https://lh3.googleusercontent.com/a-/ALV-UjWsuFWBw4EXvpixNfeNJFeosV5GkxaqT_n_s9QVzW0nj9DVnht_HA=w40-h40-p-rp-mo-ba6-br100',
      isIconUrl: true,
    },

    {
      name: 'Alejandro Carbone',
      date: '13/01/2025',
      reviewText:
        'La relación precio calidad es de inigualable, todo es muy rico, la atención es buena aunque en ocasiones se encuentran desbordados. Siempre se come muy rico',
      stars: 5,
      icon: 'A',
      isIconUrl: false,
    },
  ];

  currentSlide = 0;

  ngOnInit(): void {
    // Duplica el arreglo para crear el efecto infinito
    this.reviews = [...this.reviews, ...this.reviews];

    // Escucha los cambios de tamaño de la ventana
    window.addEventListener('resize', () => {
      this.updateCarouselPosition(); // Actualiza la posición cuando cambia el tamaño de la pantalla
    });
  }

  prevSlide(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;

    if (this.currentSlide === 0) {
      this.currentSlide = this.reviews.length / 2; // Salta al final original
      track.style.transition = 'none'; // Sin animación
      this.updateCarouselPosition();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out'; // Rehabilita la animación
        this.currentSlide--;
        this.updateCarouselPosition();
      }, 0);
    } else {
      this.currentSlide--;
      this.updateCarouselPosition();
    }
  }

  nextSlide(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;

    if (this.currentSlide === this.reviews.length / 2 - 1) {
      this.currentSlide = -1; // Salta al inicio original
      track.style.transition = 'none'; // Sin animación
      this.updateCarouselPosition();
      setTimeout(() => {
        track.style.transition = 'transform 0.5s ease-in-out'; // Rehabilita la animación
        this.currentSlide++;
        this.updateCarouselPosition();
      }, 0);
    } else {
      this.currentSlide++;
      this.updateCarouselPosition();
    }
  }

  private updateCarouselPosition(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const visibleItems = window.innerWidth <= 768 ? 1 : 3; // 1 en móvil, 3 en desktop
    const itemWidthPercentage = 100 / visibleItems; // Ancho dinámico
    track.style.transform = `translateX(-${
      this.currentSlide * itemWidthPercentage
    }%)`;
  }
}
