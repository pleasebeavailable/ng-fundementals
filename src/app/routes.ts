import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/event-form/create-event/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent
  },
  {
    path: 'events', component: EventsListComponent
  },
  {
    path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]
  },
  {

    path: '404', component: Error404Component
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  }
];