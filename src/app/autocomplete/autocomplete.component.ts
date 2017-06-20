import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import bem from 'bem-cn';

import {DataService, ICity} from '../shared';

const selector = 'tch-autocomplete';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  private cls = bem(selector);
  private citiesList$: Observable<ICity[]>;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input('data') data: Object;
  @Input('label') label: string;
  @Input('isValid') isValid: boolean;
  @ViewChild('inputNode') inputBox: ElementRef;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.citiesList$ = Observable.fromEvent(this.inputBox.nativeElement, 'keyup')
      .takeUntil(this.ngUnsubscribe)
      .map((e: Event) => (<HTMLInputElement>e.target).value)
      .filter(value => Boolean(value))
      .debounceTime(300)
      .switchMap(q => this.dataService.getCities(q))
    ;
  }

  //https://stackoverflow.com/questions/38008334/angular-rxjs-when-should-i-unsubscribe-from-subscription
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
