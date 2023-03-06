import { Component } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  isLarge: boolean = true;

  myCondtion: boolean = false;

  isEmployeeResigned: string = "Eswar";

  selectedEmployee ?: Employee ;

  editEmployeeOpened: boolean = false;


  employees: Employee[] = [];

  responseStatusFailure = false;

  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(){
    // this.employees = this.employeeService.employees;

    this.employeeService.getEmployees().subscribe( (response) => {
      if(response.status == "success"){
        this.employees = response.data;
      }
    } ,
   (error: any) => {
    console.log("error: ", error);
    this.responseStatusFailure = true;
   }
    )
  }


  editEmployee(employee: Employee){
    this.editEmployeeOpened = true;
    console.log("employee ", employee);
    this.selectedEmployee = employee;
  }

  receiveDataFromChild(event: Employee){
      

      this.employees.forEach((d, i) => {
        if(event.id == d.id){
          console.log(d, i);
          this.employees[i] = event;
        }
      })
      this.editEmployeeOpened = false;
  }

}
