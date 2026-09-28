import { inject, Injectable } from '@angular/core';
import { Reviews } from '../model/reviews.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  http = inject(HttpClient);
  // reviewItems: Array<Reviews> = [
  //   {
  //     reviewId: 0,
  //     reviewContent: 'Town and About has been a true blessing! My driver is always punctual, friendly, and goes the extra mile. I love our chats on the way to my appointments. It\'s made a huge difference to my independence.',
  //     reviewClient: 'Mrs. Elanor Vance'
  //   },
  //   {
  //     reviewId: 1,
  //     reviewContent: 'Town and About has been a true blessing! My driver is always punctual, friendly, and goes the extra mile. I love our chats on the way to my appointments. It\'s made a huge difference to my independence.',
  //     reviewClient: 'Mrs. Elanor Vance'
  //   }
  // ]

  constructor() { }

  getReviewsFromApi() {
    const url = '/clientReviews.json';
    return this.http.get<Array<Reviews>>(url);
  }
}
