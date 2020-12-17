import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
})
export class DropdownComponent implements OnInit {
  menuList = [
    '天空很蓝天空很蓝',
    '大地很方大地很方',
    '白云很白白云很白',
    '小草很路小草很路',
    '天空很蓝天空很蓝',
    '大地很方大地很方',
    '白云很白白云很白',
    '小草很路小草很路',
  ];
  constructor() {}

  ngOnInit(): void {}
}
