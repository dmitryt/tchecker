import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {DBService} from '../../db.service';

import {FETCH_SUBSCRIPTIONS, UPDATE_SUBSCRIPTION, REMOVE_SUBSCRIPTION, SUBSCRIPTIONS} from './reducer';

@Injectable()
export class SubscriptionEffects {

  constructor(private actions$: Actions, private dbService: DBService) {

  }

  fetchSubscriptions() {
    return () => {
      return this.dbService.getSubscriptions()
      // If successful, dispatch success action with result
      .map(payload => ({ type: SUBSCRIPTIONS, payload }))
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
    .switchMap(this.fetchSubscriptions())
  ;

  @Effect() subscriptions$ = this.actions$
    .ofType(FETCH_SUBSCRIPTIONS)
    .switchMap(this.fetchSubscriptions())
  ;
}
