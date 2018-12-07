import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  @Output() onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  constructor(private employeeService: EmployeeService,
    private el: ElementRef) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  private getDivModal(): HTMLElement {
    const el: HTMLElement = this.el.nativeElement;
    return el.firstChild.firstChild as HTMLElement;
  }

}
