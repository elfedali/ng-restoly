import { WpUserService } from "src/app/core/services/wp/user.service";

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <div *ngIf="user" class="d-flex align-items-center">
      <app-avatar [src]="user.avatar_urls[24]"></app-avatar>
      <span class="ms-2" [innerHTML]="user.name"></span>
    </div>
    <p *ngIf="!user">User not found.</p>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  @Input() userId: number | undefined;
  user: any; // Update the type based on your actual user data structure

  constructor(private wpUserService: WpUserService) {}

  ngOnInit(): void {
    if (this.userId) {
      this.wpUserService.getUserById(this.userId).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error("Error fetching user:", error);
        }
      );
    } else {
      console.error("User ID not provided.");
    }
  }
}
