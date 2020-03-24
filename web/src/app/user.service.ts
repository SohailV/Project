import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";


@Injectable()
  export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/users/', userData)
  }
  onLogin(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/', userData)
  }
  userDetails(userData): Observable<any> {
     
    return this.http.get('http://127.0.0.1:8000/api/about/', userData)
  }
 
  
}
