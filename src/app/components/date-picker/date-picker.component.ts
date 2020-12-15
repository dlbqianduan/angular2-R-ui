import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { dateFade } from './dateFade';

@Component({
  selector: 'R-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
  animations: [dateFade],
})
export class DatePickerComponent implements OnInit {
  @Input() dateValue: string;
  // @Output() dateValueChange = new EventEmitter();
  showCalendar = false;
  constructor() {}

  ngOnInit(): void {}

  chooseDate() {
    this.showCalendar = !this.showCalendar;
  }
  close(e) {
    this.dateValue = e;
    this.showCalendar = false;
    // this.dateValueChange.emit(this.dateValue);
  }
}
