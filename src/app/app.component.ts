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

  star(value) {
    alert(value + '星');
  }

  ngOnInit() {}

  aa() {
    console.log(this.selected);
  }
}
