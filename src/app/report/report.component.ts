import { Component, OnInit, Input } from '@angular/core';
import bem from 'bem-cn';

import {IReport} from '../shared';

const selector = 'tch-report';

@Component({
  selector,
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  private cls = bem(selector);
  private values: Array<Object>;
  @Input('data') report: IReport;
  constructor() { }

  ngOnInit() {
    this.values = this.report.data.value;
  }

}
