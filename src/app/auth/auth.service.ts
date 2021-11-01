import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from './user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient:HttpClient,
    private userService: UserService
  ) { }

  authenticate(userName:string, passwordP:string):Observable<any>{
    return this.httpClient.post('http://localhost/PersonalFin/public/login', {
      user: userName,
      password : passwordP
    })
    .pipe(
      tap((res) => {
        const authToken = res.toString() ?? '';
        this.userService.setToken(authToken);
      })
    );;
  }
}
