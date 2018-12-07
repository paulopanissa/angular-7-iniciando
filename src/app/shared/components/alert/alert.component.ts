import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input()
  alert: string;

  @Input()
  message: string;

  constructor() { }

  ngOnInit() {
  }

  alertStyle() {
    return `alert-${this.alert}`;
  }

}
