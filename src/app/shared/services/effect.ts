import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {DBService} from './db.service';

import {
  getSubscriptionsAction,
  getReportsAction,
  FETCH_REPORTS,
  FETCH_SUBSCRIPTIONS,
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from '../state';

import {NotificationService} from './notification.service';

const ITEM_UPDATE_MSG = 'Item has been updated successfully';
const ITEM_ADD_MSG = 'Item has been added successfully';
const ITEM_REMOVE_MSG = 'Item has been removed successfully';

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

  updateSubscriptions({type, msg, modifier}) {
    return this.actions$
    .ofType(type)
    .switchMap(modifier)
    .switchMap(() => {
      const cb = this.fetchSubscriptions();
      this.notificationService.push(msg);
      return cb();
    });
  }

  @Effect() addedSubs$ = this.updateSubscriptions({
    type: ADD_SUBSCRIPTION, msg: ITEM_ADD_MSG, modifier: ({payload}) => this.dbService.addSubscription(payload)
  });
  @Effect() updatedSubs$ = this.updateSubscriptions({
    type: UPDATE_SUBSCRIPTION, msg: ITEM_UPDATE_MSG, modifier: ({payload}) => this.dbService.updateSubscription(payload)
  });
  @Effect() removedSubs$ = this.updateSubscriptions({
    type: REMOVE_SUBSCRIPTION, msg: ITEM_REMOVE_MSG, modifier: ({payload}) => this.dbService.removeSubscription(payload)
  });

  @Effect() subscriptions$ = this.actions$
    .ofType(FETCH_SUBSCRIPTIONS)
    .switchMap(this.fetchSubscriptions())
  ;

  @Effect() reports$ = this.actions$
    .ofType(FETCH_REPORTS)
    .switchMap(() => {
      return this.dbService.getReports()
      // If successful, dispatch success action with result
      .map(payload => getReportsAction(payload))
      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: 'REQUEST_FAILED' }))
    });
  ;
}
