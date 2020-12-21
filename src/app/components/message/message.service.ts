import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
} from '@angular/core';
import { MessageComponent } from './message.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(
    private factory: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  createMessage(obj) {
    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(MessageComponent)
      .create(this.injector);
    component.instance.config = obj;
    this.appRef.attachView(component.hostView);
    const hostElement = document.createElement('div');
    hostElement.setAttribute('id', 'ppp');
    hostElement.appendChild((<any>component.hostView).rootNodes[0]);
    document.body.appendChild(hostElement);
    console.log(
      component.instance.config,
      (<any>component.hostView).rootNodes[0],
      typeof document.getElementById('ppp')
    );
  }
}
