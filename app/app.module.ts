// stand
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// components
import { AppComponent } from "./app.component";
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found-component';


// modules
import { PassagerDashbordModule } from "./passager-dashbord/passager-dashboard.module";

const ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    PassagerDashbordModule]
})
export class AppModule { }
