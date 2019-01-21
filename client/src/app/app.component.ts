import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lemonoa';
  scheduleClicked = false;

  onScheduleClick() {
    console.log(this.scheduleClicked);
    this.scheduleClicked = !this.scheduleClicked;
  }
}

