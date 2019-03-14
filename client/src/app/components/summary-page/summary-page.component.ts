import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  @Input()
  summaryData;

  constructor() { }

  ngOnInit() {
    console.log(this.summaryData);
  }
}
