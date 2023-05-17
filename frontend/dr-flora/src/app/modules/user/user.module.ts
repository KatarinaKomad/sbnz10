import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { AddNewPlantComponent } from "src/app/components/add-new-plant/add-new-plant.component";
import { UserHomePageComponent } from "src/app/components/user-home-page/user-home-page.component";
import { UserMenuComponent } from "src/app/components/user-menu/user-menu.component";
import { SharedModule } from "../shared/shared.module";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { UserRoutinModule } from "./user-routing.module";

const declarations = [
    UserMenuComponent,
    AddNewPlantComponent,
    UserHomePageComponent,
]

@NgModule({
    declarations: [declarations],
    imports: [SharedModule, 
            AngularMaterialModule,
            UserRoutinModule, 
            RouterModule],
    exports: [declarations]
})
export class UserModule { };