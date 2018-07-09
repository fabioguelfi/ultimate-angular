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

        {{ form.value | json }}
    </form>
    `
})
export class PassagerFormComponent {
  @Input() detail: Passager;
}
