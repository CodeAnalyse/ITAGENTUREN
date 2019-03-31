import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.services';
import { MatSnackBar } from '@angular/material';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { catchError, flatMap } from 'rxjs/operators';
import { FilterPipe } from '../filter.pipe';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform} from '@angular/core';



@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  //pipe: [FilterPipe]
})
export class StarterComponent implements AfterViewInit {


  showdataonclick=false
  ngAfterViewInit() {}


  constructor(private router: Router,
    private userService: UserService,
    public snackBar: MatSnackBar,
    protected localStorage: LocalStorage){
      this.showdataonclick=false
        

    }
    email: string;
  password: string;
  showSpinner =false;
  Jobs;
  JobNames;
//  paricularjob;


    showDataonClick(){
      this.showdataonclick=true
    }
  
  ShowData(){
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
      this.localStorage.setItem('user', JSON.parse(data["_body"])).subscribe(() => {});
      //this.router.navigate(["starter"]);
    }); 
  }

  getAlljobs(){
   // alert("I am in Corresponding ts file");
  
    this.userService.SearchJobs()
    .subscribe(res => this.Jobs = res);
   // alert(this.Jobs);
  }
  searchbykey(){
    this.userService.SearchbyName()
    .subscribe(res => this.JobNames = res);
    console.log(this.JobNames);
  }
}
