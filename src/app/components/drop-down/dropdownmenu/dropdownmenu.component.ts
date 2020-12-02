import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut } from '../fadeAnimation';
@Component({
  selector: 'R-dropdownmenu',
  template: `<div
    style="width:100%;position:absolute;top:30px;padding-top:3px;left:0;"
    [@fadeInOut]="ifDown ? 'bottom' : 'void'"
    *ngIf="ifDown"
  >
    <ng-content (mouseenter)="hhh()" (mouseleave)="hhh()"></ng-content>
  </div> `,
  styleUrls: ['./dropdownmenu.component.less'],
  animations: [fadeInOut],
})
export class DropdownmenuComponent implements OnInit {
  @Input() ifDown = false;
  constructor() {}

  ngOnInit(): void {}
}
