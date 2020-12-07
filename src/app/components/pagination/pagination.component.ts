import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild, Output, EventEmitter, ElementRef ,Renderer2} from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'R-pagination',
  // templateUrl: './pagination.component.html',
  template:`
    <div class="pagination">
       <div  class="changePage pre">
         <button #pre [class.disable]="currentPage == 1" [disabled]="currentPage <= 1" (click)="changePage(0)">&lt;</button>
       </div>
       <div *ngIf="paginationType === 'simple'" class="num">
          {{currentPage+'/'+totalPage}}
       </div>
        <div class="num" *ngIf="paginationType === 'usual'">
          
        </div>
       <div  class="changePage next"  (click)="changePage(1)">
         <button #next [class.disable]="currentPage == totalPage" [disabled]="currentPage>=totalPage">&gt;</button>
       </div>
    </div>
  `,
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage = 1;
  @Input() totalPage = 0;
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @ViewChild('pre') pre:ElementRef;
  @ViewChild('next') next:ElementRef;
  ifchange:boolean = false;//能否切换
  type:0 | 1 = 0;//切换类型
  paginationType = 'simple';
  constructor(private el:ElementRef,private render:Renderer2) { }

  ngOnInit(): void {

  }

/**
 * 左右切换
 * @param type 0 上一页 1 下一页
 */
  changePage(type){
    this.type = type;
    this.ifChange(type);
    if(this.ifchange){
      switch(type){
        case 0:
          this.currentPage --;
          break;
        case 1:
          this.currentPage ++;
          break;
      }
    }else{
      return;
    }
    this.changePageEmit.emit();
  }

  ngAfterViewInit(){

  }

  //能否切换
  ifChange(type){
    if((!type && (!this.totalPage || (this.currentPage - 1) == 0)) || (type && (!this.totalPage || (this.currentPage + 1) > this.totalPage))){
        this.ifchange = false;
        this.handlerAttribute(this.pre.nativeElement,1);
    }else{
      this.ifchange = true;
      this.handlerAttribute(this.next.nativeElement,2);
    }
  }

  /**
   * 添加disabled属性
   * @param element 元素
   * @param method  1 添加 2 移除
   */
  handlerAttribute(element,method){
    if(method === 1){
      this.render.setAttribute(element,'disabled','true');
    }else if(method === 2){
      this.render.removeAttribute(element,'disabled');
    }
  }
}
