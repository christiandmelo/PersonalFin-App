import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ApiResultTransactions } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions$ !: Observable<ApiResultTransactions>;
  page : number = 0;
  type: number = 0;  
  classBtnType = "btn-purple";
  textBtnType = "Transactions";

  displayedColumns: string[] = ['Status', 'Date', 'Description', 'Category', 'Account', 'Amount', 'Actions'];

  constructor(
    public dialog: MatDialog,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getTransactions(0);
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
    //this.getCategories(0);
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
