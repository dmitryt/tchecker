import { Injectable } from '@angular/core';
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
      subscriptions: '$$uuid, from, to, date, lang',
      reports: '$$uuid, results, updated_at',
    });
  }

  loadFixtures(name: string, data: ISubscription[]) {
    this.table(name).bulkAdd(data).then(function(lastKey) {
      console.log("Items were added successfully");
    }).catch(Dexie.BulkError, function (e) {
      console.error("Some errors occurs", e);
    });
  }

}
