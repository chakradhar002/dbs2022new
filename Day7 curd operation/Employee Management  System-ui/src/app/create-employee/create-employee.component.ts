import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,  private router: Router) { }

  ngOnInit() {
  }

  // add the functionality on create employee
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

    //  send  or submit  the ui value  to back end
  save() {
    // calling service class from here
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    //calling save method is calling  from here
  }

  // navige to othe funcaionality
  gotoList() {
    this.router.navigate(['/employees']); //calling the route here
  }
}
