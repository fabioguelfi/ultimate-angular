import { Component } from "@angular/core";
import { Passager } from "../../models/passager.interface";

@Component({
    selector: "passager-dashbord",
    styleUrls: ["passager-dashbord.component.scss"],
    template: `
    <div>
        <passager-count
        [items]="passagers"
        ></passager-count>

        <passager-detail
        *ngFor="let passager of passagers"
        [detail]="passager"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        >
        </passager-detail>
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

    public handleRemove(event): void {
        console.log(event);
    }

    public handleEdit(event): void {
        console.log(event);
    }
}
