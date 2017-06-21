import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import bem from 'bem-cn';

import {INotification} from '../shared/';

const selector = 'tch-notification';
@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private cls = bem(selector);
  @Input('data') data: INotification;
  @Output() onRemove = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  _onRemove() {
    this.onRemove.emit();
  }

}
