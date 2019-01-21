import { Component } from '@angular/core';
import { SlotsService } from './services/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'lemonoa';
  formOpen = false;

  constructor(private slotsService: SlotsService) {}
  onRequestFormClick() {
    this.slotsService.availableSlots.subscribe((slots) => {
      console.log(slots);
    });
    this.formOpen = !this.formOpen;
    this.slotsService.getSlots();
  }

  scheduleSlot(data) {
    this.slotsService.scheduleSlot(data);
  }
}

