import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appScreenOnUse]',
  standalone: true,
})
export class ScreenOnUseDirective {
  @Input('appScreenOnUse') a: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    const width = window.innerWidth;

    this.renderer.setStyle(this.el.nativeElement, 'margin', 'auto');
    if (width > 1024) {
      this.renderer.setStyle(this.el.nativeElement, 'width', '80%');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    }
  }

  ngOnInit() {
    this.onResize(); // Ejecuta la lógica al cargar la página
  }
}
