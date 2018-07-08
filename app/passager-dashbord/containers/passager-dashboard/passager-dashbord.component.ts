import { Component } from "@angular/core";
import { Passager } from "../../models/passager.interface";

@Component({
    selector: 'passager-dashbord',
    styleUrls: ['passager-dashbord.component.scss'],
    template: `
    <div>
    <passager-count></passager-count>
    <passager-detail></passager-detail>
        <h3>Airline passagers</h3>
        <ul>
        <li *ngFor="let passager of passagers; let i = index;">
        <span class="status" [style.backgroundColor]="(passager.checkIn ? '#32e565' : '#e83e32')"></span>
        {{ i }}: {{ passager.fullname }}
        <p>{{ passager | json }}</p>
        <div class="data">
            Check in date: 
            {{ passager.checkInDate ? (passager.checkInDate | date: 'yMMMd') : 'Passager not checked' }}
        </div>
        <div class="children">
            Children: {{ passager.children?.length || 0 }}
        </div>
        </li>
        </ul>
    </div>
    `
})
export class PassagerDashbordComponent {
    public passagers: Array<Passager> = [
        {
            id: 1,
            fullname: "Fabio guelfi",
            checkIn: true,
            checkInDate: 14916020300,
            children: [{ name: "ivar", age: 7 }]
        },
        {
            id: 2,
            fullname: "Renata guelfi",
            checkIn: false,
            checkInDate: null
        },
        {
            id: 3,
            fullname: "Ana Julgia guelfi",
            checkIn: true,
            checkInDate: 18916020300
        },
        {
            id: 4,
            fullname: "Ivar guelfi",
            checkIn: false,
            checkInDate: 12916020300
        }
    ];
}
