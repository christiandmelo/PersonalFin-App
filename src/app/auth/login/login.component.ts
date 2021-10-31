import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  login(){
    this.authService
        .authenticate(
          this.loginForm.get('user')?.value,
          this.loginForm.get('password')?.value
        )
        .subscribe(()=>{
          this.router.navigate(['home/dashboard'])
        },(error) => {
          this.snackBar.open('Erro on login', 'ok', {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          console.log(error);
        })
  }
}
