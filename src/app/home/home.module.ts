import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home.component';

import { CategoryComponent } from './app/category/category.component';
import { CategoryEditingComponent } from './app/category/category-editing/category-editing.component';
import { ProfileComponent } from './app/profile/profile.component';
import { LoadingModule } from '../components/loading/loading.module';
import { FooterModule } from '../components/footer/footer.module';
import { TransactionComponent } from './app/transaction/transaction.component';
import { TransactionEditingComponent } from './app/transaction/transaction-editing/transaction-editing.component';
import { TransactionTransferComponent } from './app/transaction/transaction-transfer/transaction-transfer.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    CategoryComponent,
    CategoryEditingComponent,
    ProfileComponent,
    TransactionComponent,
    TransactionEditingComponent,
    TransactionTransferComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    LoadingModule,
    FooterModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
