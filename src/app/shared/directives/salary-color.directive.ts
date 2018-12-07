import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  constructor(private el: ElementRef) { }

  @Input()
  set salaryColor(value) {
    const nativeElement: HTMLElement = this.el.nativeElement;
    nativeElement.style.color = parseFloat(value) > 10000 ? 'green' : 'red';
  }

}
