import { Passager } from './../../models/passager.interface';
import { Component, Input } from "@angular/core";

@Component({
    selector: `passager-detail`,
    styleUrls: ['passager-detail.component.scss'] ,
    template: `
        <div>
            <span class="status" [style.backgroundColor]="(detail.checkIn ? '#32e565' : '#e83e32')"></span>
            {{ detail.fullname }}
                <div class="data">
                    Check in date: 
                    {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd') : 'detail not checked' }}
                </div>
                <div class="children">
                    Children: {{ detail.children?.length || 0 }}
                </div>
        </div>
    `
})
export class PassagetDetailComponent {
    @Input() detail: Passager;
}
