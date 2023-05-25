import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AngularMaterialModule } from "./angular-material.module";
import { MultiselectDialogComponent } from "src/app/components/base/multiselect-dialog/multiselect-dialog.component";
import { SelectDropdownComponent } from "src/app/components/base/select-dropdown/select-dropdown.component";

@NgModule({
    declarations: [MultiselectDialogComponent, SelectDropdownComponent],
    imports: [CommonModule,
        FormsModule,
        MatInputModule,
        AngularMaterialModule,
        ReactiveFormsModule,

    ],
    exports: [ReactiveFormsModule, CommonModule, MultiselectDialogComponent, SelectDropdownComponent]
})
export class SharedModule{}