import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title}}!
      <p>{{ number_1 + number_2 }}</p>
    </div>
  `
})
export class AppComponent {
  public title: string;
  public number_1: number = 1;
  public number_2: number = 2;
  constructor() {
    this.title = `Ultimate Angular`
  }
}
