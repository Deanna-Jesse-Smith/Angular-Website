import { Component, inject, signal } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Events } from '../model/events.type';
import { EventsItemComponent } from '../components/events-item/events-item.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventsItemComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  eventsService = inject(EventsService);
  eventsItems = signal<Array<Events>>([]);

  ngOnInit(): void {
    this.eventsService.getEventsFromApi().pipe(catchError(er => {
      console.log(er);
      throw er;
    })).subscribe(events => {
      this.eventsItems.set(events);
    })

    // console.log(this.eventsService.eventsItems);
    // this.eventsItems.set(this.eventsService.eventsItems);
  }

  trySort(): void {
    
  }
}
