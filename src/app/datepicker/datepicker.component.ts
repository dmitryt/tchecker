import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import bem from 'bem-cn';
import {parse} from 'date-fns';

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
  private options: IMyDpOptions = {dateFormat: DATE_FORMAT.toLowerCase(), disableUntil: formattedToday};
  private model: Object;
  @Input('value') value: string;
  @Output() onChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    // const date = parse(this.formGroup.value[this.name]);
    const date = parse(this.value);
    const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
    this.model = {date: {year, day, month}};
  }

  onDateChanged(event: IMyDateModel) {
    this.onChange.emit(event.jsdate ? event.jsdate.toISOString() : null);
  }

}
