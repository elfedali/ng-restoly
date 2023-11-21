import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultComponent } from "./default.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../../modules/page/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "users",
        loadChildren: () =>
          import("../../modules/page/users/users.module").then(
            (m) => m.UsersModule
          ),
      },
      {
        path: "restaurants",
        loadChildren: () =>
          import("../../modules/page/entity/entity.module").then(
            (m) => m.EntityModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
