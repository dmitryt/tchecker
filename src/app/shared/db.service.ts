import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import Dexie from 'dexie';
import 'dexie-observable';

import {DATABASE_NAME} from '../../config';
import {ISubscription, IReport} from './index';

@Injectable()
export class DBService extends Dexie {
  subscriptions: Dexie.Table<ISubscription, number>;
  reports: Dexie.Table<IReport, number>;
  constructor() {
    super(DATABASE_NAME);

    this.version(1).stores({
      subscriptions: '++id, from, to, date, lang',
      reports: '++id, results, updated_at',
    });
  }

  getSubscriptions(): Observable<ISubscription[]> {
    return Observable.fromPromise(
      <Promise<ISubscription[]>>this.table('subscriptions').toArray()
    );
  }

  loadFixtures(name: string, data: ISubscription[]) {
    this.table(name).bulkAdd(data).then(function(lastKey) {
      console.log("Items were added successfully");
    }).catch(Dexie.BulkError, function (e) {
      console.error("Some errors occurs", e);
    });
  }

}
