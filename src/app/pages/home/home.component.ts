import { Component, Output,EventEmitter } from '@angular/core';
// import{ productDetails } from './../../model/product.model';
import { StorageService } from './../../services/storage.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

@Output() aname: EventEmitter<any> = new EventEmitter();
@Output() cartObj: EventEmitter<any> = new EventEmitter();

// public products=productDetails;
public searchText ='';
public fieldName ='';
public category ='';
public quantity:number = 1;
public cartEmpty:boolean = false;
public categoryName ='All Category';
public wishList = [];
public price:number = 0;
public messageSuccess:boolean = false;
public cartmsg:boolean = false;
public wishmsg:boolean = false;
  constructor(public storage:StorageService, public cart:CartService) { }

  ngOnInit() {
   //this.cart.getCartItems();
  }

  


categoryClick(cat){
  this.category = cat;
  if(cat == ''){
    cat = "All";
  }
  this.categoryName = cat + " category";
}
addToCart(productId, qnt){
this.cart.addToCart(productId, qnt);
}

plus(id){
this.cart.plus(id);
}
minus(id){
  this.cart.minus(id);
}


wishListClick(item){
  let wishlistArr = this.storage.get('wislist') || [];
  if(wishlistArr.indexOf(item)==-1){
  wishlistArr.push(item);
  this.storage.set({wislist: wishlistArr});
  }
  this.aname.emit(this.getWishList());
  this.messageSuccess = true;
  this.cartmsg = false;
  this.wishmsg = true;
  setTimeout(()=>{  
      this.messageSuccess = false;
 }, 2000);
}

getWishList(){
  let wishlistArr = this.storage.get('wislist');
  let wishListItems = [];
  for(let i=0; i<wishlistArr.length; i++){
    // let items = this.products.find(item => item.uid === wishlistArr[i]);
    // wishListItems.push(items);
  }
   return wishListItems;
   
}


}