import { Component, input } from '@angular/core';
import { Events } from '../../model/events.type';

@Component({
  selector: 'app-events-item',
  standalone: true,
  imports: [],
  templateUrl: './events-item.component.html',
  styleUrl: './events-item.component.css'
})
export class EventsItemComponent {
  events = input.required<Events>();
}
