import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <p [innerHtml]="title"></p>
      <p>{{title}}</p>
      <img [src]="logo">
      <input type="text" [value]="name" />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  public title: string;
  public logo: string = 'img/logo.svg';
  public name: string = 'guelfi';
  constructor() {
    this.title = `Ultimate Angular`
  }
}
