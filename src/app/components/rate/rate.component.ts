import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { merge, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'R-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.less'],
})
export class RateComponent implements OnInit {
  @Input() onlyRead: boolean = false;
  @Input() totalScore: number;
  @Input() currentScore: number;
  @ViewChild('starItem') startItem: ElementRef;
  @Output() starEmit: EventEmitter<any> = new EventEmitter();
  startNums: any[] = [];
  showHalf: boolean = false;
  currentScoreSub: any;
  startItemW = 0;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.initStartNums();
    this.currentScoreSub = this.currentScore;
  }

  /**
   * 初始化startNums
   */
  initStartNums() {
    this._showHalf();
    this.startNums = new Array(this.totalScore)
      .fill(1)
      .map((ele, ind) => ele + ind);
  }

  /**
    光标悬浮star
   * @param e
   * @param item star数目
   */
  mouseMove(e, item) {
    if (this.onlyRead) {
      return;
    }
    this.currentScore = item;
    this.updateCurrentScoreSub(e.offsetX, item, 'currentScore');
  }
  /**
   * 半星展示
   */
  _showHalf() {
    if (parseInt(String(this.currentScore)) < this.currentScore) {
      this.showHalf = true;
    } else {
      this.showHalf = false;
    }
  }

  rateLeave() {
    this.currentScore = this.currentScoreSub;
  }

  /**
   * 点击star
   * @param e
   * @param item star数目
   */
  star(e, item) {
    if (this.onlyRead) {
      return;
    }
    this.updateCurrentScoreSub(e.offsetX, item, 'currentScoreSub');
    //回调
    this.starEmit.emit(this.currentScoreSub);
  }

  /**
   * 更新currentScoreSub
   * @param offsetx
   * @param item
   * @param obj 更新的对象 currentScoreSub | curentScore
   */
  updateCurrentScoreSub(offsetx, item, obj) {
    const offsetX = offsetx;
    if (offsetX >= this.startItemW / 2) {
      this[obj] = item;
    } else {
      this[obj] = item - 0.5;
    }
  }

  ngAfterViewInit() {
    this.startItemW = this.startItem.nativeElement.clientWidth;
  }
}
