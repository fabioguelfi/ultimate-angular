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
    this.passagerDashbordServices
      .getPassagers()
      .subscribe(
        (res: Array<Passager>) => (this.passagers = res),
        err => console.log(err)
      );
  }

  public handleEdit(event): void {
    console.log(event);
    this.passagerDashbordServices
      .updatePassager(event)
      .subscribe((data: Passager) => {
        this.passagers = this.passagers.map((passager: Passager) => {
          if (passager.id === event.id) {
            passager = Object.assign({}, passager, event);
          }
          return passager;
        });
      });
  }

  public handleRemove(event): void {
    console.log(event);
    this.passagerDashbordServices.removePassager(event).subscribe(
      (data: Passager) => {
        this.passagers = this.passagers.filter((passager: Passager) => {
          return passager.id !== event.id;
        });
      }
    )
  }

}
