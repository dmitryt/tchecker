import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
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
  private cls = bem(selector);
  constructor() { }

  ngOnInit() {
  }

}
