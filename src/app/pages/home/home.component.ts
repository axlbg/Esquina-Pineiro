import { Component } from '@angular/core';
import { ScreenOnUseDirective } from '../../directives/screen-on-use.directive';
import { TextandimgComponent } from '../../components/textandimg/textandimg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScreenOnUseDirective, TextandimgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  img_fondo = 'assets/logo2.jpg';
  img_news = 'assets/novedad.jpg';

  img_carta = 'assets/carta.jpg';
  txt_carta =
    'Sumamos lattes saborizados, seis blends de té en hebras, especiales ';

  img_compartir = 'assets/compartir.jpg';
  txt_compartir =
    'Vení a compartir un ratito de tu vida, en nuestro pedacito de mundo.';
}
