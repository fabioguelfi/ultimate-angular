import { PassagerDashbordServices } from "./../../services/passager-dashbord.service";
import { Component, OnInit } from "@angular/core";
import { Passager } from "../../models/passager.interface";

@Component({
  selector: "passager-dashbord",
  styleUrls: ["passager-dashbord.component.scss"],
  template: `
    <div>
        <passager-count
        [items]="passagers"
        ></passager-count>

        <div *ngFor="let passager of passagers">
            {{ passager.fullname }}
        </div>

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
export class PassagerDashbordComponent implements OnInit {
  public passagers: Array<Passager>;

  constructor(private passagerDashbordServices: PassagerDashbordServices) { }

  ngOnInit(): void {
    this.passagerDashbordServices.getPassagers()
      .subscribe(
        (res: Array<Passager>) => this.passagers = res,
        err => console.log(err)
      )
  }

  public handleRemove(event): void {
    console.log(event);
  }

  public handleEdit(event): void {
    console.log(event);
  }
}
