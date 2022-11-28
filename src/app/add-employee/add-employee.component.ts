import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  EmpCode=""
  name=""
  Designation=""
  Salary=""
  PhoneNo=""
  Email=""
  CompanyWebsite=""
  Experiance=""

  readValues=()=>
  {
    let data:any={
      name : this.name,
      EmpCode:this.EmpCode,
      Designation:this.Designation,
      Salary:this.Salary,
      PhoneNo:this.PhoneNo,
      Email:this.Email,
      CompanyWebsite:this.CompanyWebsite,
      Experiance:this.Experiance
      }
      console.log(data)
  }
}
