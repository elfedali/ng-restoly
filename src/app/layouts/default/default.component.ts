import { Component } from "@angular/core";

@Component({
  selector: "app-default",
  template: `
    <app-navbar></app-navbar>
    <app-alert></app-alert>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class DefaultComponent {}
