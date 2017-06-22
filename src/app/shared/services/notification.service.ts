import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import {IAppState, INotification} from '../index';
import {pushNotificationAction, removeNotificationAction} from '../state';

const TIMEOUT = 3000;

@Injectable()
export class NotificationService {
  constructor(private store: Store<IAppState>) {
  }

  push(content: string) {
    const payload = {content, id: new Date().getTime()};
    this.store.dispatch(pushNotificationAction(payload));
    setTimeout(() => this.remove(payload.id), TIMEOUT);
  }

  remove(id: number) {
    this.store.dispatch(removeNotificationAction(id));
  }


}
