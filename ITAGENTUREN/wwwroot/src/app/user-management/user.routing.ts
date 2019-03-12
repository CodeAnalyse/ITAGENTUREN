import { Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export const UserRoutes: Routes = [
{
    path: '',
    component: LoginComponent
},
{
    path: 'user-dash',
    component: UserDashboardComponent
},
{
    path: 'profile/:id',
    component: UserProfileComponent
}];
