import { Component, Input, OnInit } from '@angular/core';
import { dateFade } from './dateFade';

@Component({
  selector: 'R-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
  animations: [dateFade],
})
export class DatePickerComponent implements OnInit {
  @Input() dateValue: string;
  showCalendar = false;
  constructor() {}

  ngOnInit(): void {}

  chooseDate() {
    this.showCalendar = !this.showCalendar;
  }
  close(e) {
    this.showCalendar = false;
    this.dateValue = e;
  }
}
