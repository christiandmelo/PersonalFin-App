import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResultBanks, ApiResultBank, Bank } from './bank';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResultBanks>{
    return this.http.get<ApiResultBanks>(`${API}/banks`);
  }

  getById(id: number): Observable<ApiResultBank>{
    return this.http.get<ApiResultBank>(`${API}/bank/${id}`);
  }

  saveNew(name:string):Observable<Bank>{
    return this.http.post<Bank>(`${API}/bank`, {
      name: name
    });
  }

  saveEdition(id:number, name:string):Observable<Bank>{
    return this.http.put<Bank>(`${API}/bank/${id}`, {
      name: name
    });
  }
}
