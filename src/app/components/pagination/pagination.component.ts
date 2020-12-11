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
    <div class="pagination-wrap flex-center">
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
            *ngIf="totalPage > 7"
            class="item first"
            [class.active]="currentPage == 1"
            (click)="goNumPage(1)"
          >
            1
          </li>
          <li
            *ngIf="currentPage - 2 > 1 && totalPage > 7"
            class="item"
            (click)="showMore(1)"
          >
            ···
          </li>
          <ng-container *ngFor="let item of pageNums; let ind = index">
            <li
              class="item"
              [class.active]="item == currentPage"
              (click)="goNumPage(item)"
            >
              {{ item }}
            </li>
          </ng-container>
          <li
            *ngIf="currentPage + 2 < totalPage && totalPage > 7"
            (click)="showMore(2)"
            class="item"
          >
            ···
          </li>
          <li
            *ngIf="totalPage > 7"
            (click)="goNumPage(totalPage)"
            class="item last"
            [class.active]="currentPage == totalPage"
          >
            {{ totalPage }}
          </li>
        </div>
        <div class="changePage next">
          <button
            (click)="changePage(1)"
            #next
            [class.disable]="currentPage == totalPage"
            [disabled]="currentPage >= totalPage"
          >
            &gt;
          </button>
        </div>
      </div>
      <div *ngIf="showInputPage" class="inputPage flex-center">
        去&nbsp;<input
          type="number"
          [value]="inputValue"
          (input)="inputValue = $event.target.value"
          (keyup.enter)="goNumPage(inputValue)"
        />&nbsp;页
      </div>
    </div>
  `,
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() totalPage = 0;
  @Input() paginationType = 'simple';
  @Input() showInputPage = false;
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('pre') pre: ElementRef;
  @ViewChild('next') next: ElementRef;
  ifchange: boolean = false; //能否切换
  type: 0 | 1 = 0; //切换类型
  pageNums = [];
  showFistLast = false;
  showLast = false;
  inputValue: number | null;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.initPageNum();
  }

  // ngOnChanges()

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
    //总页数小于等于7则全部展示
    if (this.totalPage > 7) {
      this.updatePageNum();
    }
    //回调
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
   *初始化pageNums
   */
  initPageNum() {
    if (this.totalPage <= 7) {
      this.pageNums = new Array<number>(this.totalPage)
        .fill(0)
        .map((ele, ind) => 1 + ind);
    } else {
      this.updatePageNum();
    }
  }

  /**
   * 更新pageNums
   */
  updatePageNum() {
    //totalPage小于8不更新pageNums
    if (this.totalPage < 8) {
      return;
    }
    let s, t; //pageNums开始和结束
    if (this.currentPage - 2 > 1) {
      s = this.currentPage - 2;
    } else {
      s = 2;
    }
    if (this.currentPage + 2 < this.totalPage) {
      t = this.currentPage + 2;
    } else {
      t = this.totalPage - 1;
    }
    if (this.currentPage <= 3) {
      s = 2;
      t = s + 3;
    }
    if (this.currentPage + 2 >= this.totalPage) {
      s = this.totalPage - 4;
      t = this.totalPage - 1;
    }
    this.pageNums = new Array<number>(t - s + 1)
      .fill(0)
      .map((ele, ind) => s + ind);
  }

  /**
   * 跳转至指定页面
   * @param number
   */
  goNumPage(number) {
    let _number = Number(number);
    _number =
      _number < 1 ? 1 : _number > this.totalPage ? this.totalPage : _number;
    this.currentPage = _number;
    //清空inputValue
    this.inputValue = null;
    this.updatePageNum();
    this.changePageEmit.emit(_number);
  }

  /**
   * 每次增加或减少2
   * @param type 1 减少 2增加
   */
  showMore(type) {
    if (type == 1) {
      this.currentPage = this.currentPage - 2 >= 1 ? this.currentPage - 2 : 1;
    } else {
      this.currentPage =
        this.currentPage + 2 <= this.totalPage
          ? this.currentPage + 2
          : this.totalPage;
    }
    this.updatePageNum();
    //回调
    this.changePageEmit.emit(this.currentPage);
  }
}
