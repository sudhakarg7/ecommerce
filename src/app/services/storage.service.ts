import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public data: any = {};
  public storageName: string = "playShop-WishList";
  constructor(){
    this.loadStorage();
  }


  
  loadStorage(){
    let temp = localStorage.getItem(this.storageName);
    if(temp == undefined || temp == null || temp == ''){
      
      this.data = {};
    }else{
      this.data = JSON.parse(temp);
    }
  }




  set( obj:any ){ // {name:'arun',city:'aaa'}
    // Object.keys(obj).forEach( (key) =>{
      for(let key of Object.keys(obj)){
      this.data[key] = obj[key];
    }
    this.synch();
  }
  synch(){
    localStorage.setItem(this.storageName,JSON.stringify(this.data))
  }
  get(key=''){
    if(key==''){
      return this.data;
    }else{
     return this.data[key];
    }
  }
  remove(key){
    delete this.data[key];
    this.synch();
  }
  removeAll(){
    this.data = {};
    this.synch();
  }
}