import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';
import { ShopFormModule } from './shop-form/shop-form.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule,
    ShopFormModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
