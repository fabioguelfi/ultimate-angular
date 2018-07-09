import { Baggage } from "./../../models/baggage.interface";
import { Passager } from "./../../models/passager.interface";
import { Component, Input, OnInit } from "@angular/core";

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
            #fullname="ngModel"
            required
            [ngModel]="detail?.fullname">
            <div *ngIf="fullname?.errors?.required && fullname.dirty" class="error">
                Passager: name is required
            </div>
        </div>

        <div>
            Passager ID: 
            <input type="number"
            name="id"
            required
            #id="ngModel"
            [ngModel]="detail?.id">
            <div *ngIf="id?.errors?.required && id.dirty" class="error">
            Passager: ID is required
            </div>
        </div>

        <div>
            <label>
                <input
                type="checkbox"
                name="checkIn"
                (ngModelChange)="toggleCheckIn($event)"
                [ngModel]="detail?.checkIn">
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

        <div>
            Luggage:
            <select 
            name="baggage"
            [ngModel]="detail?.baggage">
                <option 
                *ngFor="let item of baggage"
                [value]="item.key"
                [selected]="item.key === detail?.baggage"> 
                {{ item?.value }}
                </option>
            </select>
        </div>

        <div>{{ form.value | json }}</div>
        <div>Valid: {{ form.valid | json }}</div>
        <div>Invalid: {{ form.invalid | json }}</div>
    </form>
    `
})
export class PassagerFormComponent implements OnInit {
    @Input() detail: Passager;

    public baggage: Array<Baggage>;

    ngOnInit(): void {
        this.baggage = [
            {
                key: "none",
                value: "no baggage"
            },
            {
                key: "hand-only",
                value: "Hand baggage"
            },
            {
                key: "hold-only",
                value: "Hold baggage"
            },
            {
                key: "hand-hold",
                value: "Hand and Hold baggage"
            }
        ];
    }

    public toggleCheckIn(checkIn: boolean): any {
        console.log(checkIn);
        if (checkIn) {
            this.detail.checkInDate = Date.now();
        }
    }
}
