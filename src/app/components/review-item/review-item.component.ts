import { Component, inject, input, signal } from '@angular/core';
import { Reviews } from '../../model/reviews.type';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [],
  templateUrl: './review-item.component.html',
  styleUrl: './review-item.component.css'
})
export class ReviewItemComponent {
  reviews = input.required<Reviews>();
}
