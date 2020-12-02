import {
  AnimationTriggerMetadata,
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { merge, fromEvent, from } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { DropdownmenuComponent } from './dropdownmenu/dropdownmenu.component';
import { DropDownDDirective } from './drop-down-d.directive';

@Component({
  selector: 'R-drop-down',
  template: ` <div rDropDownD [dropMenu]="menu" rTrigger="click">
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
  buttonName = '下拉菜单';
  itemList: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngDoCheck() {}

  //自定义
  itemClick(item) {
    this.buttonName = item;
  }
}
