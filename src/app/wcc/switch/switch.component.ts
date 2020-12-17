import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'R-switchP',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
})
export class SwitchComponentP implements OnInit {
  selected = false;
  selected2 = true;
  constructor() {}

  ngOnInit(): void {}

  switch(e) {}
}
