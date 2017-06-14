import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {URLS} from '../../config';
import {City} from './city.model';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getCities(query: string): Observable<City[]> {
    const filterItems = item => item.title.toLowerCase().indexOf(query) !== -1;
    return this.http.get(URLS.CITIES).map(res => res.json().filter(filterItems));
  }

}
