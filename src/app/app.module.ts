import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ViewAllEmployeeComponent } from './view-all-employee/view-all-employee.component';
const myRoute: Routes=[
  {path:"",
  component:AdminLoginComponent
  },
  {path:"add",
  component:AddEmployeeComponent
  },
  {path:"search",
  component:SearchEmployeeComponent
  },
  {path:"edit",
  component:EditEmployeeComponent
  },
  {path:"delete",
  component:DeleteEmployeeComponent
  },
  {path:"viewall",
  component:ViewAllEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ViewAllEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
