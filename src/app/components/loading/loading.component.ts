import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'R-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less'],
})
export class LoadingComponent implements OnInit {
  @Input() type: 'circle' | 'simple';
  constructor() {}

  ngOnInit(): void {}
}
