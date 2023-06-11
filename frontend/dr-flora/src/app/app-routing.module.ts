import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageGuard } from './guards/homepage.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/anonymous/anonymous.module').then(m => m.AnonymousModule),
    canActivate: [HomepageGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard]
  },
  {
    path: 'doktor',
    loadChildren: () => import('./modules/doktor/doktor.module').then(m => m.DoktorModule),
    canActivate: [UserGuard]
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
