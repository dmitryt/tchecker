import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DataService } from './shared';
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
    HttpModule,
    DatePickerModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
