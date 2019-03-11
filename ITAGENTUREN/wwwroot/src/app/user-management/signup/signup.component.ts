import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../../services/user.services';

import { catchError, map } from 'rxjs/operators';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),      
      password: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('male')
    });
  }

  register(signupFormvalue){
    var user = {
      "FirstName": signupFormvalue.firstname,
      "LastName": signupFormvalue.lastname,
      "Email": signupFormvalue.emailFormControl,
      "Gender": signupFormvalue.gender,
      "Password": signupFormvalue.password,
      "Dob": signupFormvalue.dob.toDateString()
    }
    this.userService.registerUser(user).pipe(catchError((error: any) => {
      //this.flashMessage.show("Error while saving feedback!!",  { cssClass: 'alert-danger', timeout: 3000 });
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
      //this.flashMessage.show("Feedback saved successfully, Thank you!!",  { cssClass: 'alert-success', timeout: 3000 });
    }); 
  }

}
