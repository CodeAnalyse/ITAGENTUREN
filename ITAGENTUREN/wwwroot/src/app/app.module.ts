import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';

import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';

import { AppLoginHeaderComponent } from './layouts/login-layout/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';

import { UserService } from './services/user.services';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailJobComponent } from './detail-job/detail-job.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    LoginLayoutComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AppLoginHeaderComponent,
    FilterPipe,
    DetailJobComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    Ng2SearchPipeModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
