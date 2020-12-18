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

  notice() {
    this.mess.createMessage();
  }
}
