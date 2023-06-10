import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { DoktorRoutinModule } from "./doktor-routing.module";


const declarations:[] = [];

@NgModule({
    declarations: [declarations],
    imports: [SharedModule, 
            AngularMaterialModule,
            DoktorRoutinModule, 
            RouterModule],
    exports: [declarations]
})
export class DoktorModule { };