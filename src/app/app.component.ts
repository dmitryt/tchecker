import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
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
  private lang: string;
  private time: number;
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
    this.lang = dataService.getLang();
    this.time = MONITORING_INTERVAL;
    store.dispatch({type: FETCH_SUBSCRIPTIONS});
    store.dispatch({type: FETCH_REPORTS});
    this.subscriptions$ = store.select('subscriptions');
    this.notifications$ = store.select('notifications');
  }

  ngOnInit() {

    // this.dataService.monitor();
  }

  loadFixtures() {
    this.dbService.loadFixtures('subscriptions', fixtures.subscriptions);
    this.dbService.loadFixtures('reports', fixtures.reports);
  }

  setLang(lang) {
    this.lang = lang;
    this.dataService.setLang(lang);
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
