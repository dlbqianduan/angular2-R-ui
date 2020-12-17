import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-paginationP',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponentP implements OnInit {
  currentPage = 1;
  constructor() {}

  ngOnInit(): void {}
}
