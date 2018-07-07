import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <input type="text" 
      [ngModel]="name"
      (ngModelChange)="handleModel($event)"
      [value]="name" 
      />
      <input type="text" 
      [(ngModel)]="name"
      />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  public name: string = "guelfi";

  private handleModel(value: string): void {
    this.name = value;
  }
}
