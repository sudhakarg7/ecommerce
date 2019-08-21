import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public token:string;
  public userInfo:Object;
  constructor(private _route:ActivatedRoute, public api:ApiService, public router:Router) { 

  }

  ngOnInit() {
    const userToken =localStorage.getItem('token');
    this.token = userToken;
    this.getUserInfo()
  }


  getUserInfo(){


    if(this.token!=null){
      
      this.api.getUserDetails({token: JSON.parse(this.token)}).then((res)=>{
        this.userInfo = res; 
    }).catch((err)=>{
        console.log(err);
    })
  
     
  }else{
    this.router.navigate(['/login']);
  }
}
}
