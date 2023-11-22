import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { AlertComponent } from "./components/alert/alert.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [
    NavbarComponent,
    AlertComponent,
    FooterComponent,
    UserComponent,
    AvatarComponent,
  ],
  imports: [CommonModule, RouterLink, NgbCollapseModule],
  exports: [
    NavbarComponent,
    AlertComponent,
    FooterComponent,
    UserComponent,
    AvatarComponent,
  ],
})
export class SharedModule {}
