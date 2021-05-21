import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithCssComponent } from './with-css/with-css.component';
import { WithoutCssComponent } from './without-css/without-css.component';
import { TestChangeComponent } from './test-change/test-change.component';
import { SearchBoxDirective } from './search-box.directive';

@NgModule({
  declarations: [
    AppComponent,
    WithCssComponent,
    WithoutCssComponent,
    TestChangeComponent,
    SearchBoxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
