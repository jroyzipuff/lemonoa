import { Component } from '@angular/core';
import { SlotsService } from './services/data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'lemonoa';
  scheduleClicked = false;

  constructor(private slotsService: SlotsService) {}
  onScheduleClick() {
    console.log(this.scheduleClicked);
    this.scheduleClicked = !this.scheduleClicked;
    this.slotsService.scheduleSlot();
  }
}

