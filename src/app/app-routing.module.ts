import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'regilog',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ch1',
    loadChildren: () => import('./ch1/ch1.module').then( m => m.Ch1PageModule)
  },
  {
    path: 'regilog',
    loadChildren: () => import('./regilog/regilog.module').then( m => m.RegilogPageModule)
  },
  {
    path: 'ch2',
    loadChildren: () => import('./ch2/ch2.module').then( m => m.Ch2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
