import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/auth/token.service';
import { environment } from 'src/environments/environment';
import { Categories } from './category';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getAll(page: number, itensPerPage: number): Observable<Categories>{
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Categories>(`${API}/categories`,{
      headers,
    });
  }
}
