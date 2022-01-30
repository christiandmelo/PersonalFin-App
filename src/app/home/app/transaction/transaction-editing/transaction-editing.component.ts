import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { TransactionService } from '../transaction.service';
import { CategoryService } from '../../category/category.service';
import { ApiResultCategories } from '../../category/category';

export interface DialogData {
  id: number;
  type: number;
}

@Component({
  selector: 'app-transaction-editing',
  templateUrl: './transaction-editing.component.html',
  styleUrls: ['./transaction-editing.component.css']
})
export class TransactionEditingComponent implements OnInit {
  transactionForm!: FormGroup;
  categories$ !: Observable<ApiResultCategories>;

  constructor(
    public dialogRef: MatDialogRef<TransactionEditingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private trasactionService: TransactionService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      description: ['', [
        Validators.required
      ]],
      amount: ['', [
        Validators.required
      ]],
      issuanceDate: ['', [
        Validators.required
      ]],
      category: ['', [
        Validators.required
      ]],
      bank: ['', [
        Validators.required
      ]],
      account: ['', [
        Validators.required
      ]],
      creditCard: ['', [
        Validators.required
      ]],
      useCreditCard: ['', []],
      recurring: ['', []],
      divide: ['', []],
      installments: [ 1, [ Validators.min(1) ]]
    });

    this.getCategories();
  }

  //#region Methods of get
  getCategories(){
    this.categories$ = this.categoryService.getAllByType(this.data.type)
  }
  //#endregion

  //#region methods for edition
  /*save(){
    if(this.data.id <= 0){
      this.saveNew();
      return;
    }

    this.saveEdition();
  }*/

  /*saveNew(){
    this.categoryService
      .saveNew(
        this.categoryForm.get('name')?.value,
        '',
        '',
        this.data.type
      )
      .subscribe(()=>{
        this.snackBar.open('Category saved successfully', 'ok', {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.dialogRef.close();
      });
  }

  saveEdition(){
    this.categoryService
      .saveEdition(
        this.data.id,
        this.categoryForm.get('name')?.value,
        '',
        '',
        this.data.type
      )
      .subscribe(()=>{
        this.snackBar.open('Category saved successfully', 'ok', {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
        this.dialogRef.close();
      });
  }*/
  //#endregion
}
