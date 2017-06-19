import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import bem from 'bem-cn';

import {DataService, ICity, ISubscription} from '../shared';

const selector = 'tch-form';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private cls = bem(selector);
  @Input('data') data: ISubscription;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  constructor() {
  }

  _onSave() {
    this.onSave.emit();
  }

  _onCancel() {
    this.onCancel.emit();
  }

  ngOnInit() {
  }

}
