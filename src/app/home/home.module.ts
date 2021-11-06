import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../components/header/header.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    MatCardModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
