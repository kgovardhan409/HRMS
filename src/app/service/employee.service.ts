import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // employees: Employee[] = [
  //   {
  //     id: 1,
  //     name: "John",
  //     dob: "01/01/1994",
  //     organization: "XYZ Company",
  //     joiningDate: '28/02/2001',
  //     salary: 1200000,
  //     address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
  //     phoneNumber: 6361798441,
  //     emailId: "kgovardhan409@gmail.com"
  //   }, 
  //   {
  //     id: 2,
  //     name: "Doe",
  //     dob: "01/01/1995",
  //     organization: "ABC Company",
  //     joiningDate: '28/02/2001',
  //     salary: 1200000,
  //     address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
  //     phoneNumber: 6361798441,
  //     emailId: "kgovardhan409@gmail.com"
  //   },
  //   {
  //     id: 3,
  //     name: "Kumar",
  //     dob: "01/01/1992",
  //     organization: "Google Company",
  //     joiningDate: '28/02/2003',
  //     salary: 100000,
  //     address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
  //     phoneNumber: 6361798441,
  //     emailId: "kgovardhan409@gmail.com"
  //   },
  //   {
  //     id: 4,
  //     name: "Eswar",
  //     dob: "01/01/1992",
  //     organization: "ABC Company",
  //     joiningDate: '28/02/2010',
  //     salary: 700000,
  //     address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
  //     phoneNumber: 6361798441,
  //     emailId: "kgovardhan409@gmail.com"
  //   },
  //   {
  //     id: 5,
  //     name: "Pavan",
  //     dob: "01/01/1993",
  //     organization: "CCP Company",
  //     joiningDate: '28/02/2001',
  //     salary: 1000000,
  //     address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
  //     phoneNumber: 9000722046,
  //     emailId: "kpavankumar623@gmail.com"
  //   }
  // ]

  getEmployeesUrl: string = "	https://dummy.restapiexample.com/api/v1/employees";

  getEmployeeByIdUrl: string = "https://dummy.restapiexample.com/api/v1/employee/";

  deleteUrl: string = "https://dummy.restapiexample.com/api/v1/delete/";

  updateEmployeeUrl:string = "https://dummy.restapiexample.com/api/v1/update/";

  createNewEmployeeUrl = "	https://dummy.restapiexample.com/api/v1/create";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
      return this.http.get(this.getEmployeesUrl);
      // .pipe(
        // catchError( (error: any) => {
        //   console.log(error);
        // })
      // )
  }

  getEmployeeByEmployeeId(employeeId: any): Observable<any>{
    return this.http.get(this.getEmployeeByIdUrl+employeeId)
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete(this.deleteUrl+id);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    const url = "";
    return this.http.put(this.updateEmployeeUrl+id, employee);
  }


  createNewEmployee(employeeData: Employee): Observable<any>{
    return this.http.post(this.createNewEmployeeUrl, employeeData);
  }

}
