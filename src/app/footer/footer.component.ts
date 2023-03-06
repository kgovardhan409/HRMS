import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  name: string = '';

  constructor(private userService: UserService){
    this.name = userService.myApplicationName;
  }



}
