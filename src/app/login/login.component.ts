import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginSevice: LoginService, private router: Router, 
              private authService: AuthService      
    ){}


  verifyLogin(email: string, password: string){

    let loginData = {
      username: email,
      password: password
    }

    this.loginSevice.checkLogin(loginData).subscribe(
      (resp) => {
        alert("Welcome to HRMS!");
        this.authService.setLoggedInValue(true);
        this.router.navigateByUrl('dashboards');
      },
      () => {
        alert("Invalid Credentials");
      }
    )
  }

}
