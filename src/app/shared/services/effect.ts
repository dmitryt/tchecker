import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {DBService} from './db.service';

import {
  getSubscriptionsAction,
  getReportsAction,
  FETCH_REPORTS,
  ADD_REPORTS,
  FETCH_SUBSCRIPTIONS,
  ADD_SUBSCRIPTION,
  UPDATE_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from '../state';

import {NotificationService} from './notification.service';
import {DataService} from './data.service';

const ITEM_UPDATE_MSG = 'Item has been updated successfully';
const ITEM_ADD_MSG = 'Item has been added successfully';
const ITEM_REMOVE_MSG = 'Item has been removed successfully';
const REPORTS_ADD_MSG = 'Reports have been generated successfully';

@Injectable()
export class SubscriptionEffects {

  constructor(
    private actions$: Actions,
    private dbService: DBService,
    private notificationService: NotificationService,
    private dataService: DataService,
  ) {

  }

  fetchReports() {
    return () => {
      return this.dbService.getReports()
      // If successful, dispatch success action with result
      .map(payload => getReportsAction(payload))
      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: 'REQUEST_FAILED' }))
    };
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

  updateSubscriptions({type, message, modifier}) {
    return this.actions$
    .ofType(type)
    .switchMap(modifier)
    .switchMap(() => {
      const cb = this.fetchSubscriptions();
      this.notificationService.push({message});
      return cb();
    });
  }

  @Effect() addedSubs$ = this.updateSubscriptions({
    type: ADD_SUBSCRIPTION, message: ITEM_ADD_MSG, modifier: ({payload}) => this.dbService.addSubscription(payload)
  });
  @Effect() updatedSubs$ = this.updateSubscriptions({
    type: UPDATE_SUBSCRIPTION, message: ITEM_UPDATE_MSG, modifier: ({payload}) => this.dbService.updateSubscription(payload)
  });
  @Effect() removedSubs$ = this.updateSubscriptions({
    type: REMOVE_SUBSCRIPTION, message: ITEM_REMOVE_MSG, modifier: ({payload}) => this.dbService.removeSubscription(payload)
  });

  @Effect() subscriptions$ = this.actions$
    .ofType(FETCH_SUBSCRIPTIONS)
    .switchMap(this.fetchSubscriptions())
  ;

  @Effect() addedReports$ = this.actions$
    .ofType(ADD_REPORTS)
    .switchMap(({payload}) => {
      return this.dbService.addReports(payload);
    })
    .switchMap(() => {
      const cb = this.fetchReports();
      this.dataService.pushDesktopNotification(REPORTS_ADD_MSG);
      return cb();
    })
    .catch(s => {
      debugger;
      return [];
    })
  ;

  @Effect() reports$ = this.actions$
    .ofType(FETCH_REPORTS)
    .switchMap(this.fetchReports());
  ;
}
