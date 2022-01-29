import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { TransactionService } from '../transaction.service';

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

  constructor(
    public dialogRef: MatDialogRef<TransactionEditingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private trasactionService: TransactionService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
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
      recurring: ['', []],
      divide: ['', []],
      installments: [ 1, [ Validators.min(1) ]]
    });
  }

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
