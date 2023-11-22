import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WpUserService {
  private apiUrl = environment.apiUrl + "/users";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }
  getUserById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
