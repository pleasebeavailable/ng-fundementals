import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent;

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
