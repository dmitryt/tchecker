import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import bem from 'bem-cn';

import {ISubscription} from '../shared';

const selector = 'tch-subscription';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  @Input('data') data: ISubscription;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  private cls = bem(selector);
  constructor() { }

  ngOnInit() {
  }

  _onEdit() {
    this.onEdit.emit();
  }

  _onRemove() {
    this.onRemove.emit();
  }

}
