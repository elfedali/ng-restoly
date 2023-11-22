import { environment } from "src/environments/environment";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private apiUrl = environment.apiUrl + "/dashboard";
  constructor(private http: HttpClient) {}
}
