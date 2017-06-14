import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import bem from 'bem-cn';

const selector = 'tch-notification';
@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private cls = bem(selector);
  constructor() { }

  ngOnInit() {
  }

}
