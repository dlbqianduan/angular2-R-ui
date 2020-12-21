import { Component, OnInit } from '@angular/core';
export interface config {
  type: 'warn' | 'error' | 'success';
  message: string;
  duration: number;
}
@Component({
  selector: 'R-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
})
export class MessageComponent implements OnInit {
  config: config;
  constructor() {}

  ngOnInit(): void {
    this.close();
  }

  onDestroy() {
    const hostElement = document.getElementById('ppp');
    if (hostElement) {
      hostElement.parentElement.removeChild(hostElement);
      // document.body.removeChild(hostElement);
    }
  }

  close() {
    setTimeout(() => {
      this.onDestroy();
    }, this.config.duration);
  }
}
