import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { SignupComponent } from './user-management/signup/signup.component';

export const AppRoutes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: '',
        loadChildren: './user-management/user.module#UserModule'
      }
    ]
  },
  {
    path: '',
      component: LoginLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './user-management/user.module#UserModule'
      }, {
        path: 'signup',
        component: SignupComponent
      }]
  }
];
