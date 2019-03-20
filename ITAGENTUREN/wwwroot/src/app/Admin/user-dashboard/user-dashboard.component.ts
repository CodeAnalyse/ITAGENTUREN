import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.services';
import { catchError, map } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  users = [];
  displayedColumns = [];
  dataSource = [];
  user;

  constructor(private userService: UserService, private router: Router) { 
    this.userService.getUser().subscribe((data) => {
      this.user = data;
      if(!this.user || this.user['type'] != 'Consultancy'){
        this.router.navigate(['starter']);
      }
    });
    this.displayedColumns = ['Firstname', 'Lastname', 'Email', 'star'];
    this.loadUsers();
  }

  ViewProfile(element){
    this.router.navigate(['profile', element.id]);
  }

  //loads users from server
  loadUsers(){
    this.userService.listUser().pipe(catchError((error: any) => {
      //this.flashMessage.show("Error while saving feedback!!",  { cssClass: 'alert-danger', timeout: 3000 });
      alert("Error while getting data!!");
      throw error;
    })).subscribe(data => {
      this.users = JSON.parse(data["_body"]);
      this.dataSource = this.users;
      //this.flashMessage.show("Feedback saved successfully, Thank you!!",  { cssClass: 'alert-success', timeout: 3000 });
    }); 
  }

  ngOnInit() {
  }

}
