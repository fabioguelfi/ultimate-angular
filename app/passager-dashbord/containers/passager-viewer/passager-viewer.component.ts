import { PassagerDashbordServices } from "./../../services/passager-dashbord.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Passager } from "../../models/passager.interface";

@Component({
    selector: "passager-viewer",
    styleUrls: ["passager-viewer.component.scss"],
    template: `
        <div>
            <passager-form
            (update)="onUpdatePassager($event)"
            [detail]="passager">

            </passager-form>
        </div>
    `
})
export class PassagerViewerComponent implements OnInit {
    public passager: Passager;

    constructor(private passagerDashbordServices: PassagerDashbordServices) { }

    ngOnInit(): void {
        this.passagerDashbordServices
            .getPassager(1)
            .subscribe((data: Passager) => (this.passager = data));
    }

    private onUpdatePassager(event: Passager): void {
        this.passagerDashbordServices.updatePassager(event)
        .subscribe(
            (data: Passager) => {
                this.passager = Object.assign({}, this.passager, event);
            }
        )
    }
}
