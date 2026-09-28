import { Component, inject, signal } from '@angular/core';
import { Reviews } from '../model/reviews.type';
import { ReviewsService } from '../services/reviews.service';
import { ReviewItemComponent } from '../components/review-item/review-item.component';
import { catchError } from 'rxjs';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [ReviewItemComponent, ReactiveFormsModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviewService = inject(ReviewsService);
  reviewsItems = signal<Array<Reviews>>([]);

  ngOnInit(): void {
    this.reviewService.getReviewsFromApi().pipe(catchError(er => {
      console.log(er);
      throw er;
    })).subscribe(reviews => {
      this.reviewsItems.set(reviews);
    })


    // console.log(this.reviewService.reviewsItems);
    // this.reviewsItems.set(this.reviewService.reviewItems);
  }

  reviewForm = new FormGroup({
    name: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  })

  submit() {
    if (this.reviewForm.valid) {

    } else {
      
    }
  }

}
