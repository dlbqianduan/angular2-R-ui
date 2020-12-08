import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'R-pagination',
  // templateUrl: './pagination.component.html',
  template: `
    <div class="pagination">
      <div class="changePage pre">
        <button
          #pre
          [class.disable]="currentPage == 1"
          [disabled]="currentPage <= 1"
          (click)="changePage(0)"
        >
          &lt;
        </button>
      </div>
      <div *ngIf="paginationType === 'simple'" class="num">
        {{ currentPage + '/' + totalPage }}
      </div>
      <div class="num usual" *ngIf="paginationType === 'usual'">
        <li
          *ngIf="pageNums[0] >= 2"
          class="item first"
          [class.active]="currentPage == 1"
          (click)="goNumPage(1)"
        >
          1
        </li>
        <li class="item" *ngIf="pageNums[0] > 2" (click)="showMore(1)">···</li>
        <ng-container *ngFor="let item of pageNums; let ind = index">
          <li
            *ngIf="ind < 8"
            class="item"
            [class.active]="item == currentPage"
            (click)="goNumPage(item)"
          >
            {{ item }}
          </li>
        </ng-container>
        <li
          (click)="showMore(2)"
          class="item"
          *ngIf="
            totalPage > 8 + 1 && pageNums[pageNums.length - 1] + 1 < totalPage
          "
        >
          ···
        </li>
        <li
          (click)="goNumPage(totalPage)"
          class="item last"
          *ngIf="totalPage > 8"
          [class.active]="currentPage == totalPage"
        >
          {{ totalPage }}
        </li>
      </div>
      <div class="changePage next" (click)="changePage(1)">
        <button
          #next
          [class.disable]="currentPage == totalPage"
          [disabled]="currentPage >= totalPage"
        >
          &gt;
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() totalPage = 0;
  @Input() paginationType = 'simple';
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('pre') pre: ElementRef;
  @ViewChild('next') next: ElementRef;
  ifchange: boolean = false; //能否切换
  type: 0 | 1 = 0; //切换类型
  pageNums = [];
  showFistLast = false;
  showLast = false;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.initPageNum();
  }

  /**
   * 左右切换
   * @param type 0 上一页 1 下一页
   */
  changePage(type) {
    this.type = type;
    this.ifChange(type);
    if (this.ifchange) {
      switch (type) {
        case 0:
          this.currentPage--;
          break;
        case 1:
          this.currentPage++;
          break;
      }
    } else {
      return;
    }
    //更新pageNums
    if (this.pageNums.indexOf(this.currentPage) == -1) {
      this.updatePageNum(this.currentPage + 1, 1);
    }
    this.changePageEmit.emit(this.currentPage);
  }

  ngAfterViewInit() {}

  //能否切换
  ifChange(type) {
    if (
      (!type && (!this.totalPage || this.currentPage - 1 == 0)) ||
      (type && (!this.totalPage || this.currentPage + 1 > this.totalPage))
    ) {
      this.ifchange = false;
      this.handlerAttribute(this.pre.nativeElement, 1);
    } else {
      this.ifchange = true;
      this.handlerAttribute(this.next.nativeElement, 2);
    }
  }

  /**
   * 添加disabled属性
   * @param element 元素
   * @param method  1 添加 2 移除
   */
  handlerAttribute(element, method) {
    if (method === 1) {
      this.render.setAttribute(element, 'disabled', 'true');
    } else if (method === 2) {
      this.render.removeAttribute(element, 'disabled');
    }
  }

  /**
   *
   */
  initPageNum() {
    this.pageNums = new Array<number>(this.totalPage)
      .fill(0)
      .map((ele, ind) => 1 + ind)
      .filter((ele, ind) => {
        return ind < 8;
      });
  }

  /**
   *
   * @param number
   * @param t 1加 -1减
   */
  updatePageNum(number, t) {
    const len = this.pageNums.length;
    const pageNumLast = this.pageNums[len - 1] + 1;
    if (
      (t == 1 && (number <= 1 || pageNumLast >= this.totalPage)) ||
      (t == -1 && (number <= 2 || this.pageNums[0] <= 2))
    ) {
      return;
    }
    this.pageNums = this.pageNums.map((ele, ind) => {
      return ele + t;
    });
    console.log(t, this.pageNums, pageNumLast);
  }

  /**
   * 跳转至指定页面
   * @param number
   */
  goNumPage(number) {
    const t =
      number > this.currentPage ? 1 : number == this.currentPage ? 0 : -1;
    if (number == 0) {
      return;
    }
    this.currentPage = number;
    if (this.totalPage >= 8) {
      this.updatePageNum(number, t);
    }
    if (number == 1) {
      this.initPageNum();
    }
    this.changePageEmit.emit(number);
  }

  showMore(type) {
    // if (type == 1) {
    //   this.currentPage -= 3;
    // } else {
    //   this.currentPage += 3;
    // }
  }
}
