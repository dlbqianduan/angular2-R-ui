import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-copyP',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.less'],
})
export class CopyComponentP implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  copyChange() {
    console.log('do something');
  }
}
