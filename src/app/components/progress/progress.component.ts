import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'R-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
})
export class ProgressComponent implements OnInit {
  @Input() type: 'line' | 'circle' = 'line';
  @Input() rate = 0;
  @Input() ifOperate = false;
  start_x: any;
  moveDistance = 0;
  switch = false;
  up_x: any;
  constructor() {}

  ngOnInit(): void {}

  mouseDown(e) {
    this.switch = true;
    const start_x = e.pageX;
    this.start_x = start_x;
  }

  mouseMove(e) {
    if (!this.switch) return;
    const move_x = e.pageX;
    const de = this.start_x - move_x;
    this.moveDistance = this.up_x ? this.up_x - move_x : de;
  }

  mouseUp(e) {
    const up_x = e.pageX;
    const de = up_x - this.start_x;
    this.up_x = up_x;
    this.switch = false;
  }
}
