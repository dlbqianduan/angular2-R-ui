import { Component } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { fromEvent } from 'rxjs';
enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  showMenuss = true;
  resize$: any;
  path = '';
  routerArr = [
    {
      name: '下拉菜单 dropDown',
      path: '/dropDown',
    },
    {
      name: '分页 pagination',
      path: '/pagination',
    },
    {
      name: '评分 rate',
      path: '/rate',
    },
    {
      name: '日历 calendar',
      path: '/calendar',
    },
    {
      name: '日期选择 date-picker',
      path: '/datePicker',
    },
    {
      name: '时间选择 time-picker',
      path: '/timePicker',
    },
    {
      name: '开关 switch',
      path: '/switch',
    },
    {
      name: '加载动画 loading',
      path: '/loading',
    },
    {
      name: '全局信息通知 message',
      path: '/message',
    },
    {
      name: '进度条 progress',
      path: '/progress',
    },
    {
      name: 'Tabs 标签页',
      path: '/tabs',
    },
    {
      name: 'table 表格',
      path: '/table',
    },
  ];
  title = 'angular2-R-ui';
  dateValue = '';
  timeValue = '';
  currentPage = 1;
  currentPage2 = 10;
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
  selected = false;
  selected2 = true;

  star(value) {
    alert(value + '星');
  }

  constructor() {
    const path = location.href;
    this.path = path;
  }

  ngOnInit() {
    this.resize$ = fromEvent(window, 'resize');
    this.closeMenu();
    this.resize$.subscribe(() => {
      this.closeMenu();
    });
  }

  ngAfterViewInit() {}

  aa() {
    console.log(this.currentPage, this.currentPage2);
  }

  switch(e) {
    console.log('我' + e);
  }

  closeMenu() {
    const that = this;
    if (window.innerWidth <= 1100) {
      that.showMenuss = false;
    } else {
      that.showMenuss = true;
    }
  }
}
