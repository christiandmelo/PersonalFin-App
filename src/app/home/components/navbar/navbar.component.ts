import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user$ = this.userService.getUser();
  showMenu = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) {  }

  showOrHideMenu(){
    if(this.showMenu == ""){
      this.showMenu = "show";
      return;
    }

    this.showMenu = "";
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }

}
