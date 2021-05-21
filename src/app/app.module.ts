import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithCssComponent } from './with-css/with-css.component';
import { WithoutCssComponent } from './without-css/without-css.component';
import { TestChangeComponent } from './test-change/test-change.component';

@NgModule({
  declarations: [
    AppComponent,
    WithCssComponent,
    WithoutCssComponent,
    TestChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
