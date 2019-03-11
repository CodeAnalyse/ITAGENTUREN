import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../../services/user.services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  isLinear = true;
  signupForm: FormGroup;
  secondFormGroup: FormGroup;
  isEditProfile = false;
  options = [
  ];
  user;
  userExperience = [];
  isExporting = false;
  isReadOnly = false;

  constructor(private userService: UserService, private _formBuilder: FormBuilder, public snackBar: MatSnackBar, public dialog: MatDialog, private route: ActivatedRoute) {
    
    this.options = [
      {name:'C', value:'C', checked:false, experience: '0-1'},
      {name:'C++', value:'C++', checked:false, experience: '0-1'},
      {name:'C#', value:'C#', checked:false, experience: '0-1'},
      {name:'CSS', value:'CSS', checked:false, experience: '0-1'},
      {name:'JAVA', value:'JAVA', checked:false, experience: '0-1'},
      {name:'Javascript', value:'Javascript', checked:false, experience: '0-1'}];
      this.route.params.subscribe(params => {
        var id = params['id'];
        if(!id || id == 0){
          this.userService.getUser().subscribe((data) => {
            this.user = data;
            var usr = {
              "userId": this.user.id,
              "firstname": this.user.firstName,
              "lastname": this.user.lastName,
              "emailFormControl": this.user.email,
              "gender": this.user.gender,
              "dob": this.user.dob
            }
            
            this.setExpirence();
            this.signupForm.setValue(usr);
           });    
        }
        else{
          this.userService.getUserById(id).subscribe((data) => {
            this.user = JSON.parse(data["_body"]);
            this.isReadOnly = true;
            var usr = {
              "userId": this.user.id,
              "firstname": this.user.firstName,
              "lastname": this.user.lastName,
              "emailFormControl": this.user.email,
              "gender": this.user.gender,
              "dob": this.user.dob
            }
            
            console.log(usr);
            this.setExpirence();
            this.signupForm.setValue(usr);
           });
        }
      });
   }

   setExpirence(){
    this.userService.listUserExperience(this.user.id).subscribe(data => {
      this.userExperience = JSON.parse(data["_body"]);
      if(this.userExperience){
        for(var i = 0; i < this.options.length; i++){
          for(var j = 0; j < this.userExperience.length; j++){
            if(this.options[i].value == this.userExperience[j].language){
              this.options[i].checked = true;
              this.options[i].experience = this.userExperience[j].experience;
              break;
            }
          }
        }
      }
    });
   }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userId: new FormControl(0),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),      
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('male')
    });
  }

  calculateAge(birthday) { // birthday is a date
    birthday = new Date(birthday);
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }


  public captureScreen()  
  {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      disableClose: true
    });

    this.isExporting = true;
    setTimeout(function(){
      
    var data = document.getElementById('contentToConvert');  
      html2canvas(data).then(canvas => {  
        // Few necessary setting options  
        var imgWidth = 208;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        pdf.save(this.user.firstName + '.pdf'); // Generated PDF  
        this.isExporting = false;
        dialogRef.close();
      });
    }.bind(this), 5000);  
  }

  remove(val){
    console.log(val);
    for(var i = 0; i < this.options.length; i++){
      if(this.options[i].value == val){
        this.options[i].checked = false;
      }
    }
  }

  EditProfile(){
    this.isEditProfile = true;
  }

  saveExperience(){
    var userExp = [];
    for(var i = 0; i < this.options.length; i++){
      if(this.options[i].checked){
        userExp.push({
          "UserId": this.user.id,
          "Language": this.options[i].value,
          "Experience": this.options[i].experience
        });
      }
    }

    this.userService.postUserExperience(userExp).subscribe(data => {
      this.snackBar.open("Saved Successfully!!", "Success", {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.isEditProfile = false;
    });
  }

  register(signupFormvalue){
    var user = {
      "Id": signupFormvalue.userId,
      "FirstName": signupFormvalue.firstname,
      "LastName": signupFormvalue.lastname,
      "Gender": signupFormvalue.gender,
      "Password": signupFormvalue.password,
      "Dob": (new Date(signupFormvalue.dob)).toDateString()
    }
    this.userService.registerUser(user).pipe(catchError((error: any) => {
      this.snackBar.open("Error while saving data!!", "Warn", {
        duration: 2000,
        verticalPosition: 'top'
      });
      throw error;
    })).subscribe(data => {
      this.snackBar.open("Saved Successfully!!", "Success", {
        duration: 2000,
        verticalPosition: 'top'
      });
    }); 
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}


}