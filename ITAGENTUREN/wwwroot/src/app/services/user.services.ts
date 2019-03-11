import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { User } from '../model/user.mode';

@Injectable()
export class UserService {
  isSessionVaild = true;

  constructor(private http: Http, public router: Router,
    protected localStorage: LocalStorage) {  }

  getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
    headers.append('Authorization', 'Bearer ' + this.getToken());
    return headers;
  }

  getUser(){
    return this.localStorage.getItem<User>('user');
  }

  getUserById(userId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(environment.apiUrl + 'Users/GetUser/'+userId, { headers: headers });
  }

  getToken(){
    return '';
  }

  registerUser(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
    return this.http.post(environment.apiUrl + 'Users/PostUser', data, { headers: headers });
  }

  postUserExperience(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
    return this.http.post(environment.apiUrl + 'Users/PostUserExperience', data, { headers: headers });
  }

  listUserExperience(userId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
    return this.http.get(environment.apiUrl + 'Users/GetUserExperience?userId='+userId, { headers: headers });
  }

//   approveUser(data) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Access-Control-Allow-Origin', '*');
//     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
//     return this.http.post(environment.apiUrl + 'Users/ApproveUser', data, { headers: headers });
//   }

//   disableUser(data) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Access-Control-Allow-Origin', '*');
//     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
//     return this.http.post(environment.apiUrl + 'Users/DisableUser', data, { headers: headers });
//   }

  loginUser(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT');
    return this.http.post(environment.apiUrl + 'Users/LoginUser', data, { headers: headers });
  }

  listUser() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(environment.apiUrl + 'Users/GetUsers', { headers: headers });
  }
}