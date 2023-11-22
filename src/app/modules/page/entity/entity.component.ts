import { WpPostService } from "src/app/core/services/wp/post.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-entity",
  template: `
    <h1 class="mb-3">Liste des restaurants</h1>
    <ng-container *ngIf="loading; else loadedContent">
      <div class="d-flex justify-content-center">
        <div class="spinner-border"></div>
      </div>
    </ng-container>
    <ng-template #loadedContent>
      <ng-container *ngIf="posts.length === 0; else hasPosts">
        <p class="text-center bg-warning">Aucun restaurant trouvé</p>
      </ng-container>
      <ng-template #hasPosts>
        <table class="table table-striped">
          <thead>
            <th>Identifiant</th>
            <th>Titre</th>
            <th>Propriétaire</th>
            <th>Date de création</th>
            <th class="text-center">Actions</th>
          </thead>
          <tbody>
            <tr *ngFor="let post of posts">
              <td><span [innerHTML]="post.id"></span></td>
              <td>
                <a [routerLink]="['/restaurants', post.id]">
                  <span [innerHTML]="post.title.rendered"></span>
                </a>
              </td>
              <td>
                <app-user [userId]="post.author"></app-user>
              </td>
              <td>
                <span
                  [innerHTML]="post.date | date : 'dd/MM/yyyy HH:mm'"
                ></span>
              </td>
              <td class="text-center">
                <a
                  [routerLink]="['/restaurants', post.id]"
                  class="btn btn-sm me-1 btn-primary"
                >
                  <i class="fa fa-eye"></i>
                </a>
                <a
                  [routerLink]="['/restaurants', post.id, 'edit']"
                  class="btn btn-sm me-1 btn-warning"
                >
                  <i class="fa fa-edit"></i>
                </a>
                <button class="btn btn-sm btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </ng-template>
    </ng-template>
  `,
  styles: [],
})
export class EntityComponent implements OnInit {
  posts: any[] = [];
  loading = true;

  constructor(private wpPostsService: WpPostService) {}

  ngOnInit(): void {
    this.wpPostsService.getPosts().subscribe(
      (posts: any) => {
        this.posts = posts;
      },
      (error) => console.error("Error fetching posts:", error),
      () => (this.loading = false)
    );
  }
}
