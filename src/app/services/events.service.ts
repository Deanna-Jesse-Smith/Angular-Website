import { inject, Injectable } from '@angular/core';
import { Events } from '../model/events.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  http = inject(HttpClient);

  // eventsItems: Array<Events> = [
  //   {
  //     eventId: 0,
  //     month: 'March',
  //     day: 17,
  //     title: 'Thursday Pasta Evening',
  //     descr: 'Join us for good company, pasta, and tea.',
  //   },
  //   {
  //     eventId: 1,
  //     month: 'March',
  //     day: 21,
  //     title: 'Scenic Drive',
  //     descr: 'A relaxed group outing through the Garden Route.',
  //   }
  // ]

  constructor() { 
    // this.eventsItems.sort((a, b) => a.day - b.day)
  }

  // eventSorter() {

  // }

  getEventsFromApi() {
    const url = '/eventsInfo.json';
    return this.http.get<Array<Events>>(url);
  }
}
