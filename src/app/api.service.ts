import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  public base: string = "http://localhost:4439/";
  constructor(public http: HttpClient) { }

  login(data: Object) {
    return this.post('users/login', data);
  }
  register(data: Object) {
    return this.post('users/register', data);
  }
  getUsers() {
    return this.get('users/getusers');

  }

  post(url: string, params: any) {
    var data = params;
    let headers: any = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(this.base + url, data, headers)
      .toPromise()
      .then()
      .catch()


  }
  get(url) {
    let headers: any = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.base + url, headers)
      .toPromise()
      .then()
      .catch((err) => {
        console.log(err);
      })
  }

}