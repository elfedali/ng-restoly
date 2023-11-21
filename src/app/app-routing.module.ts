import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/default/default.module").then((m) => m.DefaultModule),
  },
  {
    path: "e",
    loadChildren: () =>
      import("./layouts/error/error.module").then((m) => m.ErrorModule),
  },
  {
    path: "s",
    loadChildren: () =>
      import("./layouts/auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
