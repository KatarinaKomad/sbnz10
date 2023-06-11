import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeseaseHistoryOverviewComponent } from "src/app/components/desease-history-overview/desease-history-overview.component";
import { DeseasesViewComponent } from "src/app/components/deseases-view/deseases-view.component";
import { PreparatiViewComponent } from "src/app/components/preparati-view/preparati-view.component";
import { ReportsPageComponent } from "src/app/components/reports-page/reports-page.component";
import { UserHomePageComponent } from "src/app/components/user-home-page/user-home-page.component";

const routes : Routes = [  
    {
        path: '',
        component: UserHomePageComponent,
        children: [
            {
                path: 'preparati',
                component: PreparatiViewComponent,
                outlet: 'doktorPage'

            },
            {
                path: 'bolesti',
                component: DeseasesViewComponent,
                outlet: 'doktorPage'
            },
            {
                path: 'history',
                component: DeseaseHistoryOverviewComponent,
                outlet: 'doktorPage'
            },
            {
                path: 'reports',
                component: ReportsPageComponent,
                outlet: 'doktorPage'
            }
          ],
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoktorRoutinModule { };