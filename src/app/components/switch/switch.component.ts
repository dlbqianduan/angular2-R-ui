import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { switchFade } from './fade';

@Component({
  selector: 'R-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
  animations: [switchFade],
})
export class SwitchComponent implements OnInit {
  @Input() selected = true;
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter();
  clickLight = false;

  constructor(private render: Renderer2, private ref: ElementRef) {}

  ngOnInit(): void {}

  switch() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
    this.clickLight = true;
    setTimeout(() => {
      this.clickLight = false;
    }, 500);
  }
}
