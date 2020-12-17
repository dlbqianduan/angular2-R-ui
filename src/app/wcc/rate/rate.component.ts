import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-rateP',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less'],
})
export class RateComponentP implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  star(value) {
    alert(value + '星');
  }
}
