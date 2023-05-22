import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "src/app/components/home-page/home-page.component";
import { LoginComponent } from "src/app/components/login/login.component";

const routes: Routes = [
    {
      path: '',
      component: HomePageComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AnonymousRoutingModule { }