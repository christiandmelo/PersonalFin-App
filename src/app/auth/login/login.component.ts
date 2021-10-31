import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user='';
  password='';

  constructor(private authService:AuthService) { }

  ngOnInit(): void { }

  login(){
    this.authService
        .authenticate(this.user, this.password)
        .subscribe(()=>{
          console.log("autenticado");
        },(error) => {
          alert("erro auh");
          console.log(error);
        })
  }
}
