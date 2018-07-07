import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
     <button (click)="handleClick(username.value)">Click Here</button>
     <input type="text" #username />
     <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  public name: string = "guelfi";

  private handleClick(value: string): void {
    console.log(value)
  }
}
