import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import bem from 'bem-cn';

import {ISubscription} from './shared/';

const selector = 'tch-root';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscriptions: ISubscription[];
  private cls = bem(selector);
  constructor() {
    this.subscriptions = [
      {from: {id: 2200001, value: 'Kyiv'}, to: {id: 2208530, value: 'Kherson'}, lang: 'en', date: '27.06.2017', showDesktopNotifications: true, notifyToEmail: 'hello.world@gmail.com'},
      {from: {id: 2200331, value: 'Vinnytsja'}, to: {id: 2212330, value: 'Kherson'}, lang: 'en', date: '27.06.2017', showDesktopNotifications: false},
      {from: {id: 2223401, value: 'Kharkiv'}, to: {id: 2201230, value: 'Vinnytsja'}, lang: 'en', date: '27.06.2017', showDesktopNotifications: false, notifyToEmail: 'hello.world@gmail.com'},
    ];
  }
}
