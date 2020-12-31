import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'R-stepP',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.less'],
})
export class StepComponentP implements OnInit {
  currentIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  haha(e) {
    console.log('索引：' + e, '我去第' + (e + 1) + '步');
  }
}
