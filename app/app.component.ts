import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <button (click)="handleClick()">click here</button>
      <input type="text" [value]="name" 
      (input)="handleInput($event)"
      (blur)="handleBlur($event)"/>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  public name: string = "guelfi";

  private handleBlur(event: any): void {
    this.name = event.target.value;
  }

  private handleInput(event: any): void {
    this.name = event.target.value;
  }

  private handleClick(event: any): void {
    this.name = `fabio guelfi`;
  }
}
