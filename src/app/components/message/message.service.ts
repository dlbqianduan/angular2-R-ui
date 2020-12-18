import { Injectable } from '@angular/core';
import { MessageComponent } from './message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  createMessage() {
    console.log(112);
  }
}
