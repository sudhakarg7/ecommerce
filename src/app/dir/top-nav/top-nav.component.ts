import { Component, OnInit,Input } from '@angular/core';
// import{ productDetails } from './../../model/product.model';
import { StorageService } from './../../services/storage.service';


@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  public isCartShow:boolean = false;
  // public products=productDetails;
  public wishCount:number;
  public cartCount:number;
   public wishList = [];
   public cartList = [];
  @Input('_uname')
  set action($event){
  this.wishList = $event;
    console.log($event,'@@@');
    const wishlist = this.storage.get('wislist');
    if(wishlist && wishlist.length > 0){
      this.wishCount = this.storage.get('wislist').length;
    }
    
  }
  @Input('_cart')
  set action2($event){
  this.cartList = $event;
    console.log($event,'@@@');
    const cart =this.storage.get('cartList');
    if(cart && cart.length > 0){
      this.cartCount = this.storage.get('cartList').length;
    }
    
  }
  

  constructor(public storage:StorageService) { 
   this.wishList =[];
  // console.log(this.wishList);
  }

  ngOnInit() {
    this.wishClk();
  }

  wishClk(){
  const wish = this.storage.get('wislist');
  let wishlistArr = this.storage.get('wislist');
  let wishListItems = [];
  if(wish && wish.length>0){
  for(let i=0; i>wishlistArr.length; i++){
    // let items = this.products.find(item => item.uid === wishlistArr[i]);
    // wishListItems.push(items);
  }
   this.wishList= wishListItems;
  }
  
}

  cartShowHide(){
    this.isCartShow = !this.isCartShow;
  }
  autoCloseForDropdownCars(event) {
        var target = event.target;
        if (!target.closest(".shopping-cart")) { 
            // do whatever you want here
            this.isCartShow = false;
        }
    }
}