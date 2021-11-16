import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  template: `<button (click)="showHello()">say Hello</button>`,
})
export class AppComponent {
  name = 'createcomp';
  constructor(
    public viewRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  showHello() {
    const myComponent: ComponentRef<HelloComponent> =
      this.viewRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(HelloComponent)
      );
    myComponent.instance.name = this.name;
  }
}
