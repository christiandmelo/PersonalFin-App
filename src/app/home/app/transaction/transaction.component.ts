import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { ApiResultResumeTransaction, ApiResultTransactions } from './transaction';
import { TransactionService } from './transaction.service';
import { TransactionEditingComponent } from './transaction-editing/transaction-editing.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions$ !: Observable<ApiResultTransactions>;
  resumeTransactions$ !: Observable<ApiResultResumeTransaction>;
  page : number = 0;
  type: number = 0;  
  date: Date = new Date();
  dtBegin = "";
  dtEnd = ""
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
    this.setMonth(0);
  }

  //#region Methods of dialog
  editionTransactionDialog(id: number, type: number) {
    const dialogRef = this.dialog.open(TransactionEditingComponent, { data: {id: id, type: type} });

    dialogRef.afterClosed().subscribe(result => {
      if(result != "" && result != undefined){
        this.getResumeTransactions();
        this.getTransactions(this.page);
      }
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

    this.dtBegin = this.date.getFullYear().toString() + "-" + (this.date.getMonth()+1) + "-01";
    this.dtEnd = this.date.getFullYear().toString() + "-" + (this.date.getMonth()+1) + "-" + new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();

    this.getResumeTransactions();
    this.getTransactions(this.page);
  }

  changeMonth(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = (event.value === null) ? this.date : event.value;
    this.setMonth(0);
  }
  //#endregion

  //#region Methods of get
  getTransactions(page: number){
    if(this.type == 0){
      this.transactions$ = this.transactionService.getAll(this.dtBegin, this.dtEnd, page);
      return;
    }

    this.transactions$ = this.transactionService.getByDate(this.dtBegin, this.dtEnd, page, this.type);
  }

  getResumeTransactions(){
    this.resumeTransactions$ = this.transactionService.getResume(this.dtBegin, this.dtEnd);
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
