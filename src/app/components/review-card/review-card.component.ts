import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
})
export class ReviewCardComponent {
  @Input() name!: string;
  @Input() date!: string;
  @Input() reviewText!: string;
  @Input() stars!: number;
  @Input() icon!: string;
  @Input() isIconUrl: boolean = false;
}
