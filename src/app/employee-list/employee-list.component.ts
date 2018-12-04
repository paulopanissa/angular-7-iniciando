import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(e) {
    return  e.salary > 2500 ? 'green' : null;
  }

}
