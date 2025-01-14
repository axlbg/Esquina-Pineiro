import { Component } from '@angular/core';
import { ScreenOnUseDirective } from '../../directives/screen-on-use.directive';
import { TextandimgComponent } from '../../components/textandimg/textandimg.component';
import { ReviewCarouselComponent } from '../../components/review-carousel/review-carousel.component';
import { HorariosComponent } from '../../components/horarios/horarios.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ScreenOnUseDirective,
    TextandimgComponent,
    ReviewCarouselComponent,
    HorariosComponent,
    NgStyle,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  img_background = 'assets/background.jpg';

  img_fondo = 'assets/logo2.png';
  img_news = 'assets/novedad.jpg';

  img_carta = 'assets/carta.jpg';
  txt_carta =
    'Nuestra carta cuenta con el café más rico y muchas opciones dulces y saladas.';

  img_compartir = 'assets/compartir.jpg';
  txt_compartir =
    'Vení a compartir un ratito de tu vida, en nuestro pedacito de mundo.';

  str_horarios = 'Lun a Vier 07.30 a 21.00hs';
  str_horarios2 = 'Sab y Dom de 08.00 a 21.00hs';
}
