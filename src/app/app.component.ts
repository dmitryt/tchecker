import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import bem from 'bem-cn';

import {ISubscription, IAppState, DBService, FETCH_SUBSCRIPTIONS} from './shared/';
import fixtures from '../fixtures/db';

const selector = 'tch-root';

@Component({
  selector,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscriptions$: Observable<ISubscription[]>;
  private editedItem: ISubscription;
  private cls = bem(selector);
  constructor(private store: Store<IAppState>, private dbService: DBService) {
    store.dispatch({type: FETCH_SUBSCRIPTIONS});
    this.subscriptions$ = store.select('subscriptions');
  }

  loadFixtures() {
    this.dbService.loadFixtures('subscriptions', fixtures.subscriptions);
  }

  onEdit(item: ISubscription) {
    this.editedItem = item;
  }

  onSave(item: ISubscription) {
  }

  onRemove(index: number) {
  }
}
