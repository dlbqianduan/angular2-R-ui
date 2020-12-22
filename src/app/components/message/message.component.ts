import { Component, OnInit } from '@angular/core';
import { messFade } from './fade';
@Component({
  selector: 'R-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
  animations: [messFade],
})
export class MessageComponent implements OnInit {
  index: 0;
  config;
  showMessBox = false;
  outTimer: any;
  constructor() {}

  ngOnInit(): void {
    this.close();
    this.judgeNumber();
  }

  onDestroy() {
    const hostElement = document.getElementById('messageBox' + this.index);
    if (hostElement) {
      hostElement.parentElement.removeChild(hostElement);
      if (this.config.callBack) {
        this.config.callBack();
      }
    }
    this.showMessBox = false;
    clearTimeout(this.outTimer);
  }

  close() {
    this.showMessBox = true;
    this.outTimer = setTimeout(() => {
      this.onDestroy();
    }, this.config.duration);
  }

  judgeNumber() {
    const messageContainer = document.getElementById('messageContainer');
    if (messageContainer) {
      const number = messageContainer.childElementCount;
      if (number >= 7) {
        messageContainer.removeChild(messageContainer.children[0]);
      }
    }
  }
}
