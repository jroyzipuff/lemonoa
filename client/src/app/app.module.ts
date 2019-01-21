import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components//calendar/calendar.component';
import { MapComponent } from './components//map/map.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotsService } from './services/data-provider.service';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MapComponent,
    ScheduleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),      ReactiveFormsModule
  ],
  providers: [SlotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
