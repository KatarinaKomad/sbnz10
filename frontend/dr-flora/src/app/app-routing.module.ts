import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomepageGuard } from './guards/homepage.guard';

const routes: Routes = [
  {
    path: 'anon',
    loadChildren: () => import('./modules/anonymous/anonymous.module').then(m => m.AnonymousModule),
    canActivate: [HomepageGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
