import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WpPostService {
  private apiUrl = environment.apiUrl + "/posts";
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl);
  }
  getPostById(id: number) {
    return this.http.get(this.apiUrl + "/" + id);
  }
  getPostBySlug(slug: string) {
    return this.http.get(this.apiUrl + "?slug=" + slug);
  }
}
