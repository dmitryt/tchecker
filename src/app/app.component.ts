import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import bem from 'bem-cn';

import {
  ISubscription,
  Subscription,
  INotification,
  IAppState,
  DBService,
  NotificationService,
  FETCH_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from './shared/';
import fixtures from '../fixtures/db';

const selector = 'tch-root';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscriptions$: Observable<ISubscription[]>;
  private notifications$: Observable<INotification[]>;
  private editedItem: ISubscription;
  private newItem: ISubscription;
  private modal: Object;
  private cls = bem(selector);
  constructor(
    private store: Store<IAppState>,
    private dbService: DBService,
    private notificationService: NotificationService,
  )
  {
    store.dispatch({type: FETCH_SUBSCRIPTIONS});
    this.subscriptions$ = store.select('subscriptions');
    this.notifications$ = store.select('notifications');
  }

  loadFixtures() {
    this.dbService.loadFixtures('subscriptions', fixtures.subscriptions);
  }

  onAdd() {
    this.newItem = new Subscription();
  }

  add(item: ISubscription) {
    this.newItem = null;
    this.store.dispatch({type: UPDATE_SUBSCRIPTION, payload: item});
  }

  edit(item: ISubscription) {
    this.editedItem = item;
  }

  save(item: ISubscription) {
    this.editedItem = null;
    this.store.dispatch({type: UPDATE_SUBSCRIPTION, payload: item});
  }

  remove(id) {
    this.modal = {
      title: 'Warning',
      content: 'Are you sure you want to proceed?',
      itemId: id,
    };
  }

  onRemoveApprove(promise, id) {
    this.modal = null;
    promise.then(() => {
      this.store.dispatch({type: REMOVE_SUBSCRIPTION, payload: id});
    })
    .catch(() => {});
  }

  onNotificationRemove(index) {
    this.notificationService.remove(index);
  }
}
