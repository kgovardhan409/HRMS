import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  dataFromService ?: Employee;
  viewEmployeeId : number = 0;

  constructor(
    private employeeService: EmployeeService,
    private myCurrentRoute: ActivatedRoute
    ){}

  ngOnInit(){
    this.viewEmployeeId = this.myCurrentRoute.snapshot.params['emmployeeId'];
    this.employeeService.getEmployeeByEmployeeId(this.viewEmployeeId).subscribe( resp => {
      if(resp.status == 'success'){
        this.dataFromService = resp.data;
        console.log(this.dataFromService);
      } else {
        alert("Some problem with the data");
      }
      
   },
   (error: any) => {
    console.log("error: ", error);
    alert(error.message);
   }
   
    
    )
  }
  
}
