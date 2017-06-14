import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import bem from 'bem-cn';

const selector = 'tch-modal';
@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input('visible') isVisible: boolean;
  private cls = bem(selector);
  constructor() { }

  ngOnInit() {
  }

}
