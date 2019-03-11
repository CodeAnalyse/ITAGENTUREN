import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './signup/signup.component';
import { UserRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent, DialogOverviewExampleDialog } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [DialogOverviewExampleDialog, SignupComponent, LoginComponent, UserProfileComponent, UserDashboardComponent],
  entryComponents: [UserProfileComponent, DialogOverviewExampleDialog]
})
export class UserModule {}
