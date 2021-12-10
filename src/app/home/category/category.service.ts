import { HttpClient } from '@angular/common/http';
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

  getTotalRows(): Observable<number>{
    return this.http.get<number>(`${API}/category/totalRows`);
  }

  getAll(page: number): Observable<ApiResultCategories>{
    return this.http.get<ApiResultCategories>(`${API}/categories?page=${page}`);
  }

  getById(id: number): Observable<ApiResultCategory>{
    return this.http.get<ApiResultCategory>(`${API}/category/${id}`);
  }

  saveNew(name:string, shortName:string):Observable<Category>{
    return this.http.post<Category>(`${API}/category`, {
      name: name,
      shortName : shortName
    });
  }

  saveEdition(id:number, name:string, shortName:string):Observable<Category>{
    return this.http.put<Category>(`${API}/category/${id}`, {
      name: name,
      shortName : shortName
    });
  }
}
