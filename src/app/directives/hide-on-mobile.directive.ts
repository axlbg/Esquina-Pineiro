import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHideOnMobile]',
  standalone: true,
})
export class HideOnMobileDirective {
  @Input('appHideOnMobile') a: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;

    // Si la pantalla es pequeña, oculta el elemento
    if (width <= 768) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
    }
  }

  ngOnInit() {
    this.onResize(); // Ejecuta la lógica al cargar la página
  }
}
