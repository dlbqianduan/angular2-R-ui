import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'R-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
})
export class ProgressComponent implements OnInit {
  @Input() type: 'line' | 'circle' = 'line';
  @Input() rate = 0;
  @Input() ifOperate = false;
  @Output() rateChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  operate(type) {
    if (!type) {
      this.rate = this.rate - 10 > 0 ? this.rate - 10 : 0;
    } else {
      this.rate = this.rate + 10 <= 100 ? this.rate + 10 : 100;
    }
    this.rateChange.emit(this.rate);
  }
}
