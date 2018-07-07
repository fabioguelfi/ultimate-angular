import { Component } from "@angular/core";

interface Passager {
  id: number;
  fullname: string;
  checkIn: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline passagers</h3>
      <template ngFor let-passager let-i="index" [ngForOf]="passagers">
        <li>
        {{ i }}: {{ passager.fullname }}
        </li>
      </template>
      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passager of passagers; let i = index;">
        {{ i }}: {{ passager.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  public passagers: Array<Passager> = [
    {
      id: 1,
      fullname: "Fabio guelfi",
      checkIn: true
    },
    {
      id: 2,
      fullname: "Renata guelfi",
      checkIn: true
    },
    {
      id: 3,
      fullname: "Ivar guelfi",
      checkIn: false
    }
  ];
}
