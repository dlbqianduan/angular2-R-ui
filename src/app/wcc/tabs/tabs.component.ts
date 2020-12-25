import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-tabsP',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
})
export class TabsComponentP implements OnInit {
  tabs = [];
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.tabs = [
        '哈哈',
        '嘿嘿黑褐',
        '急烦',
        '啦啦啦啦啦啦啦',
        '胡粉红粉红的开发和',
      ];
    }, 100);
  }

  changeF(e) {
    console.log(e);
  }
}
