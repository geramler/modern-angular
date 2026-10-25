import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  // Angular property,
  // can be accessed by any other class which is extending this
  protected title = 'Welcome to Modern Angular!';

  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }

  // signal property
  protected count = signal(0);

  // computed signal property
  // runs on dependent signal change
  protected doubleCount = computed(() => this.count() * 2);

  // effect property
  // readonly means not reasignable
  private readonly countLog = effect( () => {
    console.log('Count changed:', this.count())
  });

  // runs everytime the Angular change detection kicks in
  // getDoubleCount() {
  //   console.log('getDoubleCount called');
  //   return this.count() * 2;
  // }

  protected increaseCounter() {
   // same as: count = count + 1;
   this.count.update(value => value + 1);
  }

  protected decreaseCounter() {
    this.count.update(value => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
