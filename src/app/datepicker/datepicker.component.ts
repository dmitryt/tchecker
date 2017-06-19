import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import bem from 'bem-cn';

import {DATE_FORMAT} from '../../config';

const selector = 'tch-datepicker';
const today = new Date();
const formattedToday = {
  year: today.getFullYear(),
  day: today.getDate() - 1,
  month: today.getMonth() + 1
};

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  private cls = bem(selector);
  private options: IMyDpOptions = {dateFormat: DATE_FORMAT, disableUntil: formattedToday};
  private model: Object;
  @Input('date') date: string;
  @Input('label') label: string;

  constructor() {
  }

  ngOnInit() {
    const [day, month, year] = this.date.split(/\D/).map(el => parseInt(el, 10));
    this.model = {date: {year, day, month}};
  }

}
