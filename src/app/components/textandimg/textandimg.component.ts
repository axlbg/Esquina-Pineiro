import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textandimg',
  standalone: true,
  imports: [NgClass],
  templateUrl: './textandimg.component.html',
  styleUrl: './textandimg.component.css',
})
export class TextandimgComponent {
  @Input() img = '';
  @Input() txt = '';
  @Input() reverse = false;
}
