import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
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

  ngOnInit() {}

  aa() {
    console.log(this.currentPage, this.currentPage2);
  }

  switch(e) {
    console.log('我' + e);
  }
}
