export interface ApiResultBanks {
    success: boolean,
    page: number,
    itemsPerPage: number,
    data: Array <Bank>
  }
  
  export interface ApiResultBank {
    success: boolean,
    data: Bank
  }
  
  export interface Bank {
    id: number;
    name: string;
  };