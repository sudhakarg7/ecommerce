import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public token:string;
  constructor(private _route:ActivatedRoute) { 

    this._route.queryParams.subscribe(params => {
      this.token = params["token"];
      })
  }

  ngOnInit() {
    
  }

}
