import { Passager } from "./../../models/passager.interface";
import { Component, Input, Output, OnChanges, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
    selector: `passager-detail`,
    styleUrls: ["passager-detail.component.scss"],
    template: `
        <div>
            <span class="status" [style.backgroundColor]="(detail.checkIn ? '#32e565' : '#e83e32')"></span>
            <div *ngIf="editing">
                <input 
                type="text"
                [value]="detail.fullname"
                (input)="onNameChange(name.value)"
                #name>
            </div>
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
                <div class="data">
                    Check in date: 
                    {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd') : 'detail not checked' }}
                </div>
                <button (click)="toggleEdit()">
                    {{ editing ? 'Done' : 'Edit' }}
                </button>
                <button (click)="onRemove()">
                    Remove
                </button>
        </div>
    `
})
export class PassagetDetailComponent implements OnChanges, OnInit {
    @Input() detail: Passager;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();

    public editing: boolean = false;

    ngOnChanges(changes): void {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
        console.log(`onChanges`)
    }

    ngOnInit(): void {
        console.log(`onInit`)
    }

    private onNameChange(value: string): any {
        this.detail.fullname = value;
    }

    private toggleEdit(): void {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    private onRemove(): void {
        this.remove.emit(this.detail);
    }
}
