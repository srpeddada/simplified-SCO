import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  selectedLogin = new Login();
  readonly URL1 = "https://techavant.herokuapp.com/users/sub";

  constructor(public http: HttpClient) { }

  Search(value) {
     return this.http.post(this.URL1, value, { responseType: "text" as "json" });
  }
}
