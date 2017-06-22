import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import bem from 'bem-cn';

const selector = 'tch-modal';
@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('title') title: string;
  @Input('buttons') buttons: boolean = true;
  @Output() onHandle = new EventEmitter();
  private cls = bem(selector);
  constructor() { }

  ngOnInit() {
  }

  onOk() {
    this.onHandle.emit(Promise.resolve());
  }

  onCancel() {
    this.onHandle.emit(Promise.reject(null));
  }

}
