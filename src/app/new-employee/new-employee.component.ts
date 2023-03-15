import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent {

  employeeName: string = "Naveeen";

  employeeObj: Employee = {
              employee_name: '',
              employee_age: 0,
              employee_salary: 0
            }

  isSubmitted: boolean = false;
  
  newEmpForm : any;


            constructor(private emplyoeeService: EmployeeService,
                        private route: Router){

            }


            saveEmployee(myFormValidation: any){
              
              this.isSubmitted = true;

              if(myFormValidation.valid)
              {
              console.log(this.employeeObj);
              this.emplyoeeService.createNewEmployee(this.employeeObj).subscribe(
                (res) => {
                  //Success
                  alert("Employee is created successfully");
                  this.route.navigateByUrl("/employee");
                },
                () => {
                  //Error
                  alert("Sorry! Employee not created, please try again!")
                }
              );

              } 
              // else {
              //   alert("Please fill data");
              // }
            }

}
