import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import {DataService} from '../shared';

@Component({
  selector: 'tch-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('inputNode') inputBox: ElementRef;
  inputStream$: Subscription
  dataList$: Subscription
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.inputStream$ = Observable.fromEvent(this.inputBox.nativeElement, 'keyup')
      .map((e: Event) => (<HTMLInputElement>e.target).value)
      .filter(value => Boolean(value))
      .debounceTime(300)
      .subscribe(res => );
  }

  ngOnDestroy() {
    this.inputStream$.unsubscribe();
  }

}
