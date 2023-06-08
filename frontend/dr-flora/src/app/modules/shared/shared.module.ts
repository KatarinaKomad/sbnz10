import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AngularMaterialModule } from "./angular-material.module";
import { MultiselectDialogComponent } from "src/app/components/base/multiselect-dialog/multiselect-dialog.component";
import { SelectDropdownComponent } from "src/app/components/base/select-dropdown/select-dropdown.component";
import { DeseaseHistoryOverviewComponent } from "src/app/components/desease-history-overview/desease-history-overview.component";
import { PlantCardComponent } from "src/app/components/base/plant-card/plant-card.component";

let declarations = [MultiselectDialogComponent, 
    SelectDropdownComponent, 
    DeseaseHistoryOverviewComponent,
    PlantCardComponent,]

@NgModule({
    declarations: declarations,
    imports: [CommonModule,
        FormsModule,
        MatInputModule,
        AngularMaterialModule,
        ReactiveFormsModule,

    ],
    exports: [ReactiveFormsModule, 
            CommonModule, 
            ...declarations]
})
export class SharedModule{}