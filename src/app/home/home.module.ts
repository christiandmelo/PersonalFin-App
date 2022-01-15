import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../components/header/header.module';

import { CategoryComponent } from './category/category.component';
import { CategoryEditingComponent } from './category/category-editing/category-editing.component';
import { ProfileComponent } from './app/profile/profile.component';
import { LoadingModule } from '../components/loading/loading.module';
import { FooterModule } from '../components/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    CategoryComponent,
    CategoryEditingComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HeaderModule,
    LoadingModule,
    FooterModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
