import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httHeaders ?: any;

  constructor(private http : HttpClient) { }

  checkLogin(loginData: Login): Observable<any>{
    
    this.httHeaders = {
      header: new HttpHeaders({'content-Type': 'application/json'})
    }

    // params and headers example
    // return this.http.post("https://dummyjson.com/auth/login?name="+myname+"&age=28", lginData, this.httHeaders);

    return this.http.post("https://dummyjson.com/auth/login", loginData, this.httHeaders);
  }

}
