import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import {IAppState} from '../index';
import {pushNotificationAction, removeNotificationAction} from '../state';


@Injectable()
export class NotificationService {
  constructor(private store: Store<IAppState>) {
  }

  push(message: string) {
    this.store.dispatch(pushNotificationAction(message));
  }

  remove(index: number) {
    this.store.dispatch(removeNotificationAction(index));
  }


}
