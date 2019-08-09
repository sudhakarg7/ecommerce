import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {User} from '../user.model';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users:any={};
  constructor(public api:ApiService) { 

  }
  getUser(){
    // this.api.getUsers().then((data:any)=>{
    //   this.users = data;
    // });
  }

  ngOnInit() {
    this.api.getUsers().then((data:any)=>{
      this.users = data;
    });
  }

}
