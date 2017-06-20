import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DataService, DBService, AppState, SubscriptionEffects } from './shared';
import { FormComponent } from './form/form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    FormComponent,
    DatepickerComponent,
    SubscriptionComponent,
    NotificationComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(), // for debugging
    StoreModule.provideStore(AppState),
    EffectsModule.run(SubscriptionEffects)
  ],
  providers: [DataService, DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
