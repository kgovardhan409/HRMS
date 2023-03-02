import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id: 1,
      name: "John",
      dob: "01/01/1994",
      organization: "XYZ Company",
      joiningDate: '28/02/2001',
      salary: 1200000,
      address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
      phoneNumber: 6361798441,
      emailId: "kgovardhan409@gmail.com"
    }, 
    {
      id: 2,
      name: "Doe",
      dob: "01/01/1995",
      organization: "ABC Company",
      joiningDate: '28/02/2001',
      salary: 1200000,
      address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
      phoneNumber: 6361798441,
      emailId: "kgovardhan409@gmail.com"
    },
    {
      id: 3,
      name: "Kumar",
      dob: "01/01/1992",
      organization: "Google Company",
      joiningDate: '28/02/2003',
      salary: 100000,
      address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
      phoneNumber: 6361798441,
      emailId: "kgovardhan409@gmail.com"
    },
    {
      id: 4,
      name: "Eswar",
      dob: "01/01/1992",
      organization: "ABC Company",
      joiningDate: '28/02/2010',
      salary: 700000,
      address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
      phoneNumber: 6361798441,
      emailId: "kgovardhan409@gmail.com"
    },
    {
      id: 5,
      name: "Pavan",
      dob: "01/01/1993",
      organization: "CCP Company",
      joiningDate: '28/02/2001',
      salary: 1000000,
      address: "4 35, k narasapuram, honnampalli, parigi, hindupur, A.P.",
      phoneNumber: 9000722046,
      emailId: "kpavankumar623@gmail.com"
    }
  ]

  constructor() { }
}
