import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPlantComponent } from "src/app/components/add-plant/add-plant.component";
import { DeseaseReportingComponent } from "src/app/components/desease-reporting/desease-reporting.component";
import { UserHomePageComponent } from "src/app/components/user-home-page/user-home-page.component";

const routes : Routes = [  
    {
        path: '',
        component: UserHomePageComponent,
        children: [
            {
                path: 'report-desease',
                component: DeseaseReportingComponent,
                outlet: 'userPage'
            },
            {
                path: 'add-plant',
                component: AddPlantComponent,
                outlet: 'userPage'
            },
          ],
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutinModule { };