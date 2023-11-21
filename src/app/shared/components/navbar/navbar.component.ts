import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="'/'">{{ title }}</a>

        <!-- Step 3: Toggle the value of the property when the toggler button is clicked. -->
        <button
          class="navbar-toggler"
          type="button"
          (click)="isMenuCollapsed = !isMenuCollapsed"
        >
          &#9776;
        </button>

        <!-- Step 2: Add the ngbCollapse directive to the element below. -->
        <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!-- Step 4: Close the menu when a link is clicked. -->
              <a
                class="nav-link"
                [routerLink]="'/dashboard'"
                (click)="isMenuCollapsed = true"
                >Dashboard</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="'/users'"
                (click)="isMenuCollapsed = true"
                >Users</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="'/restaurants'"
                (click)="isMenuCollapsed = true"
                >Restaurants</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  isMenuCollapsed = true;
  title = "Restoly";
}
