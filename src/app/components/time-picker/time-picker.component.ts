import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dateFade } from './fade';
@Component({
  selector: 'R-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.less'],
  animations: [dateFade],
})
export class TimePickerComponent implements OnInit {
  @Input() timeValue = '';
  @Output() timeValueChange = new EventEmitter();
  showTimer = false;
  hourArr: any[] = [];
  timesArr: any[] = [];
  hour: any = '00';
  minute: any = '00';
  second: any = '00';
  typeArr = ['hour', 'minute', 'second'];
  showClear = false;
  constructor() {}

  ngOnInit(): void {
    this.initShowArr('hourArr', 24);
    this.initShowArr('timesArr', 60);
  }

  ngOnChanges() {
    this.hour = this.timeValue.substr(0, 2);
    this.minute = this.timeValue.substr(3, 2);
    this.second = this.timeValue.substr(6, 2);
  }

  ngAfterViewInit() {
    const item = document.getElementById('item015');
  }

  initShowArr(type, number) {
    this[type] = new Array(number)
      .fill(0)
      .map((ele, ind) => (ele + ind > 9 ? ele + ind : '0' + (ele + ind)));
  }

  upDateTimeValue() {
    this.timeValue = this.hour + ':' + this.minute + ':' + this.second;
  }

  /**
   * 默认填充
   */
  defaultFormt() {
    this.hour = this.hour ? this.hour : '00';
    this.minute = this.minute ? this.minute : '00';
    this.second = this.second ? this.second : '00';
  }

  chooseTime(type, num) {
    this[this.typeArr[type]] = num;
    this.defaultFormt();
    this.upDateTimeValue();
    this.timeValueChange.emit(this.timeValue);
  }

  clear() {
    this.hour = '';
    this.minute = '';
    this.second = '';
    this.timeValue = '';
    this.showClear = false;
    this.timeValueChange.emit(this.timeValue);
  }

  mouse(bool) {
    if (!this.timeValue && bool) {
      this.showClear = !bool;
      return;
    }
    this.showClear = bool;
  }

  getNowTime() {
    const nowTime = new Date().toTimeString();
    this.hour = nowTime.substr(0, 2);
    this.minute = nowTime.substr(3, 2);
    this.second = nowTime.substr(6, 2);
    this.timeValue = nowTime.substr(0, 8);
    this.showTimer = false;
    this.timeValueChange.emit(this.timeValue);
  }

  open() {
    this.showTimer = true;
    // setTimeout(() => {
    //   const item = document.getElementById('item015');
    //   console.log(item, item.offsetTop);
    //   document.getElementById('item0').style.top = -100 + 'px';
    // }, 500);
  }

  close() {
    this.showTimer = false;
  }
}
