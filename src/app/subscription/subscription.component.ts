import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import bem from 'bem-cn';

import {ISubscription, IAppState, IReport} from '../shared';

const selector = 'tch-subscription';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  private modal: Object;
  @Input('data') data: ISubscription;
  @Output() onEdit = new EventEmitter();
  @Output() onRemove = new EventEmitter();
  private cls = bem(selector);
  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  showReports() {
    this.modal = {
      hideButtons: true,
      reports$: this.store.select('reports').map((reports:IReport[]) => {
        return reports.filter(r => r.subscription_id === this.data.id);
      })
    };
  }

  _onEdit() {
    this.onEdit.emit();
  }

  _onRemove() {
    this.onRemove.emit();
  }

  onCloseDialog(promise, id) {
    this.modal = null;
    promise.then(() => {
    })
    .catch(() => {});
  }

}
