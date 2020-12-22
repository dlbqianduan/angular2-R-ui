import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
} from '@angular/core';
import { messFade } from './fade';
import { MessageComponent } from './message.component';
export interface config {
  type: 'warn' | 'error' | 'success';
  message: string;
  duration: number;
  callBack?();
}
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  index = 0;
  constructor(
    private factory: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  message(obj: config) {
    this.index++;
    this.createMessage(obj);
  }

  createMessage(obj) {
    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(MessageComponent)
      .create(this.injector);
    this.createHostElement(component);
    component.instance.config = obj;
    component.instance.index = this.index;
    this.appRef.attachView(component.hostView);
  }

  createHostElement(component) {
    const messageBox = document.createElement('div');
    let hostElement = document.getElementById('messageContainer');
    if (!hostElement) {
      hostElement = document.createElement('div');
    }
    messageBox.setAttribute('id', 'messageBox' + this.index);
    hostElement.setAttribute('id', 'messageContainer');
    messageBox.appendChild(component.location.nativeElement);
    hostElement.appendChild(messageBox);
    document.body.appendChild(hostElement);
  }
}
