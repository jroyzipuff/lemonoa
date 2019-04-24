import { Component, OnInit } from '@angular/core';
import { SlotsService } from './services/data-provider.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pilates A Fuoco';
  formOpen = false;
  scheduled = false;
  slots: any;
  summaryData: any;
  scheduleClassText = 'Schedule Class';
  scheduleAnotherClassText = 'Schedule Another Class';
  scheduleButtonText = this.scheduleClassText;
  public loading = false;

  constructor(private slotsService: SlotsService) {}

  ngOnInit() {
    this.slotsService.availableSlots.subscribe((slots) => {
      this.slots = slots;
    });
  }

  onRequestFormClick() {
    if (this.scheduled) {
      this.scheduled = ! this.scheduled;
      this.ngOnInit();
      this.formOpen = ! this.formOpen;
    }
    if (!this.formOpen) {
      if (!this.slotsService.availableSlots.value.toString()) {this.slotsService.getSlots();
      }
    }
    this.formOpen = !this.formOpen;
  }

  scheduleSlot(data) {
    this.slotsService.scheduleSlot(data);
    this.scheduled = true;
    this.summaryData = data;
    this.scheduleButtonText = this.scheduleAnotherClassText;
  }
}

