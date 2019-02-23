import { Component, OnInit } from '@angular/core';
import { SlotsService } from './services/data-provider.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lemonoa';
  formOpen = false;
  slots: any;
  public loading = false;

  constructor(private slotsService: SlotsService) {}

  ngOnInit() {
    this.slotsService.availableSlots.subscribe((slots) => {
      this.slots = slots;
    });
  }

  onRequestFormClick() {
    if (!this.formOpen) {
      this.loading = !this.loading;
      this.slotsService.getSlots();
      this.loading = !this.loading;
    }
    this.formOpen = !this.formOpen;
  }

  scheduleSlot(data) {
    this.slotsService.scheduleSlot(data);
  }
}

