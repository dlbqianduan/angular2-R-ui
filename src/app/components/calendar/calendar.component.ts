import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'R-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  @Input() dateValue:string;
  week = ['一','二','三','四','五','六','日'];
  monthArr = [1,2,3,4,5,6,7,8,9,10,11,12];
  year:number;
  month:number;
  day:number;
  dayArr:any[] = [];
  firstDayToWeek:number;//当月第一天为周几
  lastMonthToDays:number;//上个月总天数
  days:number;//本月总天数
  showMainView:1 | 2 | 3 = 1;
  yearAreaStart:number;
  yearAreaArr:any[] = [];
  constructor() { }

  ngOnInit(): void {

    this.initDate();
  }

  ngOnChanges(){
    if(this.dateValue){
      this.year = Number(this.dateValue.substr(0,4));
      this.month = Number(this.dateValue.substr(5,2));
      this.day = Number(this.dateValue.substr(8,2));
    }
    this.initDate();
  }

  //初始化日期
  initDate(){
    const d = new Date();
    const year = this.year ? this.year: d.getFullYear();
    const month = this.month ? this.month : d.getMonth()+1;
    const day = this.day ? this.day:d.getDate();
    const days = new Date(year,month,0).getDate();//本月总天数
    const firstDayToWeek = new Date(year,month - 1,1).getDay() ? new Date(year,month - 1,1).getDay():7;//本月第一天周几
    const lastMonthToDays = new Date(year,month - 1,0).getDate();//上个月总天数
    this.year = year;
    this.days = days;
    this.month = month;
    this.day = day;
    this.firstDayToWeek = firstDayToWeek;
    this.lastMonthToDays = lastMonthToDays;
    this.initDayArr();
  }

  //初始化日期数组
  initDayArr(){
    this.dayArr = new Array(this.days).fill(0).map((ele,ind)=>{
      const obj = {
        year:this.year,
        month:this.month,
        day:1+ind
      }
      return obj;
    });
    if(this.firstDayToWeek > 1){
      for(var i = 0;i < this.firstDayToWeek - 1;i++){
        this.dayArr.unshift({
          year:this.month > 1 ? this.year:this.year - 1,
          month:this.month > 1 ? this.month - 1:12,
          day:this.lastMonthToDays - i
        })
      }
    }
    const remainingDay = 42 - this.dayArr.length;
    for(var j = 0;j < remainingDay;j++){
      this.dayArr.push({
        year:this.month >=12 ? this.year+1:this.year,
        month:this.month >=12 ? 1:this.month+1,
        day:j+1
      })
    }
  }


  /**
   * 日期自增或自减
   * @param type 1 上一年 2 上一月 3 下一月 4下一年
   */
  changeTime(type){
    switch(type){
      case 1:
        this.year --;
        if(this.showMainView === 2){
          this.yearAreaStart -= 20;
          this.initYearArr(this.yearAreaStart);
        }
        break;
      case 2:
        this.month > 1 ? this.month -- : this.month = 12;
        break;
      case 3:
        if(this.month >= 12){
          this.month = 1;
          this.year += 1;
        }else{
          this.month ++;
        }
         break;
      case 4:
        this.year++;
        if(this.showMainView === 2){
          this.yearAreaStart += 20;
          this.initYearArr(this.yearAreaStart);
        }
        break; 
    }
    this.initDate();
  }

  chooseDay(obj){
    this.year = obj.year;
    this.month = obj.month;
    this.day = obj.day;
    this.initDate();
  }

  /**
   * 选择快捷类型
   * @param type 2 =>选择年份  3=>选择月份
   */
  changeType(type){
    this.showMainView = this.showMainView === 1?type:1;
    if(type === 2){
      this.initYearArr();
    }
  }

  /**
   * 初始化年份数组
   * @param yearAreaStart 起始年份
   */
  initYearArr(yearAreaStart?){
    this.yearAreaStart = !yearAreaStart ? this.year : yearAreaStart;
    this.yearAreaArr = new Array(20).fill(this.yearAreaStart).map((ele,ind)=>ele+ind);
  }

  changeMonth(month){
    this.month = month;
    this.showMainView = 1;
    this.initDate();
  }

  changeYear(year){
    this.year = year;
    this.showMainView = 1;
    this.initDate();
  }

}
