import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(private router: Router,
    protected localStorage: LocalStorage) { }

  logOut(){
    this.localStorage.removeItem('user');
    this.router.navigate(["login"]);
  }

     openProfile(){
      this.router.navigate(["profile"]);    
    }     
}
