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
    name: string;
    icon: string;
    color: string;
    type: number;
  };