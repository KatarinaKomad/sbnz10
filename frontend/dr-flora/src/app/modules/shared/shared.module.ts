import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { AngularMaterialModule } from "./angular-material.module";
import { MultiselectDialogComponent } from "src/app/components/base/multiselect-dialog/multiselect-dialog.component";
import { SelectDropdownComponent } from "src/app/components/base/select-dropdown/select-dropdown.component";
import { DeseaseHistoryOverviewComponent } from "src/app/components/desease-history-overview/desease-history-overview.component";
import { PlantCardComponent } from "src/app/components/base/plant-card/plant-card.component";
import { RatePopupComponent } from "src/app/components/rate-popup/rate-popup.component";
import { ReportsContentComponent } from "src/app/components/reports-content/reports-content.component";
import { ReportsHeaderComponent } from "src/app/components/reports-header/reports-header.component";
import { ReportsPageComponent } from "src/app/components/reports-page/reports-page.component";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ProfileViewComponent } from "src/app/components/profile-view/profile-view.component";

let declarations = [MultiselectDialogComponent, 
    SelectDropdownComponent, 
    DeseaseHistoryOverviewComponent,
    PlantCardComponent,
    RatePopupComponent,
    ReportsHeaderComponent,
    ReportsContentComponent,
    ProfileViewComponent,
    ReportsPageComponent]


@NgModule({
    declarations: declarations,
    imports: [CommonModule,
        FormsModule,
        MatInputModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        CanvasJSAngularChartsModule

    ],
    exports: [ReactiveFormsModule, 
            CommonModule, 
            ...declarations]
})
export class SharedModule{}