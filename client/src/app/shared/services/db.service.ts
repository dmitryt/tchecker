import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import Dexie from 'dexie';
import 'dexie-observable';

import {DATABASE_NAME} from '../../../config';
import {ISubscription, IReport} from '../index';

@Injectable()
export class DBService extends Dexie {
  subscriptions: Dexie.Table<ISubscription, number>;
  reports: Dexie.Table<IReport, number>;
  constructor() {
    super(DATABASE_NAME);

    this.version(1).stores({
      subscriptions: '++id, from, to, date, lang',
      reports: '++id, subscription_id, created_at, data',
    });
  }

  addReports(data: IReport): Observable<void> {
    return Observable.fromPromise(this.table('reports').add(data));
  }

  getReports(): Observable<IReport[]> {
    return Observable.fromPromise(this.table('reports').reverse().toArray());
  }

  getSubscriptions(): Observable<ISubscription[]> {
    return Observable.fromPromise(this.table('subscriptions').toArray());
  }

  removeSubscription(id): Observable<void> {
    return Observable.fromPromise(
      this.table('reports')
      .where({subscription_id: id})
      .primaryKeys()
      .then(ids => this.table('reports').bulkDelete(ids))
      .then(() => this.table('subscriptions').delete(id))
    );
  }

  updateSubscription(data: ISubscription): Observable<ISubscription> {
    return Observable.fromPromise(this.table('subscriptions').put(data));
  }

  addSubscription(data: ISubscription): Observable<void> {
    return Observable.fromPromise(this.table('subscriptions').add(data));
  }

  loadFixtures(name: string, data: ISubscription[]|IReport[]) {
    this.table(name).bulkAdd(data).then(function(lastKey) {
      console.log("Items were added successfully");
    }).catch(Dexie.BulkError, function (e) {
      console.error("Some errors occurs", e);
    });
  }

}
