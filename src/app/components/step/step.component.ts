import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { merge, Subject, Subscription } from 'rxjs';
import { StepItemComponent } from './step-item/step-item.component';

@Component({
  selector: 'R-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.less'],
})
export class StepComponent implements OnInit {
  @Input() public currentIndex = 0;
  @ContentChildren(StepItemComponent) steps!: QueryList<StepItemComponent>;
  @Output() currentIndexChange: EventEmitter<any> = new EventEmitter();
  private subscription?: Subscription;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.updateChildrenSteps();
  }

  updateChildrenSteps() {
    if (this.steps) {
      this.steps.toArray().forEach((step, index) => {
        Promise.resolve().then(() => {
          step.index = index + 1;
          step.currentIndex = this.currentIndex;
        });
      });
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = merge(
        ...this.steps.map((step) => step.click$)
      ).subscribe((index) => this.currentIndexChange.emit(index));
    }
  }

  ngOnChanges() {
    this.updateChildrenSteps();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
