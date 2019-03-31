import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { UserService } from '../../services/user.services';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar,
    protected localStorage: LocalStorage) { }
  email: string;
  password: string;
  showSpinner =false;
  ngOnInit() {
  }
  login() : void {
    this.showSpinner =  true;
    this.userService.loginUser({"Email": this.email, "Password": this.password}).pipe(catchError((error: any) => {
      this.showSpinner =  false;
      this.snackBar.open("Invalid email or password.", "Warn", {
        duration: 2000,
        verticalPosition: 'top'
      });
      throw error;
    })).subscribe(data => {
      this.showSpinner =  false;
      var usr = JSON.parse(data["_body"]);
      this.localStorage.setItem('user', usr).subscribe(() => {});
      if(usr['type'] == 'Consultancy'){
        this.router.navigate(["admin/user-dash"]);
      }else{
        this.router.navigate(["starter"]);
      }
    }); 
  }
}