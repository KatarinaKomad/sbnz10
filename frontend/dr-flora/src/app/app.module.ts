import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/base/header/header.component';
import { LottieModule } from "ngx-lottie";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgToastModule} from 'ng-angular-popup';
import { AnonymousModule } from './modules/anonymous/anonymous.module';
import { UserModule } from './modules/user/user.module';


//Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule,
    NgToastModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
