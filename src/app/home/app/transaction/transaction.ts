export interface ApiResultTransactions {
    success: boolean,
    page: number,
    itemsPerPage: number,
    data: Array <Transaction>
  }
  
  export interface ApiResultTransaction {
    success: boolean,
    data: Transaction
  }
  
  export interface Transaction {
    id: number;
    statusId: number;
    bankAccountId: number;
    categoryId: number;
    paymentId: number;
    creditCardBillId: number;
    issuanceDate: Date;
    dueDate: Date;
    dateWithdrew: Date;
    amount: number;
    debitedAmount: number;
    typeEntry: number;
  };