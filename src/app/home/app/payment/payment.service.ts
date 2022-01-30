import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResultPayments, ApiResultPayment, Payment } from './payment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResultPayments>{
    return this.http.get<ApiResultPayments>(`${API}/payments`);
  }

  getById(id: number): Observable<ApiResultPayment>{
    return this.http.get<ApiResultPayment>(`${API}/payment/${id}`);
  }

  saveNew(name:string):Observable<Payment>{
    return this.http.post<Payment>(`${API}/payment`, {
      name: name
    });
  }

  saveEdition(id:number, name:string):Observable<Payment>{
    return this.http.put<Payment>(`${API}/payment/${id}`, {
      name: name
    });
  }
}
