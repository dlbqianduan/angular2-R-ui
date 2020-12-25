import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-progressP',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
})
export class ProgressComponentP implements OnInit {
  rate = [50, 60, 70];
  constructor() {}

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log(this.rate);
    // }, 1000);
  }
}
