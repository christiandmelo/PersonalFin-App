import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ApiResultTransactions } from './transaction';
import { TransactionService } from './transaction.service';
import { TransactionEditingComponent } from './transaction-editing/transaction-editing.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions$ !: Observable<ApiResultTransactions>;
  page : number = 0;
  type: number = 0;  
  date: Date = new Date();
  classBtnType = "btn-purple";
  textBtnType = "Transactions";
  textBtnButton = "";

  displayedColumns: string[] = ['Status', 'Date', 'Description', 'Category', 'Account', 'Amount', 'Actions'];
  monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  constructor(
    public dialog: MatDialog,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getTransactions(0);
    this.setMonth(0);
  }

  //#region Methods of dialog
  editionTransactionDialog(id: number) {
    const dialogRef = this.dialog.open(TransactionEditingComponent, { data: {id: id, type: this.type} });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != "" && result != undefined)
        this.getTransactions(this.page);
    });
  }

  //#region Methods of actions on screen
  setType(type: number){
    this.type = type;

    switch(type){
      case 0:
        this.classBtnType = "btn-purple";
        this.textBtnType = "Transactions";
        break;
      case 1:
        this.classBtnType = "btn-red";
        this.textBtnType = "Expenses";
        break;
      case 2:
        this.classBtnType = "btn-green";
        this.textBtnType = "Incomes";
        break;
      case 3:
        this.classBtnType = "btn-blue";
        this.textBtnType = "Transfers";
        break;
      default:
        break;
    }
    this.getTransactions(0);
  }

  setMonth(direction:number){ 
    this.date.setMonth(this.date.getMonth() + direction);
    this.textBtnButton = this.monthNames[this.date.getMonth()] + " " + this.date.getFullYear().toString();
  }

  changeMonth(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = (event.value === null) ? this.date : event.value;
    this.setMonth(0);
  }
  //#endregion

  //#region Methods of get
  getTransactions(page: number){
    if(this.type == 0){
      this.transactions$ = this.transactionService.getAll(page);
      return;
    }

    this.transactions$ = this.transactionService.getAllByType(page, this.type);
  }
  //#endregion

  //#region Methods of get Page
  previousPage(){
    this.page--;
    this.getTransactions(this.page);
  }

  nextPage(){
    this.page++;
    this.getTransactions(this.page);
  }
  //#endregion

}
