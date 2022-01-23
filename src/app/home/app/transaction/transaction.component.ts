import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResultTransactions } from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions$ !: Observable<ApiResultTransactions>;
  page : number = 0;
  type: number = 1;  
  classBtnType = "btn-purple";
  textBtnType = "Transactions";

  displayedColumns: string[] = ['Status', 'Date', 'Description', 'Category', 'Account', 'Amount', 'Actions'];

  constructor() { }

  ngOnInit(): void {
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

  //#region Methods of get Page
  previousPage(){
    this.page--;
    //this.getCategories(this.page);
  }

  nextPage(){
    this.page++;
    //this.getCategories(this.page);
  }
  //#endregion

}
