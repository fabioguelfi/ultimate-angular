import { PassagerDashbordComponent } from './containers/passager-dashboard/passager-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PassagerDashbordComponent,
    ], 
    imports: [
        CommonModule
    ],
    exports: [
        PassagerDashbordComponent,
    ]
})
export class PassagerDashbordModule {
}