import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {URLS} from '../../config';
import {ICity, ITicketTracing, ISubscription} from './index';

@Injectable()
export class DataService {
  private lang: string = 'en';
  constructor(private http: Http) {
  }

  getCities(query: string): Observable<ICity[]> {
    const url = URLS(this.lang).CITIES;
    const filterItems = item => item.title.toLowerCase().indexOf(query) !== -1;
    return this.http.get(url)
      .map(res => res.json().filter(filterItems))
      .catch(err => this.getCities(query))
    ;
  }

  prepareParams({from, to, date}: ISubscription) {
    return {
      station_from: from.value,
      station_id_from: from.id,
      station_till: from.value,
      station_id_till: from.id,
      date_dep: date,
    };
  }

  getTickets(params: ISubscription): Observable<ITicketTracing[]> {
    const url = URLS(this.lang).TICKETS;
    const defaultParams = {time_dep:"00:00", time_dep_till:"", another_ec:0, search:""};
    return this.http.post(url, {...this.prepareParams(params), ...defaultParams}).map(res => res.json());
  }

}
