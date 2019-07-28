webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		268,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.products = [
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
    }
    HomePage_1 = HomePage;
    HomePage.storeToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage) {
        var itemtotal = itemprice;
        HomePage_1.cartItemsData.push({ itemid: itemid, itemname: itemname, itemquantity: itemquantity, itemquantitytype: itemquantitytype, itemprice: itemprice, itemtotal: itemtotal, itemImage: itemImage });
        console.log(HomePage_1.cartItemsData);
    };
    // return cart product count
    HomePage.prototype.cartCounterManager = function () {
        return HomePage_1.cartItemsData.length;
    };
    HomePage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    HomePage.prototype.addToCart = function (itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage) {
        if (HomePage_1.checkCart(itemid) != true) {
            HomePage_1.storeToCart(itemid, itemname, itemquantity, itemquantitytype, itemprice, itemImage);
            var toast = this.toastCtrl.create({
                message: "Product Added to Cart!",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: "Product Already in Cart!",
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
    };
    // check cart data if item is already present
    HomePage.checkCart = function (itemid) {
        var result;
        for (var _i = 0, _a = HomePage_1.cartItemsData; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val.itemid == itemid) {
                result = true;
                break;
            }
            else {
                result = false;
            }
        }
        return result;
    };
    HomePage.cartItemsData = [];
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Cart System\n    </ion-title>\n    <ion-buttons end class="cartbadge">\n    <button ion-button (click)="gotocart()">\n      <ion-icon name="ios-cart"></ion-icon>\n    </button><ion-badge item-end>{{cartCounterManager()}}</ion-badge>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="products">\n  <ion-card *ngFor="let item of products;  let i = index;">\n    <img class="p-2" src="{{item.image}}">\n  <ion-card-header>\n    <h2 class="text-center">{{item.name}}</h2>\n  </ion-card-header>\n  <ion-card-content>\n      <div class="quantity">{{item.quantitytype}}</div> <div class="price">$ {{item.price}}</div>\n      <div class="btn-cart"><button ion-button (click)="addToCart(item.id,item.name,item.quantity,item.quantitytype,item.price, item.image)"><ion-icon name="md-add-circle"></ion-icon>&nbsp;Add to Cart</button>\n      </div>\n  </ion-card-content>\n</ion-card>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.shipping = 0.50;
        this.amount = 0.00;
        this.finalamount = 0.00;
        this.finalcartdata = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */].cartItemsData;
        this.calculatecart();
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.calculatecart = function () {
        this.amount = 0.00;
        for (var _i = 0, _a = this.finalcartdata; _i < _a.length; _i++) {
            var item = _a[_i];
            this.amount += parseFloat(item.itemprice) * parseInt(item.itemquantity);
        }
        this.finalamount = +this.amount + +this.shipping;
    };
    CartPage.prototype.changeQty = function (i, change) {
        var qty = parseInt(this.finalcartdata[i].itemquantity);
        qty += parseInt(change);
        if (qty != 0) {
            this.finalcartdata[i].itemquantity = qty;
            this.calculatecart();
        }
        else if (qty == 0) {
            this.finalcartdata.splice(i, 1);
            this.calculatecart();
            if (this.finalcartdata.length == 0) {
                this.navCtrl.pop();
            }
        }
        this.toastController.create({
            message: "Cart Updated.",
            duration: 2000
        }).present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        <div class="grids">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6> Delivery Charges </ion-col>\n              <ion-col col-6 class="DeliveryCharges">\n                <span style="float:right">$ {{ shipping }}</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6> Total </ion-col>\n              <ion-col col-6 class="grandtotal">\n                <span style="float:right">$ {{ finalamount}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <hr />\n        <div class="cartitems">\n          <ion-grid>\n            <ion-row *ngFor="let c of finalcartdata; let itemno = index">\n              <ion-col><img src="{{c.itemImage}}"></ion-col>\n              <ion-col class="noborder"> \n                <ion-row>\n                  <ion-col>{{ c.itemname }} </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>{{ c.itemquantitytype }}</ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>Qty : {{c.itemquantity}}</ion-col>\n                  </ion-row>\n              </ion-col>\n              <ion-col>\n                <ion-row style="border:none">\n                <ion-col>\n                  $ {{ c.itemprice * c.itemquantity }}    \n                </ion-col>\n              </ion-row>\n              <ion-row style="border:none" class="updwnbtn">\n                  <button ion-button color="danger" outline (click)="changeQty(itemno,-1)"><b>-</b></button>\n                  <button ion-button color="danger" outline (click)="changeQty(itemno, 1)" ><b>+</b></button> \n              </ion-row>\n            </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n        <h3 style="text-align: center; margin-top: 8rem;"><b> Total : ${{finalamount}}</b></h3>\n</ion-content>\n'/*ion-inline-end:"C:\Users\CyberBlack\Desktop\gotspace\cartmanagement\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object])
    ], CartPage);
    return CartPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cart.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map