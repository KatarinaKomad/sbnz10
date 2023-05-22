import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AngularMaterialModule } from "./angular-material.module";
import { MultiselectDropdownComponent } from "src/app/components/base/multiselect-dropdown/multiselect-dropdown.component";

const declarations = [
    
]

@NgModule({
    declarations: [MultiselectDropdownComponent],
    imports: [CommonModule,
        FormsModule,
        MatInputModule,
        AngularMaterialModule,
        ReactiveFormsModule,
    ],
    exports: [ReactiveFormsModule, CommonModule, MultiselectDropdownComponent]
})
export class SharedModule{}