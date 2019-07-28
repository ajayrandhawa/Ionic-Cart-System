import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products = [
    {
        "id": "100001",
        "name": "Pineapple",
        "category": "Fruits",
        "price": "2.00",
        "quantity": "1",
        "quantitytype": "1 Unit",
        "image": "./assets/imgs/pineapple.png"
    },
    {
        "id": "100002",
        "name": "Orange",
        "category": "Fruits",
        "price": "1.50",
        "quantity": "1",
        "quantitytype": "1 Kg",
        "image": "./assets/imgs/orange.png"
    },
    {
        "id": "100003",
        "name": "Apple",
        "category": "Fruits",
        "price": "3.50",
        "quantity": "1",
        "quantitytype": "1 Kg",
        "image": "./assets/imgs/apple.png"
    },
    {
        "id": "100004",
        "name": "Strawberry",
        "category": "Fruits",
        "price": "4.50",
        "quantity": "1",
        "quantitytype": "1 Kg",
        "image": "./assets/imgs/strwberry.png"
    }
];

  static cartItemsData = [];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  public static storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage) {
    var itemtotal = itemprice;
    HomePage.cartItemsData.push({itemid, itemname, itemquantity, itemquantitytype, itemprice, itemtotal, itemImage});
    console.log(HomePage.cartItemsData);
  }

  // return cart product count

  cartCounterManager(){
    return HomePage.cartItemsData.length
  }

  gotocart(){
    this.navCtrl.push(CartPage);
  }


  addToCart(itemid:any, itemname:any, itemquantity:any, itemquantitytype:any, itemprice:any, itemImage:any) {
    if(HomePage.checkCart(itemid) != true){
      HomePage.storeToCart(itemid,itemname,itemquantity,itemquantitytype,itemprice, itemImage);
      let toast = this.toastCtrl.create({
        message: "Product Added to Cart!",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }else{
      let toast = this.toastCtrl.create({
        message: "Product Already in Cart!",
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }
  }


  // check cart data if item is already present

  public static checkCart(itemid){

    var result;

    for (var val of HomePage.cartItemsData) {
      if(val.itemid == itemid){
          result = true;
          break;
      }
      else{
        result = false
      }
    }

    return result;
  }
}
