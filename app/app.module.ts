// stand
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

// components
import { AppComponent } from "./app.component";

// modules
import { PassagerDashbordModule } from "./passager-dashbord/passager-dashboard.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, PassagerDashbordModule]
})
export class AppModule {}
