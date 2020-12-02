import { Directive, Input, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
@Directive({
  selector: '[rDropDownItemD]',
})
export class DropDownItemDDirective {
  @Input() dropItem;
  fromEventClick: any;
  constructor(private el: ElementRef) {}
  ngOnInit() {}
  ngAfterViewInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    this.fromEventClick = fromEvent(nativeElement, 'click').subscribe((e) => {
      e.stopPropagation();
      this.dropItem.ifDown = false;
    });
  }
  ngOnDestroy() {
    this.fromEventClick.unsubscribe();
  }
}
