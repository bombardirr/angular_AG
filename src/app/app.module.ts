import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
