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

@Component({
  selector: 'R-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
})
export class TabsComponent implements OnInit {
  @Input() tabs;
  @Output() tabsChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  tabsChangeF(e) {
    this.tabsChange.emit(e);
  }
}
