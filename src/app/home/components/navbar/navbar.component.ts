import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$ = this.userService.getUser();
  showProfileMenu = "";
  showNotificationsMenu = "";

  constructor(
    private userService: UserService,
    private router: Router
  ) {  }

  showOrHideProfileMenu(){
    if(this.showProfileMenu == ""){
      this.showProfileMenu = "show";
      return;
    }

    this.showProfileMenu = "";
  }

  showOrHideNotificationMenu(){
    if(this.showNotificationsMenu == ""){
      this.showNotificationsMenu = "show";
      return;
    }

    this.showNotificationsMenu = "";
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['auth/login']);
  }

}
