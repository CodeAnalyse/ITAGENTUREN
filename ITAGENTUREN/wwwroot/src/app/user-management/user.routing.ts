import { Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const UserRoutes: Routes = [{
  path: 'signup',
  component: SignupComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: '',
    component: UserProfileComponent
}];
