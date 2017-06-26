import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable, Subscription as _Subscription } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import bem from 'bem-cn';

import {
  ISubscription,
  Subscription,
  INotification,
  IAppState,
  DBService,
  DataService,
  NotificationService,
  FETCH_REPORTS,
  FETCH_SUBSCRIPTIONS,
  UPDATE_SUBSCRIPTION,
  ADD_SUBSCRIPTION,
  REMOVE_SUBSCRIPTION
} from './shared/';
import fixtures from '../fixtures/db';
import {MONITORING_INTERVAL} from '../config';

const selector = 'tch-root';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private timer: _Subscription;
  private time: any;
  private languages: string[];
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
    private dataService: DataService,
  )
  {
    this.languages = ['en', 'ru'];
    store.dispatch({type: FETCH_SUBSCRIPTIONS});
    store.dispatch({type: FETCH_REPORTS});
    this.subscriptions$ = store.select('subscriptions');
    this.notifications$ = store.select('notifications');
  }

  ngOnInit() {
  }

  destroyTimer() {
    if (this.timer) {
      this.timer.unsubscribe();
      this.timer = null;
    }
  }

  initTimer() {
    this.time = MONITORING_INTERVAL;
    this.timer = Observable.timer(0,1000).subscribe(t => {
      this.time = MONITORING_INTERVAL - t * 1000;
      if (this.time < 0) {
        this.dataService.monitor();
        this.destroyTimer();
        this.initTimer();
      }
    });
  }

  toggleMonitoring() {
    if (this.timer) {
      return this.destroyTimer();
    }
    this.initTimer();
  }

  loadFixtures() {
    this.dbService.loadFixtures('subscriptions', fixtures.subscriptions);
    this.dbService.loadFixtures('reports', fixtures.reports);
  }

  setLang(lang) {
    this.dataService.lang = lang;
  }

  onAdd() {
    this.newItem = new Subscription();
  }

  add(item: ISubscription) {
    this.newItem = null;
    this.store.dispatch({type: ADD_SUBSCRIPTION, payload: item});
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

  onNotificationRemove(id) {
    this.notificationService.remove(id);
  }
}
