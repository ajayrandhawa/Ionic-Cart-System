import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  shipping = 0.50;
  amount = 0.00;
  finalamount = 0.00;

  finalcartdata;


  constructor(public navCtrl: NavController, public navParams: NavParams, public toastController : ToastController) {
    this.finalcartdata = HomePage.cartItemsData;
    this.calculatecart();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

    calculatecart(){
      this.amount = 0.00;
      for(let item of this.finalcartdata){
        this.amount += parseFloat(item.itemprice) * parseInt(item.itemquantity); 
    }
    this.finalamount = +this.amount + +this.shipping;
    
  }

  changeQty(i, change){

    let qty = parseInt(this.finalcartdata[i].itemquantity);
    qty += parseInt(change);

    if(qty != 0){
      this.finalcartdata[i].itemquantity = qty;
      this.calculatecart();
    }else if(qty == 0){
      this.finalcartdata.splice(i, 1);
      this.calculatecart();
      if(this.finalcartdata.length == 0){
        this.navCtrl.pop();
      }
    }

      this.toastController.create({
        message: "Cart Updated.",
        duration: 2000
      }).present();

  }

}
