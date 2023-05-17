import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddNewPlantComponent } from "src/app/components/add-new-plant/add-new-plant.component";
import { UserHomePageComponent } from "src/app/components/user-home-page/user-home-page.component";

const routes : Routes = [
    {
        path: 'add-plant',
        component: AddNewPlantComponent
    },
    {
        path: '',
        component: UserHomePageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutinModule { };