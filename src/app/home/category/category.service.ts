import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/auth/token.service';
import { environment } from 'src/environments/environment';
import { Category } from './category';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getAll(page: number, itensPerPage: number): Observable<Category>{
    return this.http.get<Category>(`${API}/categories`);
  }
}
