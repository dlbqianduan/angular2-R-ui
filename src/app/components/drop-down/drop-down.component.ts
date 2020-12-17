import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'R-drop-down',
  template: ` <div rDropDownD [dropMenu]="menu" [rTrigger]="trigger">
    <span class="rDropDownD">{{ buttonName }}</span>
    <R-dropdownmenu #menu>
      <ul class="menu-wrap">
        <li
          rDropDownItemD
          [dropItem]="menu"
          *ngFor="let item of menuList"
          (click)="itemClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </R-dropdownmenu>
  </div>`,
  styleUrls: ['./drop-down.component.less'],
  exportAs: '[Rdropdown]',
})
export class DropDownComponent implements OnInit {
  @Input() menuList: any[] = [];
  @Input() trigger: 'hover' | 'click' = 'hover';
  @Output() menuItemChange = new EventEmitter();
  buttonName = '下拉菜单';
  itemList: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngDoCheck() {}

  //自定义
  itemClick(item) {
    this.buttonName = item;
    this.menuItemChange.emit(item);
  }
}
