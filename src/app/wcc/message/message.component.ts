import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../components/message/message.service';

@Component({
  selector: 'R-messageP',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less'],
})
export class MessageComponentP implements OnInit {
  constructor(public mess: MessageService) {}

  ngOnInit(): void {}

  notice(type) {
    this.mess.message({
      type: type,
      message: '哈哈哈，我i了' + Math.random(),
      duration: 3000,
      callBack: this.dd,
    });
  }

  dd() {
    console.log('woliale');
  }
}
