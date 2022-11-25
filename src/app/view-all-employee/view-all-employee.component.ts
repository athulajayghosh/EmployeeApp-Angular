import { Component } from '@angular/core';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css']
})
export class ViewAllEmployeeComponent {

data:any = [
  {
  name : "Athul",
  EmpCode:"101",
  Designation:"TMC",
  Salary:45000,
  PhoneNo:9875641230,
  Email:"abc@nest.com",
  CompanyWebsite:"www.abc.com",
  Experiance:10
  },
  {
    name : "Akshay",
    EmpCode:"102",
    Designation:"TMC",
    Salary:35000,
    PhoneNo:8796541240,
    Email:"abc@nest.com",
    CompanyWebsite:"www.abc.com",
    Experiance:8
    },
    {
      name : "Vaisak",
      EmpCode:"103",
      Designation:"TMC",
      Salary:40000,
      PhoneNo:8457853652,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:5
    },
    {
      name : "Adithya",
      EmpCode:"104",
      Designation:"TMC",
      Salary:10000,
      PhoneNo:9865752456,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:1
    },
    {
      name : "Ahnaf",
      EmpCode:"101",
      Designation:"TMC",
      Salary:45000,
      PhoneNo:9875641230,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:10
      },
    {
      name : "Prince",
      EmpCode:"102",
      Designation:"TMC",
      Salary:35000,
      PhoneNo:8796541240,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:8
    },
    {
      name : "Unni",
      EmpCode:"103",
      Designation:"TMC",
      Salary:40000,
      PhoneNo:8457853652,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:5
    },
    {
      name : "Abhinand",
      EmpCode:"104",
      Designation:"TMC",
      Salary:10000,
      PhoneNo:9865752456,
      Email:"abc@nest.com",
      CompanyWebsite:"www.abc.com",
      Experiance:1
    }
]

}
