import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeGuard } from './auth/guards/home.guard';
import { LoginGuard } from './auth/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule),
    canLoad: [HomeGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule),
    canLoad: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
