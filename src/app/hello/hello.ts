import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  // Subclasses can access this protected property.
  protected title = 'Welcome to Modern Angular!';

  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }

  // signal property
  protected count = signal(0);

  // Derives a read-only value from count.
  protected doubleCount = computed(() => this.count() * 2);

  // Keep the effect reference from being reassigned.
  private readonly countLog = effect(() => {
    console.log('Count changed:', this.count())
  });

  protected increaseCounter() {
    // Add one to the current signal value.
    this.count.update(value => value + 1);
  }

  protected decreaseCounter() {
    this.count.update(value => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
