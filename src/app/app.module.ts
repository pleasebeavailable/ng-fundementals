import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {
  CreateSessionComponent,
  EventsListComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventThumbnailComponent,
  EventRouteActivatorService
} from './events/index';

import {AppComponent} from './app.component';
import {NavbarComponent} from './nav/navbar/navbar.component';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [
    EventService, ToastrService, EventRouteActivatorService, AuthService,
    // {
    //   provide: 'canDeactivateCreateEvent',
    //   useValue: checkDirtyState
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (false) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
}
