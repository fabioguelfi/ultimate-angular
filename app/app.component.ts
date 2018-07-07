import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
     <input type="text"
     [value]="name"
     (input)="handleChange($event.target.value)" />
     <div *ngIf="name.length > 2; else template">
      Searching for ... {{ name }}
     </div>
     <template #template>
      <div>
      Searching for ...
      </div>
     </template>
    </div>
  `
})
export class AppComponent {
  public name: string = "";

  private handleChange(value: string): void {
    this.name = value;
  }
}
