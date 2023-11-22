import { SharedModule } from "src/app/shared/shared.module";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { EntityRoutingModule } from "./entity-routing.module";
import { EntityComponent } from "./entity.component";

@NgModule({
  declarations: [EntityComponent],
  imports: [CommonModule, EntityRoutingModule, SharedModule],
})
export class EntityModule {}
