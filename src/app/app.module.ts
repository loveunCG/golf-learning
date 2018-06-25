import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthexModule } from './auth/authex/authex.module';
import { VerifyComponent } from './verify/verify.component';
@NgModule({
  declarations: [
    AppComponent,
    VerifyComponent,
  ],
  imports: [
      BrowserModule,
      AuthexModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
