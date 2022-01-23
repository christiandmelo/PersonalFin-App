import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResultTransactions } from './transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  page : number = 0;
  type: number = 1;
  transactions$ !: Observable<ApiResultTransactions>;
  classBtnType = "btn-red";
  textBtnType = "Expenses Categories";

  displayedColumns: string[] = ['Status', 'Date', 'Description', 'Category', 'Account', 'Amount', 'Actions'];

  constructor() { }

  ngOnInit(): void {
  }

}
