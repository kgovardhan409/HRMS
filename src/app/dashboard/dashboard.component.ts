import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employees: number = 25;

  leaves: number = 15;

  name?: string;

  users: any[] = [];

  someError: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.name = this.userService.myApplicationName;

    this.userService.getUsers().subscribe(
      // function(response){
      //     console.log(response);
      // }

      // (response) => {
      //   console.log(response)
      // }

      response => { 
        this.users = response; 
        this.someError = response.status 
      },
      error => {
        alert("Something went wrong")
        this.someError = error.status;
      }
    )
  }

}
