import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

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
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
