import { Passager } from './../../models/passager.interface';
import { Component, Input } from "@angular/core";

@Component({
    selector: `passager-form`,
    styleUrls: ["passager-form.component.scss"],
    template: `
    <div>
        <div>
            {{ detail | json }}
        </div>
    </div>
    `
})
export class PassagerFormComponent {
    @Input() detail: Passager;

}
