import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CalendarComponent} from 'angular2-fullcalendar/src/calendar/calendar';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './component/appheader/appheader.component';
import { AppfooterComponent } from './component/appfooter/appfooter.component';
import { AppmenuComponent } from './component/appmenu/appmenu.component';
import { AppsettingsComponent } from './component/appsettings/appsettings.component';
import { AttivitaComponent } from './module/attivita/attivita.component';
import { PresenzaComponent } from './module/presenza/presenza.component';
import { ChilometraggioComponent } from './module/chilometraggio/chilometraggio.component';
import { GasolioComponent } from './module/gasolio/gasolio.component';

import { WebApiObservableService } from './services/web-api-observable.service';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    CalendarComponent,
    AttivitaComponent,
    PresenzaComponent,
    ChilometraggioComponent,
    GasolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WebApiObservableService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
