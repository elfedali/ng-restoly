import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { AlertComponent } from "./components/alert/alert.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, AlertComponent, FooterComponent],
  imports: [CommonModule, RouterLink, NgbCollapseModule],
  exports: [NavbarComponent, AlertComponent, FooterComponent],
})
export class SharedModule {}
