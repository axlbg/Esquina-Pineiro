import { Component } from '@angular/core';
import { ScreenOnUseDirective } from '../../directives/screen-on-use.directive';
import { TextandimgComponent } from '../../components/textandimg/textandimg.component';
import { ReviewCarouselComponent } from '../../components/review-carousel/review-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScreenOnUseDirective, TextandimgComponent, ReviewCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  img_fondo = 'assets/logo2.png';
  img_news = 'assets/novedad.jpg';

  img_carta = 'assets/carta.jpg';
  txt_carta =
    'Nuestra carta cuenta con el café más rico y muchas opciones dulces y saladas.';

  img_compartir = 'assets/compartir.jpg';
  txt_compartir =
    'Vení a compartir un ratito de tu vida, en nuestro pedacito de mundo.';
}
