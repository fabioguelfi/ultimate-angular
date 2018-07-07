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
      <ul>
        <li *ngFor="let passager of passagers; let i = index;">
        <span class="status" [style.backgroundColor]="(passager.checkIn ? '#32e565' : '#e83e32')"></span>
        {{ i }}: {{ passager.fullname }}
        </li>
      </ul>
      <br>
      <h3>Airline passagers</h3>
      <ul>
        <li *ngFor="let passager of passagers; let i = index;">
        <span class="status" 
        [ngStyle]="{ 
          backgroundColor: passager.checkIn ? '#32e565' : '#e83e32'
         }"></span>
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
      checkIn: false
    },
    {
      id: 3,
      fullname: "Ana Julgia guelfi",
      checkIn: true
    },
    {
      id: 4,
      fullname: "Ivar guelfi",
      checkIn: false
    }
  ];
}
