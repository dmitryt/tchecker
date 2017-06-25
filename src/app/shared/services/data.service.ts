import { Injectable } from '@angular/core';
import {Http, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import request from 'superagent';

import {URLS, MONITORING_INTERVAL} from '../../../config';
import {ICity, IReport, ISubscription, IAppState} from '../index';
import {NotificationService} from './notification.service';
import {addReportsAction} from '../state';

@Injectable()
export class DataService {
  private lang: string = 'en';
  constructor(
    private http: Http,
    private notificationService: NotificationService,
    private store: Store<IAppState>
  ) {}

  getLang() {
    return this.lang;
  }

  setLang(lang) {
    this.lang = lang;
  }

  getCities(query: string): Observable<ICity[]> {
    const url = URLS(this.lang).CITIES;
    return this.http.get(url, {params: {term: query}})
      .map(res => res.json())
      .catch(err => {
        this.notificationService.push({
          message: 'Cannot fetch data from remote server',
          type: 'error',
        });
        return [];
      });
    ;
  }

  monitor() {
    this.store.select('subscriptions').forEach((list:ISubscription[]) => {
      list.forEach(s => {
        const subscription_id = s.id;
        this.getAvailablePlaces(s).subscribe(data => {
          const payload = {subscription_id, data, created_at: new Date().toISOString()};
          this.store.dispatch(addReportsAction(payload));
        });
      });
    });
    // Observable.interval(2000)
    //   .switchMap(() => this.store.select('subscriptions'))
    //   .forEach(r => console.log(r));
    // console.log(s);
      // .subscribe(r => console.log(r));
    //     console.log(arr[0]);
    //     if (arr[0]) {
    //       this.getTickets(arr[0]).subscribe(res => console.log(res));
    //     }
    //   });

    // const exec = () => {
    //   return this.store.select('subscriptions').subscribe(arr => {
    //     console.log(arr[0]);
    //     if (arr[0]) {
    //       this.getTickets(arr[0]).subscribe(res => console.log(res));
    //     }
    //   });
    // };
    // return exec();
  }

  prepareParams({from, to, date}: ISubscription) {
    return {
      station_id_from: from.id,
      station_id_till: to.id,
      date_dep: date,
      time_dep:"00:00"
    };
  }

  getAvailablePlaces(params: ISubscription): Observable<IReport[]> {
    const url = URLS(this.lang).TICKETS;
    const _params = {...this.prepareParams(params)};
    _params.date_dep = '07.10.2017';
    const __params = Object.keys(_params).reduce((acc, k) => {
      return acc.concat([`${k}=${_params[k]}`]);
    }, []);
    return this.http.post(url, new URLSearchParams(__params.join('&'))).map(res => res.json());
  }
}
