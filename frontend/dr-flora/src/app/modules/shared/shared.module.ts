import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AngularMaterialModule } from "./angular-material.module";

const declarations = [
    
]

@NgModule({
    declarations: [],
    imports: [CommonModule,
        FormsModule,
        MatInputModule,
        AngularMaterialModule,
        ReactiveFormsModule],
    exports: [ReactiveFormsModule,CommonModule]
})
export class SharedModule{}