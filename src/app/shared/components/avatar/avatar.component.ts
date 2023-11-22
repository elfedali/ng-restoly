import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avatar",
  template: `
    <div class="avatar">
      <img src="{{ src }}" alt="Avatar" class="avatar-img rounded-circle" />
    </div>
  `,
  styles: [
    `
      .avatar {
        position: relative;
        display: inline-block;
      }
      .avatar-img {
        height: 36px;
        width: 36px;
      }
    `,
  ],
})
export class AvatarComponent {
  @Input() src: string | undefined;
}
