import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  EventsListComponent, EventService, EventDetailsComponent, CreateEventComponent, EventThumbnailComponent, EventRouteActivatorService
} from './events/index';

import {AppComponent} from './app.component';
import {NavbarComponent} from './nav/navbar/navbar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, ToastrService, EventRouteActivatorService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
}
