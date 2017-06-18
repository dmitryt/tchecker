import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {DBService} from '../../db.service';

import {FETCH_SUBSCRIPTIONS, SUBSCRIPTIONS} from './reducer';

@Injectable()
export class SubscriptionEffects {

  constructor(private actions$: Actions, private dbService: DBService) {

  }

  @Effect() subscriptions$ = this.actions$
    .ofType(FETCH_SUBSCRIPTIONS)
    .switchMap(() => {
      return this.dbService.getSubscriptions()
      // If successful, dispatch success action with result
      .map(payload => ({ type: SUBSCRIPTIONS, payload }))
      // If request fails, dispatch failed action
      .catch(() => Observable.of({ type: 'REQUEST_FAILED' }))
    });
}
