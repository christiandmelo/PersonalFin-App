import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/auth/token.service';
import { environment } from 'src/environments/environment';
import { ApiResultCategories } from './category';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getAll(page: number): Observable<ApiResultCategories>{
    return this.http.get<ApiResultCategories>(`${API}/categories?page=${page}`);
  }
}
