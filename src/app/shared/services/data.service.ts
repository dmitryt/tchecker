import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {format} from 'date-fns';

import {URLS, DATE_FORMAT_EN, DATE_FORMAT_RU, MONITORING_INTERVAL} from '../../../config';
import {ICity, IReport, ISubscription, IAppState} from '../index';
import {NotificationService} from './notification.service';
import {addReportsAction} from '../state';

declare var Notification: {
  prototype: Notification;
  new(title: string, options?: NotificationOptions): Notification;
  readonly permission: any;
  requestPermission(callback?: NotificationPermissionCallback): Promise<any>;
}

@Injectable()
export class DataService {
  public lang: string = 'en';
  constructor(
    private http: Http,
    private notificationService: NotificationService,
    private store: Store<IAppState>
  ) {}

  getCities(query: string): Observable<any> {
    const url = URLS(this.lang).CITIES;
    return this.http.get(url, {params: {term: query}})
      .map(res => res.json())
      .catch(err => {
        this.notificationService.push({
          message: err,
          type: 'error',
        });
        return [];
      })
    ;
  }

  monitor() {
    return this.store.select('subscriptions')
      .concatMap((list:ISubscription[]) => Observable.of(list))
      .flatMap((list:ISubscription[]) => {
        return list.map(item => this.getAvailablePlaces(item))
      })
      .subscribe(report$ => {
        report$.subscribe((data:IReport) => {
          const {subscription_id} = data;
          const payload = {subscription_id, data, created_at: new Date().toISOString()};
          this.store.dispatch(addReportsAction(payload));
        });
      })
  }

  prepareParams({from, to, date}: ISubscription) {
    return {
      station_id_from: from.id,
      station_id_till: to.id,
      date_dep: format(date, this.lang === 'en' ? DATE_FORMAT_EN : DATE_FORMAT_RU),
    };
  }

  getAvailablePlaces(data: ISubscription): Observable<IReport> {
    const url = URLS(this.lang).TICKETS;
    const params = {...this.prepareParams(data)};
    return this.http.get(url, {params})
      .map(res => {
        const _data = res.json();
        if (_data.error) {
          throw new Error(_data.value);
        }
        return {..._data, subscription_id: data.id};
      })
      .catch(err => {
        this.notificationService.push({
          message: err,
          type: 'error',
        });
        return [];
      })
    ;
  }

  pushDesktopNotification(msg) {
    const exec = () => new Notification(msg);
    if (Notification.permission === 'granted') {
      exec();
    } else if (Notification.permission !== 'denied' || Notification.permission === "default") {
      Notification.requestPermission().then(() => exec());
    }
  }
}