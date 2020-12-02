import {
  Directive,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { merge, fromEvent, EMPTY } from 'rxjs';
import { auditTime, mapTo } from 'rxjs/operators';

@Directive({
  selector: '[rDropDownD]',
  exportAs: 'rDropDownDSub',
})
export class DropDownDDirective {
  @Input() rTrigger: 'click' | 'hover';
  @Input() dropMenu;
  @Output() rTriggerChange: EventEmitter<any> = new EventEmitter();
  @HostBinding('style.position')
  position = 'relative';
  ifDown = false;
  triggerState$: any;
  constructor(private el: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const hostMouseState$ = merge(
      fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)),
      fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false))
    );
    const clickState$ = fromEvent(nativeElement, 'click').pipe(mapTo('click'));
    switch (this.rTrigger) {
      case 'click':
        this.triggerState$ = clickState$;
        break;
      case 'hover':
        this.triggerState$ = hostMouseState$;
        break;
      default:
        this.triggerState$ = EMPTY;
    }
    this.triggerState$.pipe(auditTime(150)).subscribe((a) => {
      let ifDown: boolean;
      if (typeof a == 'boolean') {
        ifDown = a;
      } else if (typeof a == 'string') {
        ifDown = !this.dropMenu.ifDown;
      } else {
        ifDown = false;
      }
      this.dropMenu.ifDown = ifDown;
    });
  }
  ngOnDestroy() {
    this.triggerState$.unsubscribe();
  }
}
