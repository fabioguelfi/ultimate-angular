import { PassagerDashbordServices } from './services/passager-dashbord.service';
import { PassagerCountComponent } from './components/passager-count/passager-count.component';
import { PassagerDashbordComponent } from './containers/passager-dashboard/passager-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassagetDetailComponent } from './components/passager-detail/passager-detail.component';

@NgModule({
    declarations: [
        PassagerDashbordComponent,
        PassagerCountComponent,
        PassagetDetailComponent
    ], 
    imports: [
        CommonModule
    ],
    exports: [
        PassagerDashbordComponent,
    ],
    providers: [
        PassagerDashbordServices
    ]
})
export class PassagerDashbordModule {
}