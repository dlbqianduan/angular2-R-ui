import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-rateP',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less'],
})
export class RateComponentP implements OnInit {
  currentScore1 = 1.5;
  currentScore2 = 5;
  totalScore1 = 5;
  totalScore2 = 6;
  constructor() {}

  ngOnInit(): void {}
  star(value) {
    alert(value + '星');
  }
}
