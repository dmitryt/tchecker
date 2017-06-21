import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {DBService} from './db.service';

import {
  getSubscriptionsAction,
  FETCH_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from '../state';

import {NotificationService} from './notification.service';

const ITEM_UPDATE_MSG = 'Item has been updated successfully';

@Injectable()
export class SubscriptionEffects {

  constructor(
    private actions$: Actions,
    private dbService: DBService,
    private notificationService: NotificationService,
  ) {

  }

  fetchSubscriptions() {
    return () => {
      return this.dbService.getSubscriptions()
      // If successful, dispatch success action with result
      .map(payload => getSubscriptionsAction(payload))
      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: 'REQUEST_FAILED' }))
    }
  }

  @Effect() removedSubscription$ = this.actions$
    .ofType(REMOVE_SUBSCRIPTION)
    .switchMap(({payload}) => this.dbService.removeSubscription(payload))
    .switchMap(this.fetchSubscriptions())
  ;

  @Effect() updatedSubscription$ = this.actions$
    .ofType(UPDATE_SUBSCRIPTION)
    .switchMap(({payload}) => this.dbService.updateSubscription(payload))
    .switchMap(() => {
      const cb = this.fetchSubscriptions();
      this.notificationService.push(ITEM_UPDATE_MSG);
      return cb();
    });
  ;

  @Effect() subscriptions$ = this.actions$
    .ofType(FETCH_SUBSCRIPTIONS)
    .switchMap(this.fetchSubscriptions())
  ;
}
