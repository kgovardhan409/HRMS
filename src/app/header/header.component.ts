import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  profileSize: string = "50px"

  profileImage: string = "https://kgovardhan409.github.io/kgovardhan_portfolio/img/g-logo.png";

  constructor(private authService: AuthService, private router: Router){}


  showMessage(){
    alert("Profile section coming soon!!!")
  }

  signOut(){
    this.authService.setLoggedInValue(false);

    this.authService.getLoggedInValue().subscribe(
      (data) => console.log("logout "+data)
    )

    this.router.navigateByUrl('login');

  }


}
