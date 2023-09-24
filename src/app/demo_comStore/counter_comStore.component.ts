import { Component } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  template: `
    <div>
      <p>Count: {{ count$ | async }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class ExampleComponent extends ComponentStore<{ count: number }> {
  // Define the initial state
  constructor() {
    super({ count: 0 });
  }

  // Define selectors for the state
  readonly count$ = this.select((state) => state.count);

  // Define actions to update the state
  readonly increment = this.updater((state) => ({ count: state.count + 1 }));
  readonly decrement = this.updater((state) => ({ count: state.count - 1 }));
}
