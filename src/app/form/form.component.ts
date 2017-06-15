import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import bem from 'bem-cn';

import {DataService, ICity} from '../shared';

const selector = 'tch-form';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private cls = bem(selector);
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
