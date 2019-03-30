import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotsService } from './services/data-provider.service';
import { NgxLoadingModule } from 'ngx-loading';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { StorageService } from './services/local-storage.service';
@NgModule({
  declarations: [
    AppComponent,
    ScheduleFormComponent,
    SummaryPageComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),      ReactiveFormsModule
  ],
  providers: [SlotsService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
