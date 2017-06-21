import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  private form: FormGroup;
  @Input('data') data: ISubscription;
  @Output() onSave = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const {from, to, date} = this.data;
    this.form = this.fb.group({
      from: this.getDestinationGroup(from),
      to: this.getDestinationGroup(to),
      date: [date, Validators.required],
    });
  }

  getDestinationGroup(data) {
    return this.fb.group({
      id: [data.id, Validators.required],
      value: [data.value, Validators.required],
    });
  }

  onDateChange(date) {
    this.form.setValue({...this.form.value, date});
  }

  _onSave(data) {
    this.onSave.emit({...this.data, ...data});
  }

  _onCancel() {
    this.onCancel.emit();
  }

}
