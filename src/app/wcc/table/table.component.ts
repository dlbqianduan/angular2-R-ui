import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-tableP',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
})
export class TableComponentP implements OnInit {
  list = [
    {
      name: 'deng',
      age: 23,
      sex: '男',
    },
    {
      name: 'chen',
      age: 26,
      sex: '男',
    },
    {
      name: 'zhang',
      age: 30,
      sex: '女',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
