import { HttpClient } from '@angular/common/http';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ApiResultCategories, ApiResultCategory, Category } from './category';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getTotalRows(type: number): Observable<number>{
    return this.http.get<number>(`${API}/category/totalRows?type=${type}`);
  }

  getAll(page: number, type: number): Observable<ApiResultCategories>{
    return this.http.get<ApiResultCategories>(`${API}/categories?page=${page}&type=${type}`);
  }

  getById(id: number): Observable<ApiResultCategory>{
    return this.http.get<ApiResultCategory>(`${API}/category/${id}`);
  }

  saveNew(name:string, icon:string, color:string, type:number):Observable<Category>{
    return this.http.post<Category>(`${API}/category`, {
      name: name,
      icon : icon,
      color: color,
      type: type
    });
  }

  saveEdition(id:number, name:string, icon:string, color:string, type:number):Observable<Category>{
    return this.http.put<Category>(`${API}/category/${id}`, {
      name: name,
      icon : icon,
      color: color,
      type: type
    });
  }
}
