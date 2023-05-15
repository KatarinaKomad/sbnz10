import { NgModule } from "@angular/core";
import { HomeGifComponent } from "src/app/components/base/home-gif/home-gif.component";
import { HomePageComponent } from "src/app/components/home-page/home-page.component";
import { AnonymousRoutingModule } from "./anonymous-routing.module";
import { LottieModule } from "ngx-lottie";
import player from 'lottie-web';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from "src/app/components/login/login.component";

//Export this function
export function playerFactory(): any {  
  return import('lottie-web');
}

const declaredModules = [
    HomePageComponent,
    HomeGifComponent,
    LoginComponent
  ];

@NgModule({
    declarations: declaredModules,
    imports: [ 
        CommonModule,
        AnonymousRoutingModule,
        LottieModule.forRoot({ player: playerFactory }),  
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: declaredModules,
    providers: [],
  })
  export class AnonymousModule { }
  