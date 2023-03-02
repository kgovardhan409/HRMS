import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title : String = "Welcome to Angular Training";

  numberOfEmployees: number = 100000;

  orgMaxLength: any = 15;

  mysizes: any = 100;

  isDisabledButton : boolean = false;

  profileImage: string = "../../../assets/pexels-photo-771742.webp";

  mymethod(event: any){
    // if(user == "abc"){
    //   this.profileImage = "abc.jpg"
    // } else if(user == 'xyz'){
    //   this.profileImage = "xyz.jpg"
    // }
    console.log(event);
    this.profileImage = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600";
  }



}
