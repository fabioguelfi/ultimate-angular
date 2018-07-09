import { RouterModule, Routes } from '@angular/router';
import { PassagerFormComponent } from './components/passager-form/passager-form.component';
import { PassagerDashbordServices } from './services/passager-dashbord.service';
import { PassagerCountComponent } from './components/passager-count/passager-count.component';
import { PassagerDashbordComponent } from './containers/passager-dashboard/passager-dashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassagetDetailComponent } from './components/passager-detail/passager-detail.component';
import { HttpModule } from '@angular/http';
import { PassagerViewerComponent } from './containers/passager-viewer/passager-viewer.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
    {
        path: 'passagers',
        component: PassagerDashbordComponent
    }
]
@NgModule({
    declarations: [
        PassagerDashbordComponent,
        PassagerCountComponent,
        PassagetDetailComponent,
        PassagerViewerComponent,
        PassagetDetailComponent,
        PassagerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
    ],
    providers: [
        PassagerDashbordServices
    ]
})
export class PassagerDashbordModule {

}