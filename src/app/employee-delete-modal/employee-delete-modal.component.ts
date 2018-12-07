import { Component, OnInit, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDelete: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private el: ElementRef,
    private employeeService: EmployeeService) { }

  ngOnInit() { }

  destroy() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.deleteEmployee(this.employee);
    this.onDelete.emit(copy);
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
    return el.firstChild as HTMLElement;
  }

}
