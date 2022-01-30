export interface ApiResultPayments {
    success: boolean,
    page: number,
    itemsPerPage: number,
    data: Array <Payment>
  }
  
  export interface ApiResultPayment {
    success: boolean,
    data: Payment
  }
  
  export interface Payment {
    id: number;
    name: string;
    initials: string;
  };