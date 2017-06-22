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
import { DataService, DBService, NotificationService, AppState, SubscriptionEffects, FdatePipe } from './shared';
import { FormComponent } from './form/form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalComponent } from './modal/modal.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    FormComponent,
    DatepickerComponent,
    SubscriptionComponent,
    NotificationComponent,
    ModalComponent,
    FdatePipe,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    StoreModule.provideStore(AppState),
    StoreDevtoolsModule.instrumentOnlyWithExtension(), // for debugging
    EffectsModule.run(SubscriptionEffects)
  ],
  providers: [DataService, DBService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
