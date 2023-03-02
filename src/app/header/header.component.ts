import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  profileSize: string = "50px"

  profileImage: string = "https://kgovardhan409.github.io/kgovardhan_portfolio/img/g-logo.png";


  showMessage(){
    alert("Profile section coming soon!!!")
  }
}
