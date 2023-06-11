import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AngularMaterialModule } from "../shared/angular-material.module";
import { RouterModule } from "@angular/router";
import { DoktorRoutinModule } from "./doktor-routing.module";
import { PreparatiViewComponent } from "src/app/components/preparati-view/preparati-view.component";
import { ConcentrationDialogComponent } from "src/app/components/preparati-view/concentration-dialog/concentration-dialog.component";
import { AddPreparatComponent } from "src/app/components/add-preparat/add-preparat.component";


const declarations = [    
    PreparatiViewComponent,
    ConcentrationDialogComponent,
    AddPreparatComponent
];

@NgModule({
    declarations: [declarations],
    imports: [SharedModule, 
            AngularMaterialModule,
            DoktorRoutinModule, 
            RouterModule],
    exports: [declarations]
})
export class DoktorModule { };