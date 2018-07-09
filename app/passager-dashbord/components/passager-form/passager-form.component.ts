import { Passager } from "./../../models/passager.interface";
import { Component, Input } from "@angular/core";

@Component({
    selector: `passager-form`,
    styleUrls: ["passager-form.component.scss"],
    template: `
    <form #form="ngForm" novalidate>
        {{ detail | json }}

        <div>
            Passager Name: 
            <input type="text"
            name="fullName"
            [ngModel]="detail?.fullname">
        </div>

        <div>
            Passager ID: 
            <input type="number"
            name="id"
            [ngModel]="detail?.id">
        </div>

        <div>
            <label>
                <input
                [value]="true"
                type="radio"
                name="checkIn"
                (ngModelChange)="toggleCheckIn($event)"
                [ngModel]="detail?.checkIn">
                Yes
            </label>
            <label>
                <input
                [value]="false"
                type="radio"
                name="checkIn"
                (ngModelChange)="toggleCheckIn($event)"
                [ngModel]="detail?.checkIn">
                No
            </label>
        </div>

        <div *ngIf="form.value.checkIn">
            Check in date:
            <input
            type="number"
            name="checkInDate"
            [ngModel]="detail?.checkInDate"
            >
        </div>

        {{ form.value | json }}
    </form>
    `
})
export class PassagerFormComponent {
    @Input() detail: Passager;

    public toggleCheckIn(checkIn: boolean): any {
        console.log(checkIn)
        if (checkIn) {
            this.detail.checkInDate = Date.now();
        }
    }
}
