import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-paginationP',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponentP implements OnInit {
  currentPage1 = 1;
  currentPage2 = 7;
  currentPage3 = 15;
  constructor() {}

  ngOnInit(): void {}
}
