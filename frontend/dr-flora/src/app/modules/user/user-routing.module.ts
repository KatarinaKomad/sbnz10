import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPlantComponent } from "src/app/components/add-plant/add-plant.component";
import { DeseaseHistoryOverviewComponent } from "src/app/components/desease-history-overview/desease-history-overview.component";
import { DeseaseReportingComponent } from "src/app/components/desease-reporting/desease-reporting.component";
import { PlantsViewComponent } from "src/app/components/plants-view/plants-view.component";
import { ProfileViewComponent } from "src/app/components/profile-view/profile-view.component";
import { ReportsPageComponent } from "src/app/components/reports-page/reports-page.component";
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
            {
                path: 'history',
                component: DeseaseHistoryOverviewComponent,
                outlet: 'userPage'
            },
            {
                path: 'plants',
                component: PlantsViewComponent,
                outlet: 'userPage'
            },
            {
                path: 'reports',
                component: ReportsPageComponent,
                outlet: 'userPage'
            },
            {
                path: 'profile',
                component: ProfileViewComponent,
                outlet: 'userPage'
            }
          ],
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutinModule { };