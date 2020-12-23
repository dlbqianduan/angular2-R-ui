import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'R-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
})
export class TabsComponent implements OnInit {
  @Input() tabs;
  @Output() tabsChange = new EventEmitter();
  @ViewChild('tabsItem') tabsItem: ElementRef;
  @ViewChildren('allTabs') allTabs;
  tabWidth = 0; //tab的宽度
  tabLeft = 0; //tab的左边距离
  constructor() {}

  ngOnInit(): void {}

  tabSelect(index) {
    this.getWH(index);
    this.tabMove();
    this.tabsChange.emit(index);
  }

  getWH(index) {
    const ele = this.allTabs._results[index].nativeElement;
    const width = ele.clientWidth;
    const left = ele.offsetLeft;
    this.tabWidth = width;
    this.tabLeft = left;
  }

  ngAfterViewInit() {}

  tabMove() {}

  ngOnChanges() {
    console.log('change');
    setTimeout(() => {
      this.getWH(0);
    }, 100);
  }
}
