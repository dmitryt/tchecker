import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import bem from 'bem-cn';

import {DATE_FORMAT} from '../../config';

const selector = 'tch-datepicker';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  private cls = bem(selector);
  private date: DateModel;
  private options: DatePickerOptions;
  @Input('label') label: string;

  constructor() {
    this.options = new DatePickerOptions({
      format: DATE_FORMAT
    });
  }

  ngOnInit() {
  }

}
