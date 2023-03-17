import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginSevice: LoginService, private router: Router){}


  verifyLogin(email: string, password: string){

    let loginData = {
      username: email,
      password: password
    }

    this.loginSevice.checkLogin(loginData, 'govardhan').subscribe(
      (resp) => {
        alert("Welcome to HRMS!");
        this.router.navigateByUrl('dashboards');
      },
      () => {
        alert("Invalid Credentials");
      }
    )
  }

}
