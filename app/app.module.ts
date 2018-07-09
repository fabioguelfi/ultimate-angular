// stand
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// components
import { AppComponent } from "./app.component";

// modules
import { PassagerDashbordModule } from "./passager-dashbord/passager-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, PassagerDashbordModule, RouterModule]
})
export class AppModule {}
