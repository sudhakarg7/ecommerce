import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
// import { productDetails } from '../model/product.model';


@Injectable()
export class CartService {
  
public cartItems = [];
public messageSuccess:boolean = false;
public cartmsg:boolean = false;
public wishmsg:boolean = false;
// public products=productDetails;
public allItems: any  = {};  
public cartData: any= {};
public cartItemsList: any= [];
public productQuantity:any =0;
public cartTotal: any= 0;
public cartItemsStorageName = 'cartList';

  constructor(
    public storage: StorageService
  ){
    this.loadCart();
  }


  loadCart(){
    let temp = this.storage.get('cartList'); 
    if(temp === undefined || temp ==='' || temp === null){
      this.cartData = {}; 
    }else{
      this.cartData = temp; 
    }
  }
  
// addToCart(item){
//   let cartArr = this.storage.get('cartList') || {};
//   if(cartArr.indexOf(item)==-1){ 
//   cartArr[item] = 1;
//   }else{
//      cartArr[item] = cartArr[item]+1;
//   }
//   this.storage.set({cartList: cartArr});
//   }
 
//   this.cartItems = this.getCartItems();

//     this.messageSuccess = true;
//     this.wishmsg=false;
//   this.cartmsg = true;
//   setTimeout(()=>{  
//       this.messageSuccess = false;
//  }, 2000);
// }

  addToCart(pid,qty){   
    if(this.cartData[pid] == undefined){
      this.cartData[pid] = 0;
    }
 
      this.cartData[pid] =  this.cartData[pid] + qty;
    
    
    if(this.cartData[pid]==0){
      delete this.cartData[pid];
    }

    console.log(this.cartData);
    this.storeItems();
  }

  storeItems(){
    this.storage.set({
      'cartList' : this.cartData
    });
    this.getCartItems();
  }


  getCartItems(){
 // let cartList = this.storage.get('cartList');
  let cartListArr = Object.keys(this.cartData);
  let cartListItems = {
    cart:[],
    total:0
  };
  for(let i=0; i<cartListArr.length; i++){
    // let num = parseInt(cartListArr[i]);
    // let items = this.products.find(item => item.uid === num);
    // let obj={};
    // obj['pid']=items.uid;
    // obj['name']=items.name;
    // obj['qty']=this.productQuantity +1;
    // obj['uprice']=items.price;
    // obj['price']=items.price * obj['qty'];
    // cartListItems.cart.push(obj);
  }
  // console.log("new cart", cartListItems);
   return cartListItems;
}

plus(id){  
}
minus(id){
}

}
