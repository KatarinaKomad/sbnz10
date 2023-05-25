import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { UserHomePageComponent } from "src/app/components/user-home-page/user-home-page.component";
import { UserMenuComponent } from "src/app/components/user-menu/user-menu.component";
import { SharedModule } from "../shared/shared.module";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { UserRoutinModule } from "./user-routing.module";
import { DeseaseSymptomsFormComponent } from "src/app/components/desease-symptoms-form/desease-symptoms-form.component";
import { DeseaseReportingComponent } from "src/app/components/desease-reporting/desease-reporting.component";
import { RecomendationDisplayComponent } from "src/app/components/recomendation-display/recomendation-display.component";
import { AddPlantComponent } from "src/app/components/add-plant/add-plant.component";


const declarations = [
    UserMenuComponent,
    UserHomePageComponent,
    DeseaseSymptomsFormComponent,
    DeseaseReportingComponent, 
    RecomendationDisplayComponent,
    AddPlantComponent
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