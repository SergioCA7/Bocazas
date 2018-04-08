import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './alert.service';
import { TabListComponent } from './tab-list/tab-list.component';
import { TabNewAlertComponent } from './tab-new-alert/tab-new-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    TabListComponent,
    TabNewAlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
