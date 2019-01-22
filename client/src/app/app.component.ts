import { Component, OnInit } from '@angular/core';
import { SlotsService } from './services/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lemonoa';
  formOpen = false;
  slots = {};

  constructor(private slotsService: SlotsService) {}

  ngOnInit() {
    this.slotsService.availableSlots.subscribe((slots) => {
      console.log(slots);
      this.slots = slots;
    });
  }

  onRequestFormClick() {
    if (this.formOpen) {
      this.formOpen = !this.formOpen;
    } else {
      this.slotsService.getSlots();
      this.formOpen = !this.formOpen;
    }
  }

  scheduleSlot(data) {
    this.slotsService.scheduleSlot(data);
  }
}

