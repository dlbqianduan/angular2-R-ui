import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'R-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.less'],
  host: {
    class: 'r-copy',
  },
})
export class CopyComponent implements OnInit {
  @Input() value: string;
  @Output() copyChange: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  copyCon() {
    let inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.style.opacity = '0';
    inp.style.zIndex = '-100';
    inp.value = this.value;
    inp.select();
    document.execCommand('Copy');
    this.copyChange.emit(1);
  }
}
