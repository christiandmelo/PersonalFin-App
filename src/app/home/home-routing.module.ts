import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './app/profile/profile.component';

import { CategoryComponent } from './app/category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { TransactionComponent } from './app/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'transaction',
        component: TransactionComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
