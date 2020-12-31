import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StepComponent } from '../step.component';
@Component({
  selector: 'R-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.less'],
  host: {
    class: 'step-item',
  },
})
export class StepItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  click$ = new Subject<number>();
  index: number;
  currentIndex: number;
  constructor(public step: StepComponent) {}

  ngOnInit(): void {}

  chooseStep() {
    this.click$.next(this.index - 1);
  }
}
