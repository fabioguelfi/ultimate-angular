import { Passager } from "./../../models/passager.interface";
import { Component, Input } from "@angular/core";

@Component({
    selector: "passager-count",
    template: `
        <div>
            <h3>Airline passagers!</h3>
            <div>
                Total Checked in: {{ checkedInCount() }}/{{ items?.length }}
            </div>
        </div>
    `
})
export class PassagerCountComponent {
    @Input() items: Array<Passager>;

    private checkedInCount(): number {
        if (!this.items) return;
        return this.items.filter((passager: Passager) => passager.checkIn).length;
    }
}
