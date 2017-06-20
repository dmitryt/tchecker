import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import bem from 'bem-cn';

import {DataService, ICity, ISubscription} from '../shared';

const selector = 'tch-form';
var f = new FormControl()

function validateDestination(c: FormControl) {
  return c.value.id ? null : {validateDestination: {valid: false}};
}

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private cls = bem(selector);
  private form: FormGroup;
  @Input('data') data: ISubscription;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const {from, to, date} = this.data;
    this.form = this.fb.group({
      from: new FormControl(from, validateDestination),
      to: new FormControl(to, validateDestination),
      date: new FormControl(date, Validators.required),
    });
  }

  _onSave() {
    this.onSave.emit();
  }

  _onCancel() {
    this.onCancel.emit();
  }

}
