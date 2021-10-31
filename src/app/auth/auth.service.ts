import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  authenticate(userName:string, passwordP:string):Observable<any>{
    return this.httpClient.post('http://localhost/PersonalFin/public/login', {
      user: userName,
      password : passwordP
    });
  }
}
