import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
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
        path: 'profile',
        loadChildren: './user-management/user.module#UserModule'
      },
      {
        path: 'admin',
        loadChildren: './Admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: '',
      component: LoginLayoutComponent,
      children: [
      {
        path: '',
        loadChildren: './user-management/user.module#UserModule'
      }]
  }
];
