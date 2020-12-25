import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChildren,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'R-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.less'],
})
export class TabNavComponent implements OnInit {
  @Input() tabs;
  @Output() tabsChange = new EventEmitter();
  @ViewChildren('allTabs') allTabs;
  tabWidth = 0; //tab的宽度
  tabLeft = 0; //tab的左边距离
  first = true;
  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  tabSelect(index) {
    this.getWH(index);
    this.tabsChange.emit(index);
  }

  getWH(index) {
    const ele = this.allTabs._results[index].nativeElement;
    const width = ele.clientWidth;
    const left = ele.offsetLeft;
    this.tabWidth = width;
    this.tabLeft = left;
  }

  ngAfterViewInit() {
    this.getWH(0);
    this.cdr.detectChanges();
  }
}
