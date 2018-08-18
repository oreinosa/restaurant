(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./categories/categories.module": [
		"./src/app/admin/categories/categories.module.ts",
		"categories-categories-module~products-products-module",
		"categories-categories-module"
	],
	"./products/products.module": [
		"./src/app/admin/products/products.module.ts",
		"categories-categories-module~products-products-module",
		"products-products-module"
	],
	"./users/users.module": [
		"./src/app/admin/users/users.module.ts",
		"users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/categories/categories.service.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/categories/categories.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/dao */ "./src/app/shared/helpers/dao.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesService = /** @class */ (function (_super) {
    __extends(CategoriesService, _super);
    function CategoriesService(httpClient) {
        return _super.call(this, httpClient, "Categoría", "Categorías", "categorias") || this;
    }
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}(_shared_helpers_dao__WEBPACK_IMPORTED_MODULE_2__["DAO"]));



/***/ }),

/***/ "./src/app/admin/products/products.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/products/products.service.ts ***!
  \****************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/dao */ "./src/app/shared/helpers/dao.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function (_super) {
    __extends(ProductsService, _super);
    function ProductsService(httpClient) {
        var _this = _super.call(this, httpClient, "Producto", "Productos", "productos") || this;
        _this.httpClient = httpClient;
        return _this;
    }
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}(_shared_helpers_dao__WEBPACK_IMPORTED_MODULE_2__["DAO"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule"
    }
    // { path: '**', redirectTo: 'not-found'}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-container (drop)='false' (dragover)=\"false\">\r\n  <router-outlet></router-outlet>\r\n  <app-notifications></app-notifications>\r\n</app-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.module */ "./src/app/shopping-cart/shopping-cart.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notifications.module */ "./src/app/notifications/notifications.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/admin.guard */ "./src/app/auth/admin.guard.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function tokenGetter() {
    return localStorage.getItem("token");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_13__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: [
                            "localhost:8080",
                            "localhost",
                            "127.0.0.1",
                            "thenewfuturesv.com",
                            "www.thenewfuturesv.com",
                            "ubuntu"
                        ]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_14__["MenuModule"],
                _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/admin.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminGuard = /** @class */ (function () {
    function AdminGuard() {
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: 'login', component: LoginComponent },
    { path: 'perfil', redirectTo: 'perfil/personal' },
    { path: 'perfil/:action', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, notifications) {
        this.auth = auth;
        this.router = router;
        this.notifications = notifications;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.loggedIn()) {
            return true;
        }
        this.notifications.show("Por favor, inicia sesión primero.", "Autenticación", "danger");
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/auth/profile/profile.component.ts");
/* harmony import */ var _profile_personal_personal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/personal/personal.component */ "./src/app/auth/profile/personal/personal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _profile_personal_personal_component__WEBPACK_IMPORTED_MODULE_7__["PersonalComponent"]
            ],
            entryComponents: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper, router) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.router = router;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api + "auth/";
        this.checkSession();
    }
    AuthService.prototype.checkSession = function () {
        var token = null, user = null;
        if (this.loggedIn()) {
            console.log("user is already logged in");
            token = localStorage.getItem("token");
            user = JSON.parse(localStorage.getItem("user"));
        }
        this.token = token;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](user);
    };
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this.userSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.loggedIn = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.login = function (login) {
        return this.http.post(this.api + "login", login);
    };
    AuthService.prototype.register = function (register) {
        return this.http.post(this.api + "register", register).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            if (res.data) {
                return res.data;
            }
            return res;
        }));
    };
    AuthService.prototype.signOut = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.updateUserData(null, null);
        this.router.navigate([""]);
    };
    AuthService.prototype.updateUserData = function (user, token) {
        console.log("Updated user : ", user);
        this.userSubject.next(user);
        this.token = token;
        if (user && token) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <h2 mat-dialog-title>Ingresa a tu cuenta</h2>\r\n  <mat-dialog-content>\r\n    <!-- <div class=\"row\"> -->\r\n    <!-- <div class=\"col-12 col-sm-10 col-md-8 col-lg-6 mx-auto text-center\"> -->\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" placeholder='Correo electrónico' [(ngModel)]='login.email' name='email' required [readonly]='f.submitted'>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder='Contraseña' [(ngModel)]='login.password' name='password' [readonly]='f.submitted'>\r\n    </mat-form-field>\r\n    <!-- </div> -->\r\n    <!-- </div> -->\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Ingresar</button>\r\n    <button mat-button mat-dialog-close [disabled]='f.submitted'>Cancelar</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/login */ "./src/app/shared/models/login.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(dialogRef, auth, notifications) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.notifications = notifications;
        this.login = new _shared_models_login__WEBPACK_IMPORTED_MODULE_2__["Login"]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var loginForm = form.value;
        this.auth.login(loginForm).subscribe(function (res) {
            console.log(res);
            _this.auth.updateUserData(res.user, res.token);
            _this.notifications.show("Hola " + res.user.name + "!", undefined, "success");
            _this.dialogRef.close();
            // this.dialogRef.close({
            //   user: res.user
            // });
        }, function (e) {
            _this.notifications.show(e.error, undefined, "danger");
            form.resetForm();
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__["NotificationsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cerrar sesión</h2>\r\n<mat-dialog-content>\r\n  <p>¿Seguro que quieres cerrar tu sesión?</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close (click)='onSubmit()'>Sí</button>\r\n  <button mat-button mat-dialog-close>No</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(dialogRef, auth, notifications) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.notifications = notifications;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.onSubmit = function () {
        this.auth.signOut();
        this.notifications.show("Adiós!");
        this.dialogRef.close();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/profile/personal/personal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/profile/personal/personal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-container *ngIf='$user | async as user'> -->\n<mat-card>\n  <!-- <mat-card-header>\n      <mat-card-title>\n        <h2></h2>\n      </mat-card-title>\n    </mat-card-header> -->\n  <mat-card-content>\n    <h4>\n      <b>ID: </b> {{ user._id }}\n    </h4>\n    <h4>\n      <b>Nombre: </b> {{ user.name }}\n    </h4>\n    <h4>\n      <b>Correo electrónico: </b> {{ user.email }}\n    </h4>\n    <h4>\n      <b>Rol: </b> {{ user.role }}\n    </h4>\n  </mat-card-content>\n</mat-card>\n<!-- </ng-container> -->"

/***/ }),

/***/ "./src/app/auth/profile/personal/personal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/profile/personal/personal.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/profile/personal/personal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/profile/personal/personal.component.ts ***!
  \*************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/user */ "./src/app/shared/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalComponent = /** @class */ (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], PersonalComponent.prototype, "user", void 0);
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/auth/profile/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.scss */ "./src/app/auth/profile/personal/personal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/auth/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf='$user | async as user; else loadingUser'>\r\n  <div class=\"col-12 col-sm-4\">\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h1>Mi perfil</h1>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          <h3>Hola, {{ user.name }}!</h3>\r\n        </mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-nav-list>\r\n          <a mat-list-item *ngFor='let link of links' routerLink='/perfil/{{link.route}}' routerLinkActive='active'>{{ link.label }}</a>\r\n        </mat-nav-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"col-12 col-sm-8\">\r\n    <ng-container [ngSwitch]='action'>\r\n      <app-profile-personal *ngSwitchCase='\"personal\"' [user]='user'></app-profile-personal>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<ng-template #loadingUser>\r\n  <mat-spinner class=\"col-12 mx-auto\"></mat-spinner>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.active {\n  background-color: rgba(0, 0, 0, 0.05); }\n"

/***/ }),

/***/ "./src/app/auth/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.links = [
            { route: 'personal', label: 'Información personal', icon: 'person_pin' }
        ];
        this.$user = this.auth.user;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return params.get('action'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (action) { return console.log(action); })).subscribe(function (action) { return _this.action = action; });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/auth/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/auth/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <h2 mat-dialog-title>Registrarse</h2>\r\n  <mat-dialog-content>\r\n    <!-- <div class=\"row\"> -->\r\n    <!-- <div class=\"col-12 col-sm-10 col-md-8 col-lg-6 mx-auto text-center\"> -->\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder='Nombre' [(ngModel)]='register.name' name='name' required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" placeholder='Usuario' [(ngModel)]='register.username' (blur)='prepareUsername($event.target.value)' name='username' required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"email\" placeholder='Correo electrónico' [(ngModel)]='register.email' name='email' required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder='Contraseña' [(ngModel)]='register.password' name='password' required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput type=\"password\" placeholder='Confirmar contraseña' [(ngModel)]='confirmPassword' name='confirmPassword' required\r\n        [pattern]='register.password'>\r\n    </mat-form-field>\r\n    <!-- </div> -->\r\n    <!-- </div> -->\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Registrarse</button>\r\n    <button mat-button mat-dialog-close [disabled]='f.submitted'>Cancelar</button>\r\n  </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_models_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/register */ "./src/app/shared/models/register.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dialogRef, auth, notifications) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.notifications = notifications;
        this.register = new _shared_models_register__WEBPACK_IMPORTED_MODULE_2__["Register"]();
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.prepareUsername = function (username) {
        // console.log(username);
        var dashesUsername;
        dashesUsername = username.replace(/--+/g, "-").trim().replace(/\s+/g, "-");
        var lastCharacterIndex = username.length - 1;
        var lastCharacter = dashesUsername[lastCharacterIndex];
        if (lastCharacter === "-") {
            dashesUsername = dashesUsername.substring(0, lastCharacterIndex);
        }
        this.register.username = dashesUsername;
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var registerForm = form.value;
        this.auth.register(registerForm).subscribe(function (res) {
            console.log(res);
            _this.notifications.show(res.msg, undefined, "success");
            _this.dialogRef.close();
        }, function (e) {
            _this.notifications.show(e.error, undefined, "danger");
            form.resetForm();
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_0__["NotificationsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/core/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  nosotros works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/core/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/core/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/core/container/avatar/avatar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/container/avatar/avatar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar-container\">\r\n  <h2>Hola, {{ user.name }}</h2>\r\n</div>"

/***/ }),

/***/ "./src/app/core/container/avatar/avatar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/container/avatar/avatar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar-container {\n  color: black;\n  text-align: center; }\n  .avatar-container h6 {\n    font-weight: normal; }\n"

/***/ }),

/***/ "./src/app/core/container/avatar/avatar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/container/avatar/avatar.component.ts ***!
  \***********************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/user */ "./src/app/shared/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
    }
    AvatarComponent.prototype.ngOnInit = function () {
        // console.log('USER IS ', this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], AvatarComponent.prototype, "user", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/core/container/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.scss */ "./src/app/core/container/avatar/avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/core/container/container.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/container/container.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\" *ngIf='(overlay$ | async) as overlay'>\r\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" [attr.role]=\"!overlay ? 'dialog' : 'navigation'\" mode=\"over\">\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-toolbar-row *ngIf='((overlay) === \"xs\")'>\r\n        <span id='app-title' style='text-align: center;color:white'>{{ appName }}</span>\r\n      </mat-toolbar-row>\r\n      <mat-toolbar-row>\r\n        <span style='text-align: center;color:white'>Menu</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <!-- <br>\r\n    <app-avatar [user]='user' *ngIf='user'></app-avatar>\r\n    <hr> -->\r\n    <app-sidenav-content [user]='user' [actions]='actions' [links]='links' (action)='onAction($event);drawer.close()' (toggleNav)='drawer.close()'\r\n      [overlay]='overlay'></app-sidenav-content>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <app-toolbar [user]='user' [actions]='actions' [links]='links' [appName]='appName' [overlay]='overlay' (toggleNav)='drawer.toggle()'\r\n      (action)='onAction($event)'></app-toolbar>\r\n    <div class=\"container-fluid\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <!-- <app-footer *ngIf='false'></app-footer> -->\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<!-- <app-toolbar [actions]='actions' [links]='links' [appName]='appName' [overlay]='overlay' (action)='onAction($event)'></app-toolbar>\r\n<div class=\"container-fluid\">\r\n  <ng-content></ng-content>\r\n</div> -->"

/***/ }),

/***/ "./src/app/core/container/container.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/container/container.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {}\n@keyframes cdk-text-field-autofill-start {}\n@-webkit-keyframes cdk-text-field-autofill-end {}\n@keyframes cdk-text-field-autofill-end {}\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.bg-primary-light {\n  background-color: #e57373 !important; }\n.bg-primary {\n  background-color: #ef5350 !important;\n  color: white !important; }\n.bg-primary-dark {\n  background-color: #e53935 !important; }\n.bg-accent-light {\n  background-color: #fff59d !important; }\n.bg-accent {\n  background-color: #ffee58 !important; }\n.bg-accent-dark {\n  background-color: #fdd835 !important; }\n.bg-warn-light {\n  background-color: #ffcc80 !important; }\n.bg-warn {\n  background-color: #ffa726 !important; }\n.bg-warn-dark {\n  background-color: #fb8c00 !important; }\n.bg-success-light {\n  background-color: #c5e1a5 !important; }\n.bg-success {\n  background-color: #9ccc65 !important; }\n.bg-success-dark {\n  background-color: #7cb342 !important; }\n.bg-danger-light {\n  background-color: #ffab91 !important; }\n.bg-danger {\n  background-color: #ff7043 !important; }\n.bg-danger-dark {\n  background-color: #f4511e !important; }\n.container-fluid {\n  background-color: #d3d3d3;\n  /* Full height */\n  height: 100%;\n  min-height: 850px;\n  /* Center and scale the image nicely */\n  padding-top: 15px;\n  padding-bottom: 15px; }\n.sidenav {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.1);\n  background-color: #e57373; }\n"

/***/ }),

/***/ "./src/app/core/container/container.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/container/container.component.ts ***!
  \*******************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BREAKPOINTS = {
    xsmall: "(max-width: 599px)",
    small: "(min-width: 600px) and (max-width: 799px)",
    medium: "(min-width: 800px) and (max-width: 999px)",
    large: "(min-width: 1000px) and (max-width: 1279px)",
    xlarge: "(min-width: 1280px)"
};
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(breakpointObserver, dialog, router, auth) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.router = router;
        this.auth = auth;
        this.appName = "Restaurante App";
        this.overlay$ = this.breakpointObserver
            .observe([
            BREAKPOINTS.xsmall,
            BREAKPOINTS.small,
            BREAKPOINTS.medium,
            BREAKPOINTS.large,
            BREAKPOINTS.xlarge
        ])
            .pipe(
        // tap(result => console.log(result)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            var layout;
            if (_this.checkBreakpoint(BREAKPOINTS.xlarge)) {
                layout = "xl";
            }
            else if (_this.checkBreakpoint(BREAKPOINTS.large)) {
                layout = "lg";
            }
            else if (_this.checkBreakpoint(BREAKPOINTS.medium)) {
                layout = "md";
            }
            else if (_this.checkBreakpoint(BREAKPOINTS.small)) {
                layout = "sm";
            }
            else if (_this.checkBreakpoint(BREAKPOINTS.xsmall)) {
                layout = "xs";
            }
            return layout;
        })
        // , tap(layout => console.log(layout))
        );
        this.links = [
            // { label: "Bienvenidos", route: "", icon: "home" },
            { label: "Ordenar", route: "menu", icon: "restaurant_menu" }
        ];
        this.actions = [
            { label: "Ingresar", name: "ingresar", icon: "person" },
            { label: "Registrarse", name: "registrarse", icon: "person_add" }
        ];
        this.auth.user
            .pipe(
        // filter(user => !!user),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) { return _this.updateRouting(user ? user.role : "not-signed-in"); }))
            .subscribe(function (user) { return (_this.user = user); });
    }
    ContainerComponent.prototype.checkBreakpoint = function (breakpoint) {
        return this.breakpointObserver.isMatched(breakpoint);
    };
    ContainerComponent.prototype.onAction = function (action) {
        var component;
        switch (action) {
            case "ingresar":
                component = _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"];
                break;
            case "registrarse":
                component = _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"];
                break;
            case "cerrar-sesion":
                component = _auth_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__["LogoutComponent"];
                break;
            default:
                this.router.navigate([action]);
                return;
        }
        var event = this.dialog.open(component, {
            width: "350px"
        });
        // event.afterClosed().subscribe(result => {
        //   if (result) {
        //     let role = "not-logged-in";
        //     if (result.user) {
        //       role = result.user.role;
        //     }
        //     this.updateRouting(role);
        //   }
        // });
    };
    ContainerComponent.prototype.updateRouting = function (role) {
        console.log("Updating routing for ", role);
        var links = [
            // { label: "Bienvenidos", route: "", icon: "home" },
            { label: "Ordenar", route: "menu", icon: "restaurant_menu" }
        ];
        var actions = [];
        switch (role) {
            case "Admin":
                links.push({
                    label: "Admin", route: "admin", icon: "build", children: [
                        { label: "Usuarios", route: "usuarios", icon: "people" },
                        { label: "Categorías", route: "categorias", icon: "category" },
                        { label: "Productos", route: "productos", icon: "fastfood" },
                        { label: "Combos", route: "combos", icon: "restaurant_menu" },
                    ]
                });
                links.push({
                    label: "Órdenes",
                    route: "ordenes",
                    icon: "assignment_late"
                });
            // tslint:disable-next-line:no-switch-case-fall-through
            case "Cliente":
                actions.push({ label: "Carrito", route: "carrito", icon: "add_shopping_cart" });
                break;
            default:
                actions.push({ label: "Ingresar", name: "ingresar", icon: "person" }, { label: "Registrarse", name: "registrarse", icon: "person_add" });
        }
        this.links = links;
        this.actions = actions;
    };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-container",
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/core/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/core/container/container.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/core/container/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/container/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class='bg-primary'>\r\n  <mat-toolbar-row class='salud d-block text-center'>\r\n    <h3>No solamente cuidamos tu salud, sino también tus equipos</h3>\r\n    <p>\r\n      Al no utilizar endulzantes ni edulcorantes en exceso garantizamos que nuestros líquidos no dañarán tus resistencias.\r\n    </p>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row class='d-block'>\r\n    <h6 class='text-center'>2016-2018 - Vape Club SV</h6>\r\n    <div class=\"text-center\">\r\n\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/core/container/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/container/footer/footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar .salud {\n  width: 100%;\n  color: white;\n  /* The image used */\n  opacity: 0.8;\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  padding: 50px; }\n  mat-toolbar .salud h3, mat-toolbar .salud p {\n    word-break: break-word;\n    white-space: normal; }\n  mat-toolbar h3 {\n  font: bold 32px Roboto, \"Helvetica Neue\", sans-serif; }\n"

/***/ }),

/***/ "./src/app/core/container/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/container/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/container/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/container/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/container/sidenav-content/sidenav-content.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/container/sidenav-content/sidenav-content.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\r\n  <mat-nav-list>\r\n    <a mat-button style=\"height: 0; position: absolute;\"></a>\r\n    <ng-container *ngFor='let link of links'>\r\n      <ng-container *ngIf='!link?.children;else subMenuTemplate'>\r\n        <a mat-list-item (click)='toggleNav.emit()' [routerLink]='link.route' routerLinkActive='active'>\r\n          <mat-icon *ngIf='link.icon'>{{ link.icon }}</mat-icon>\r\n          {{ link.label }}\r\n        </a>\r\n      </ng-container>\r\n      <ng-template #subMenuTemplate>\r\n        <a mat-list-item routerLinkActive='active'>\r\n          <mat-icon *ngIf='link.icon'>{{ link.icon }}</mat-icon>\r\n          {{ link.label }}\r\n          <mat-icon class=\"drop-arrow float-right\">arrow_drop_down</mat-icon>\r\n        </a>\r\n        <a mat-list-item class='sub-menu-item' (click)='toggleNav.emit()' *ngFor='let childrenLink of link.children' [routerLink]='[link.route, childrenLink.route]' routerLinkActive='active'>\r\n          <mat-icon *ngIf='childrenLink.icon'>{{ childrenLink.icon }}</mat-icon>\r\n          {{ childrenLink.label }}\r\n        </a>\r\n      </ng-template>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <!-- <ng-container *ngIf='overlay === \"xs\"'>\r\n      <hr>\r\n      <a *ngFor='let action of actions' mat-list-item (click)='actionEmitter.emit(action.name)'>\r\n        <mat-icon *ngIf='action.icon'>{{ action.icon }}</mat-icon>\r\n        {{ action.label }}\r\n      </a>\r\n      <a mat-list-item (click)='actionEmitter.emit(\"cerrar-sesion\")' *ngIf='user'>\r\n        <mat-icon>exit_to_app</mat-icon>\r\n        Cerrar sesión\r\n      </a>\r\n    </ng-container> -->\r\n  </mat-nav-list>\r\n</div>"

/***/ }),

/***/ "./src/app/core/container/sidenav-content/sidenav-content.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/container/sidenav-content/sidenav-content.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host a,\n:host span {\n  color: black; }\n  :host a:hover, :host a.active,\n  :host span:hover,\n  :host span.active {\n    color: white; }\n  :host a .mat-icon,\n  :host span .mat-icon {\n    margin-right: 5px;\n    vertical-align: middle;\n    color: inherit; }\n  .drop-arrow {\n  position: absolute;\n  right: 15px; }\n  .sub-menu-item {\n  padding-left: 15%; }\n  a.active {\n  background-color: rgba(0, 0, 0, 0.05); }\n  .sidenav-content {\n  padding: 10px 0; }\n"

/***/ }),

/***/ "./src/app/core/container/sidenav-content/sidenav-content.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/container/sidenav-content/sidenav-content.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SidenavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavContentComponent", function() { return SidenavContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/user */ "./src/app/shared/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavContentComponent = /** @class */ (function () {
    function SidenavContentComponent() {
        // tslint:disable-next-line:no-output-rename
        this.actionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidenavContentComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], SidenavContentComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidenavContentComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SidenavContentComponent.prototype, "links", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavContentComponent.prototype, "overlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("action"),
        __metadata("design:type", Object)
    ], SidenavContentComponent.prototype, "actionEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidenavContentComponent.prototype, "toggleNav", void 0);
    SidenavContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidenav-content",
            template: __webpack_require__(/*! ./sidenav-content.component.html */ "./src/app/core/container/sidenav-content/sidenav-content.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-content.component.scss */ "./src/app/core/container/sidenav-content/sidenav-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavContentComponent);
    return SidenavContentComponent;
}());



/***/ }),

/***/ "./src/app/core/container/toolbar/toolbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/container/toolbar/toolbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row class='bg-primary' id='toolbar' [ngClass]='scrolled ? \"sticky\": \"\"'>\r\n    <button id='menu-button' type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"toggleNav.emit()\" *ngIf='overlay === \"xs\" || overlay === \"sm\"; else showLogo'>\r\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n    </button>\r\n    <ng-template #showLogo>\r\n      <img src=\"/assets/images/logo.png\" alt=\"app-logo\" class=\"img-fluid\" id=\"app-logo\">\r\n    </ng-template>\r\n    <span id='app-title' class='hover' *ngIf='!(overlay === \"xs\")' routerLink=''>{{ appName }}</span>\r\n\r\n    <!-- LINKS MD LG XL -->\r\n    <ng-container *ngIf='(overlay === \"md\" || overlay === \"lg\" || overlay === \"xl\")'>\r\n      <ng-container *ngFor='let link of links'>\r\n        <ng-container *ngIf='!link?.children;else subMenuTemplate'>\r\n          <a class='app-link' mat-button [routerLink]='link.route' routerLinkActive='active'>\r\n            <mat-icon *ngIf='link?.icon'>{{ link.icon }}</mat-icon>\r\n            <ng-container>{{ link.label }}</ng-container>\r\n          </a>\r\n        </ng-container>\r\n        <ng-template #subMenuTemplate>\r\n          <a mat-button class='app-link' #menuTrigger='matMenuTrigger' [matMenuTriggerFor]=\"subMenu\">\r\n            <mat-icon *ngIf='link?.icon'>{{ link.icon }}</mat-icon>\r\n            {{ link.label }}\r\n          </a>\r\n          <mat-menu #subMenu=\"matMenu\" xPosition='after' yPosition='below'>\r\n            <button disabled mat-menu-item class='menu-subheader'>{{ link.label }}</button>\r\n            <button mat-menu-item *ngFor='let childrenLink of link.children' [routerLink]='[link.route, childrenLink.route]' routerLinkActive='active'>\r\n              <mat-icon>{{ childrenLink.icon }}</mat-icon>\r\n              {{ childrenLink.label }}\r\n            </button>\r\n          </mat-menu>\r\n        </ng-template>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- WHEN USER IS SIGNED IN -->\r\n    <ng-container *ngIf='user'>\r\n      <span class=\"spacer\"></span>\r\n      <!-- PROFILE MENU BUTTON ON MD LG XL -->\r\n      <ng-container *ngIf='(overlay === \"md\" || overlay === \"lg\" || overlay === \"xl\")'>\r\n        <button [matMenuTriggerFor]='shoppingCartMenu' class='app-action' mat-button>\r\n          <mat-icon>add_shopping_cart</mat-icon>\r\n          <ng-container>Carrito</ng-container>\r\n        </button>\r\n        <button [matMenuTriggerFor]='profileMenu' class='app-action' mat-button>\r\n          <mat-icon>person_pin</mat-icon>\r\n          <ng-container>Perfil</ng-container>\r\n        </button>\r\n      </ng-container>\r\n\r\n      <!-- PROFILE MENU BUTTON ON XS SM -->\r\n      <ng-container *ngIf='(overlay === \"xs\" || overlay === \"sm\")'>\r\n        <button [matMenuTriggerFor]='shoppingCartMenu' class='app-action' mat-icon-button [matTooltip]='Carrito'>\r\n          <mat-icon>add_shopping_cart</mat-icon>\r\n        </button>\r\n        <button [matMenuTriggerFor]='profileMenu' class='app-action' mat-icon-button [matTooltip]='Perfil'>\r\n          <mat-icon>person_pin</mat-icon>\r\n        </button>\r\n      </ng-container>\r\n\r\n      <!-- SHOPPING CART MENU OPTIONS -->\r\n      <mat-menu class='shoppingCartMenu' #shoppingCartMenu=\"matMenu\" xPosition='after' yPosition='below'>\r\n          <button disabled mat-menu-item class='menu-subheader'>Carrito</button>\r\n        <app-shopping-cart-overview></app-shopping-cart-overview>\r\n      </mat-menu>\r\n\r\n      <!-- PROFILE MENU OPTIONS -->\r\n      <mat-menu #profileMenu=\"matMenu\" xPosition='after' yPosition='below'>\r\n        <button disabled mat-menu-item class='menu-subheader'>{{ user.name }}</button>\r\n        <button mat-menu-item [routerLink]='[\"perfil\", \"personal\"]' routerLinkActive='active'>\r\n          <mat-icon>person_pin</mat-icon>\r\n          Mi información personal\r\n        </button>\r\n      </mat-menu>\r\n      <!-- SIGN OUT -->\r\n      <button mat-icon-button matTooltip='Cerrar sesión' matTooltipPosition='below' (click)='actionEmitter.emit(\"cerrar-sesion\")'>\r\n        <mat-icon>exit_to_app</mat-icon>\r\n      </button>\r\n    </ng-container>\r\n  </mat-toolbar-row>\r\n  <!-- <mat-toolbar-row class='bg-primary' *ngIf='overlay === \"xs\"'>\r\n    <a *ngFor='let link of links' mat-button [routerLink]='link.route' routerLinkActive='active'>\r\n      <mat-icon *ngIf='link.icon'>{{ link.icon }}</mat-icon>\r\n    </a>\r\n  </mat-toolbar-row> -->\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/container/toolbar/toolbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/container/toolbar/toolbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .mat-button, :host .mat-icon-button {\n  margin: 0 2px;\n  color: white; }\n  :host .mat-button:hover:not(#menu-button):not(#app-title), :host .mat-button.active:not(#menu-button):not(#app-title), :host .mat-icon-button:hover:not(#menu-button):not(#app-title), :host .mat-icon-button.active:not(#menu-button):not(#app-title) {\n    color: black; }\n  :host .mat-button .mat-icon {\n  margin-right: 3px;\n  vertical-align: middle;\n  color: inherit; }\n  #toolbar {\n  height: 64px; }\n  #toolbar #app-logo, #toolbar #avatar-photo {\n    height: 60px; }\n  #toolbar #app-title, #toolbar #menu-button, #toolbar #app-logo {\n    color: white;\n    margin-right: 10px; }\n  #toolbar .app-link, #toolbar .app-action {\n    padding: 0px 5px; }\n  .sticky {\n  position: fixed;\n  z-index: 99; }\n  .contact-info {\n  height: 100%; }\n  .contact-info span,\n  .contact-info a {\n    margin: 2px 5px;\n    color: #ef9a9a;\n    font-size: 75%; }\n"

/***/ }),

/***/ "./src/app/core/container/toolbar/toolbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/container/toolbar/toolbar.component.ts ***!
  \*************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.appName = "App Title";
        // tslint:disable-next-line:no-output-rename
        this.actionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrolled = false;
    }
    ToolbarComponent.prototype.onWindowScroll = function () {
        // do some stuff here when the window is scrolled
        this.scrolled =
            window.scrollY > 35 || !(this.overlay === "md");
    };
    ToolbarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_models_user__WEBPACK_IMPORTED_MODULE_0__["User"])
    ], ToolbarComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ToolbarComponent.prototype, "actions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], ToolbarComponent.prototype, "links", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "appName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "overlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("action"),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "actionEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "toggleNav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToolbarComponent.prototype, "onWindowScroll", null);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-toolbar",
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/container/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/container/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/core/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "not-found", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: "", pathMatch: "full", component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shopping-cart/shopping-cart.module */ "./src/app/shopping-cart/shopping-cart.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container.component */ "./src/app/core/container/container.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/avatar/avatar.component */ "./src/app/core/container/avatar/avatar.component.ts");
/* harmony import */ var _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/footer/footer.component */ "./src/app/core/container/footer/footer.component.ts");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/core/faq/faq.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/core/about/about.component.ts");
/* harmony import */ var _container_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./container/toolbar/toolbar.component */ "./src/app/core/container/toolbar/toolbar.component.ts");
/* harmony import */ var _container_sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./container/sidenav-content/sidenav-content.component */ "./src/app/core/container/sidenav-content/sidenav-content.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/core/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _shopping_cart_shopping_cart_module__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_8__["CoreRoutingModule"]
            ],
            exports: [_container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"]],
            declarations: [
                _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"],
                _container_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["AvatarComponent"],
                _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _container_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarComponent"],
                _container_sidenav_content_sidenav_content_component__WEBPACK_IMPORTED_MODULE_13__["SidenavContentComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/faq/faq.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/faq/faq.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  faq works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/faq/faq.component.scss":
/*!*********************************************!*\
  !*** ./src/app/core/faq/faq.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/faq/faq.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/faq/faq.component.ts ***!
  \*******************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/core/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/core/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/core/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/welcome/welcome.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row welcome-header\">\r\n  <div class=\"col-12\">\r\n    <div class='welcome-text'>\r\n      <div class=\"main-text\">\r\n        Bienvenidos a El Restaurante\r\n      </div>\r\n      <div class=\"secondary-text\">\r\n        Donde se preparan los mejores platos caseros\r\n        <br>\r\n        <br> Para ver el delicioso menú de esta semana haz click en\r\n        <button mat-raised-button type='button' color='primary' routerLink='menu' style='color: white'>Menú de la semana</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<mat-card class='welcome-features'>\r\n  <mat-card-content>\r\n    <div class=\"row \">\r\n      <div class=\"col-12 col-md-10 offset-md-1\">\r\n        <div class=\"row\">\r\n          <div class=\"feature col-12 col-md-4\" *ngFor='let feature of features'>\r\n            <div class=\"title\">\r\n              {{feature.title}}\r\n            </div>\r\n            <div class=\"icon\">\r\n              <mat-icon>{{ feature.image }}</mat-icon>\r\n            </div>\r\n            <div class=\"description\">\r\n              {{feature.description}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<div class=\"about\">\r\n  <div class=\"title\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/welcome/welcome.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-header {\n  height: 600px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/images/kitchen.jpg\");\n  margin: -15px; }\n  .welcome-header .welcome-text {\n    padding-top: 250px;\n    padding-left: 50px; }\n  .welcome-header .welcome-text .main-text {\n      font-size: 45px;\n      line-height: 45px; }\n  .welcome-header .welcome-text .secondary-text {\n      font-size: 30px;\n      line-height: 30px; }\n  .welcome-features {\n  margin-right: -15px;\n  margin-left: -15px; }\n  .welcome-features .feature {\n    margin-top: 10px;\n    margin-bottom: 10px;\n    text-align: center; }\n  .welcome-features .feature .title {\n      height: 80px;\n      font-size: 30px;\n      line-height: 30px; }\n  .welcome-features .feature .icon {\n      height: 100px;\n      margin-top: 10px;\n      margin-bottom: 10px; }\n  .welcome-features .feature .icon .mat-icon {\n        font-size: 100px;\n        line-height: 100px;\n        height: 100px;\n        width: 100px; }\n  .welcome-features .feature .description {\n      font-size: 20px;\n      line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/core/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.features = [
            {
                title: "Hechos en casa",
                image: "home",
                description: "Todos nuestros platillos son cocinados con mucho amor, manteniendo estándares de calidad y seguridad."
            },
            {
                title: "Entregados en tu lugar de trabajo",
                image: "directions_car",
                description: "Los platillos son entregados en lugares de trabajo a los que proveemos nuestros servicios por lo que puedes organizarte con tus compañeros de trabajo y ordenar en grupo"
            },
            {
                title: "Precios accesibles",
                image: "attach_money",
                description: "Todos los menús incluyen un postre y ofrecemos bebidas con un pequeño costo adicional, el precio de nuestros menú ronda los $2.50 y no hay ningún precio adicional por la entrega."
            }
        ];
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/core/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/core/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/categories/categories.component.html":
/*!***********************************************************!*\
  !*** ./src/app/menu/categories/categories.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf='listView;else categoryOverviewTemplate'>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Categorías</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-nav-list>\n        <a mat-list-item *ngFor='let category of categories' (click)='onNavigate(category.name)'>{{ category.name }}</a>\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n</ng-container>\n<ng-template #categoryOverviewTemplate>\n  <div class=\"row\">\n    <div class=\"col-12 mx-auto\">\n      <mat-card class='categories-label'>\n        <mat-card-content>\n          <h1 class='text-center'>Categorías</h1>\n          <div class=\"arrow-container text-center hover\" *ngIf='onlyName' (click)='hideCategories = !hideCategories'>\n            <mat-icon>\n              {{ hideCategories ? \"arrow_drop_up\" : \"arrow_drop_down\" }}\n            </mat-icon>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <ng-container *ngIf='!hideCategories'>\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div *ngFor='let category of categories' class=\"hover category-container col-12 col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 mx-auto\">\n            <app-menu-category-overview [category]='category' [onlyName]='onlyName'></app-menu-category-overview>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/menu/categories/categories.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/menu/categories/categories.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-container {\n  margin-bottom: 15px; }\n\n.categories-label {\n  padding-bottom: 30px; }\n\n.categories-label .arrow-container {\n    position: absolute;\n    left: 0;\n    background-color: #e7e7e7;\n    width: 100%;\n    height: 30px; }\n\n.categories-label .arrow-container .mat-icon {\n      position: absolute;\n      bottom: 5px;\n      font-size: 30px; }\n"

/***/ }),

/***/ "./src/app/menu/categories/categories.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu/categories/categories.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../admin/categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService, router) {
        this.categoriesService = categoriesService;
        this.router = router;
        this.onlyName = false;
        this.hideCategories = false;
        this.listView = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.all().subscribe(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.onNavigate = function (categoryName) {
        var dashesCategory = categoryName.trim().replace(/\s+/g, "-").toLowerCase();
        this.router.navigate(['menu', dashesCategory]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesComponent.prototype, "onlyName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesComponent.prototype, "hideCategories", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CategoriesComponent.prototype, "listView", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/menu/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/menu/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/menu/categories/category-overview/category-overview.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/menu/categories/category-overview/category-overview.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class='my-2' (click)='onNavigate(category.name)'>\r\n  <mat-card-content *ngIf='category?.description' class='text-center'>\r\n    <h2>{{ category.name }}</h2>\r\n    <ng-container *ngIf='!onlyName'>\r\n      <img mat-card-image src=\"{{category.imageURL | showImage}}\" [alt]=\"category.name\">\r\n      <h6>\r\n        {{ category.description }}\r\n      </h6>\r\n    </ng-container>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/menu/categories/category-overview/category-overview.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/menu/categories/category-overview/category-overview.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  height: 100%;\n  padding-bottom: 0; }\n  .mat-card .mat-card-header .mat-card-title {\n    font-weight: normal; }\n  .mat-card .mat-card-image {\n    height: 150px;\n    margin-bottom: 0; }\n  .mat-card .mat-card-content {\n    margin-top: 10px;\n    padding-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/menu/categories/category-overview/category-overview.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/menu/categories/category-overview/category-overview.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryOverviewComponent", function() { return CategoryOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/category */ "./src/app/shared/models/category.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryOverviewComponent = /** @class */ (function () {
    function CategoryOverviewComponent(router) {
        this.router = router;
        this.onlyName = false;
    }
    CategoryOverviewComponent.prototype.ngOnInit = function () {
    };
    CategoryOverviewComponent.prototype.onNavigate = function (categoryName) {
        var dashesCategory = categoryName.trim().replace(/\s+/g, "-").toLowerCase();
        this.router.navigate(['menu', dashesCategory]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_category__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], CategoryOverviewComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CategoryOverviewComponent.prototype, "onlyName", void 0);
    CategoryOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-category-overview',
            template: __webpack_require__(/*! ./category-overview.component.html */ "./src/app/menu/categories/category-overview/category-overview.component.html"),
            styles: [__webpack_require__(/*! ./category-overview.component.scss */ "./src/app/menu/categories/category-overview/category-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CategoryOverviewComponent);
    return CategoryOverviewComponent;
}());



/***/ }),

/***/ "./src/app/menu/featured/featured-overview/featured-overview.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/menu/featured/featured-overview/featured-overview.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"product-overview mat-elevation-z0 my-2\">\n  <mat-card-header>\n    <mat-card-title>\n      <h5>{{ product.name }}</h5>\n      <h6 *ngIf='!byCategory'>\n        <span class=\"category-label\">Categoría </span>\n        <span class='category-name'> {{ product.category.name }} </span>\n      </h6>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <span class='previous-price'>\n        {{ product.price | currency }}\n      </span>\n      <span class=\"arrow\">\n        <mat-icon>arrow_right_alt</mat-icon>\n      </span>\n      <span class='offer-price'>\n        {{ (product.price - product?.discount) | currency }}\n      </span>\n    </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"product-image-container text-center\">\n      <img class='product-image img-fluid' src=\"{{ product.imageURL | showImage }}\" [alt]=\"product.name\">\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/menu/featured/featured-overview/featured-overview.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/menu/featured/featured-overview/featured-overview.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".previous-price {\n  text-decoration: line-through; }\n\n.mat-icon {\n  vertical-align: bottom; }\n\n.mat-card {\n  height: 100%; }\n\n.mat-card .product-image {\n    height: 200px; }\n\n.mat-card .category-label {\n    font-weight: bold; }\n\n.mat-card .category-name {\n    color: black !important; }\n\n.mat-card .form-container .product-amount {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/menu/featured/featured-overview/featured-overview.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/menu/featured/featured-overview/featured-overview.component.ts ***!
  \********************************************************************************/
/*! exports provided: FeaturedOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedOverviewComponent", function() { return FeaturedOverviewComponent; });
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedOverviewComponent = /** @class */ (function () {
    function FeaturedOverviewComponent() {
    }
    FeaturedOverviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", _shared_models_product__WEBPACK_IMPORTED_MODULE_0__["Product"])
    ], FeaturedOverviewComponent.prototype, "product", void 0);
    FeaturedOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-featured-overview',
            template: __webpack_require__(/*! ./featured-overview.component.html */ "./src/app/menu/featured/featured-overview/featured-overview.component.html"),
            styles: [__webpack_require__(/*! ./featured-overview.component.scss */ "./src/app/menu/featured/featured-overview/featured-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturedOverviewComponent);
    return FeaturedOverviewComponent;
}());



/***/ }),

/***/ "./src/app/menu/featured/featured.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/featured/featured.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf='listView;else featuredOverviewTemplate'>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        <h1>Promociones</h1>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-nav-list>\n        <a mat-list-item *ngFor='let featuredProduct of featured' (click)='onNavigate(featuredProduct._id)'>\n          <span class=\"featured-name\">{{ featuredProduct.name }}</span>\n          <span class=\"mx-3\"></span>\n          <span class='previous-price'>\n            {{ featuredProduct.price | currency }}\n          </span>\n          <span class=\"arrow\">\n            <mat-icon>arrow_right_alt</mat-icon>\n          </span>\n          <span class='offer-price'>\n            {{ (featuredProduct.price - featuredProduct?.discount) | currency }}\n          </span>\n        </a>\n      </mat-nav-list>\n    </mat-card-content>\n  </mat-card>\n</ng-container>\n<ng-template #featuredOverviewTemplate>\n  <div class=\"row\">\n    <div class=\"col-12 mx-auto\">\n      <mat-card class='featured-label'>\n        <mat-card-content>\n          <h1 class='text-center'>Promociones</h1>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"row\">\n        <div *ngFor='let featuredProduct of featured' class=\"hover category-container col-12 col-sm-6 col-md-5 offset-md-1 col-lg-4 offset-lg-0 mx-auto\">\n          <app-menu-featured-overview [product]='featuredProduct'></app-menu-featured-overview>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/menu/featured/featured.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/menu/featured/featured.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n  vertical-align: bottom; }\n"

/***/ }),

/***/ "./src/app/menu/featured/featured.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/featured/featured.component.ts ***!
  \*****************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(router) {
        this.router = router;
        this.featured = [
            {
                "_id": "5b7770ed0d8a7705f48dc4b7",
                "imageURL": "productos/d86c1410-a282-11e8-88cc-69f7d226379e.jpeg",
                "name": "Pilsener (330ml)",
                "price": 1.5,
                "cost": 0.5,
                "category": {
                    "_id": "5b7770b40d8a7705f48dc4b6",
                    "name": "Cervezas nacionales"
                },
                discount: 0.5
            },
            {
                "_id": "5b7771210d8a7705f48dc4bd",
                "imageURL": "productos/f784e4d0-a282-11e8-88cc-69f7d226379e.jpeg",
                "name": "Golden (330ml)",
                "price": 1.5,
                "cost": 0.4,
                "category": {
                    "_id": "5b7770b40d8a7705f48dc4b6",
                    "name": "Cervezas nacionales"
                },
                discount: 0.5
            }
        ];
        this.listView = false;
    }
    FeaturedComponent.prototype.ngOnInit = function () {
    };
    FeaturedComponent.prototype.onNavigate = function (categoryName) {
        var dashesCategory = categoryName.trim().replace(/\s+/g, "-").toLowerCase();
        this.router.navigate(['menu', dashesCategory]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeaturedComponent.prototype, "listView", void 0);
    FeaturedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-featured',
            template: __webpack_require__(/*! ./featured.component.html */ "./src/app/menu/featured/featured.component.html"),
            styles: [__webpack_require__(/*! ./featured.component.scss */ "./src/app/menu/featured/featured.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FeaturedComponent);
    return FeaturedComponent;
}());



/***/ }),

/***/ "./src/app/menu/filters/filters.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu/filters/filters.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  filters works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/menu/filters/filters.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/menu/filters/filters.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/filters/filters.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu/filters/filters.component.ts ***!
  \***************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FiltersComponent = /** @class */ (function () {
    function FiltersComponent() {
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    FiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/menu/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/menu/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRoutingModule", function() { return MenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/menu/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "menu", component: _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: "menu/:category", component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] }
];
var MenuRoutingModule = /** @class */ (function () {
    function MenuRoutingModule() {
    }
    MenuRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenuRoutingModule);
    return MenuRoutingModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-lg-10 offset-lg-1\">\r\n    <app-menu-categories></app-menu-categories>\r\n  </div>\r\n  <div class=\"col-12 col-lg-10 offset-lg-1 my-3\">\r\n    <app-menu-featured></app-menu-featured>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _admin_products_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/products/products.service */ "./src/app/admin/products/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(categoriesService, productsService) {
        this.categoriesService = categoriesService;
        this.productsService = productsService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService
            .all()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (categories) { return console.log(categories); }))
            .subscribe(function (categories) { return (_this.categories = categories); });
        this.productsService
            .all()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (products) { return console.log(products); }))
            .subscribe(function (products) { return (_this.products = products); });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"],
            _admin_products_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/menu/menu-routing.module.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/menu/filters/filters.component.ts");
/* harmony import */ var _categories_category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/category-overview/category-overview.component */ "./src/app/menu/categories/category-overview/category-overview.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/menu/products/products.component.ts");
/* harmony import */ var _products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/product-overview/product-overview.component */ "./src/app/menu/products/product-overview/product-overview.component.ts");
/* harmony import */ var _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/product-detail/product-detail.component */ "./src/app/menu/products/product-detail/product-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/menu/categories/categories.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./featured/featured.component */ "./src/app/menu/featured/featured.component.ts");
/* harmony import */ var _featured_featured_overview_featured_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./featured/featured-overview/featured-overview.component */ "./src/app/menu/featured/featured-overview/featured-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_1__["MenuRoutingModule"]],
            declarations: [
                _menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["FiltersComponent"],
                _categories_category_overview_category_overview_component__WEBPACK_IMPORTED_MODULE_4__["CategoryOverviewComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_6__["ProductOverviewComponent"],
                _products_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
                _featured_featured_component__WEBPACK_IMPORTED_MODULE_10__["FeaturedComponent"],
                _featured_featured_overview_featured_overview_component__WEBPACK_IMPORTED_MODULE_11__["FeaturedOverviewComponent"]
            ]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.service.ts":
/*!**************************************!*\
  !*** ./src/app/menu/menu.service.ts ***!
  \**************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_helpers_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers/methods */ "./src/app/shared/helpers/methods.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuService = /** @class */ (function () {
    function MenuService(httpClient) {
        this.httpClient = httpClient;
    }
    MenuService.prototype.allByCategory = function (categoryName) {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + ("productos/categoria/" + Object(_shared_helpers_methods__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(categoryName))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.data;
        }));
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/menu/products/product-detail/product-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/menu/products/product-detail/product-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  product-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/menu/products/product-detail/product-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/menu/products/product-detail/product-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/products/product-detail/product-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/menu/products/product-detail/product-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/menu/products/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/menu/products/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/menu/products/product-overview/product-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/menu/products/product-overview/product-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"product-overview mat-elevation-z0\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h5>{{ product.name }}</h5>\r\n      <h6 *ngIf='!byCategory'>\r\n        <span class=\"category-label\">Categoría : </span>\r\n        <span class='category-name'> {{ product.category.name }} </span>\r\n      </h6>\r\n    </mat-card-title>\r\n    <mat-card-subtitle>\r\n      {{ product.price | currency }}\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"product-image-container text-center\">\r\n      <img class='product-image img-fluid' src=\"{{ product.imageURL | showImage }}\" [alt]=\"product.name\">\r\n    </div>\r\n    <div class=\"form-container mt-2\">\r\n      <mat-form-field class='product-amount'>\r\n        <input matInput type=\"number\" placeholder=\"Cant.\" [(ngModel)]='amount'>\r\n      </mat-form-field>\r\n      <button mat-button type='button' (click)='addProduct()' [disabled]='amount < 1'>Agregar</button>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/menu/products/product-overview/product-overview.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/menu/products/product-overview/product-overview.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  height: 100%; }\n  .mat-card .product-image {\n    height: 200px; }\n  .mat-card .category-label {\n    font-weight: bold; }\n  .mat-card .category-name {\n    color: black !important; }\n  .mat-card .form-container .product-amount {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/menu/products/product-overview/product-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/menu/products/product-overview/product-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOverviewComponent", function() { return ProductOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/product */ "./src/app/shared/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductOverviewComponent = /** @class */ (function () {
    function ProductOverviewComponent() {
        this.added = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.amount = 0;
    }
    ProductOverviewComponent.prototype.ngOnInit = function () {
    };
    ProductOverviewComponent.prototype.addProduct = function () {
        this.added.emit({ amount: this.amount, product: this.product });
        this.amount = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_product__WEBPACK_IMPORTED_MODULE_1__["Product"])
    ], ProductOverviewComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductOverviewComponent.prototype, "byCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "added", void 0);
    ProductOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-product-overview',
            template: __webpack_require__(/*! ./product-overview.component.html */ "./src/app/menu/products/product-overview/product-overview.component.html"),
            styles: [__webpack_require__(/*! ./product-overview.component.scss */ "./src/app/menu/products/product-overview/product-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());



/***/ }),

/***/ "./src/app/menu/products/products.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/products/products.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 col-sm-5 col-md-4 mb-2\">\r\n    <app-menu-categories [listView]='true'></app-menu-categories>\r\n    <hr>\r\n    <app-menu-featured [listView]='true'></app-menu-featured>\r\n  </div>\r\n  <div class=\"col-12 col-sm-7 col-md-8\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mb-2\">\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <h1 class='text-center selected-category'>\r\n              <span class='selected-category-name'>{{ category | capitalize }}</span>\r\n            </h1>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"product-container col-12 col-sm-6 col-md-4 my-3\" *ngFor='let product of products'>\r\n            <app-menu-product-overview [product]='product' [byCategory]='true' (added)='onAddItem($event)'></app-menu-product-overview>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/menu/products/products.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/menu/products/products.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-container {\n  min-height: 325px; }\n"

/***/ }),

/***/ "./src/app/menu/products/products.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/products/products.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shopping-cart/shopping-cart.service */ "./src/app/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../menu.service */ "./src/app/menu/menu.service.ts");
/* harmony import */ var _admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../admin/categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_methods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/helpers/methods */ "./src/app/shared/helpers/methods.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(menuService, categoriesService, shoppingCartService, router, route, notifications) {
        this.menuService = menuService;
        this.categoriesService = categoriesService;
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.route = route;
        this.notifications = notifications;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.all().subscribe(function (categories) { return _this.categories = categories; });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) { return params.get('category'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (category) { return Object(_shared_helpers_methods__WEBPACK_IMPORTED_MODULE_7__["capitalize"])(category.replace(/-+/g, " ")); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (category) { return console.log(category); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (category) { return _this.category = category; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (category) { return _this.menuService.allByCategory(category); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (products) { return console.log(products); }))
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ProductsComponent.prototype.onAddItem = function (item) {
        this.shoppingCartService.addItem(item);
        this.notifications.show("Se agreg\u00F3 " + item.amount + "x " + item.product.name, 'Carrito', 'success');
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: "app-menu-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/menu/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/menu/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _admin_categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notification.ts":
/*!***********************************************!*\
  !*** ./src/app/notifications/notification.ts ***!
  \***********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
var Notification = /** @class */ (function () {
    function Notification(title, body, background, icon) {
        this.title = title;
        this.body = body;
        this.background = background;
        this.icon = icon;
    }
    return Notification;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <mat-card class=\"notification\" (click)='onDismiss(notification)' *ngFor='let notification of notifications' [ngClass]='notification.background'\r\n    @fadeIn @fadeOut>\r\n    <mat-card-title> {{ notification.title }}</mat-card-title>\r\n    <mat-card-content>\r\n      <div class='row'>\r\n        <div class=\"col-8 notification-body\">\r\n          <p class='notification-body-text'>{{ notification.body }}</p>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <mat-icon>{{ notification.icon }}</mat-icon>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/notifications/notifications.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notifications/notifications.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {}\n@keyframes cdk-text-field-autofill-start {}\n@-webkit-keyframes cdk-text-field-autofill-end {}\n@keyframes cdk-text-field-autofill-end {}\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.bg-primary-light {\n  background-color: #e57373 !important; }\n.bg-primary {\n  background-color: #ef5350 !important;\n  color: white !important; }\n.bg-primary-dark {\n  background-color: #e53935 !important; }\n.bg-accent-light {\n  background-color: #fff59d !important; }\n.bg-accent {\n  background-color: #ffee58 !important; }\n.bg-accent-dark {\n  background-color: #fdd835 !important; }\n.bg-warn-light {\n  background-color: #ffcc80 !important; }\n.bg-warn {\n  background-color: #ffa726 !important; }\n.bg-warn-dark {\n  background-color: #fb8c00 !important; }\n.bg-success-light {\n  background-color: #c5e1a5 !important; }\n.bg-success {\n  background-color: #9ccc65 !important; }\n.bg-success-dark {\n  background-color: #7cb342 !important; }\n.bg-danger-light {\n  background-color: #ffab91 !important; }\n.bg-danger {\n  background-color: #ff7043 !important; }\n.bg-danger-dark {\n  background-color: #f4511e !important; }\n.notification {\n  width: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  position: relative;\n  margin-bottom: 10px;\n  cursor: pointer;\n  color: #fafafa; }\n.wrapper {\n  opacity: 0.75;\n  bottom: 20px;\n  right: 20px;\n  position: fixed;\n  min-width: 250px;\n  max-width: 325px;\n  z-index: 1000;\n  float: right; }\n/* .icon-wrapper{\r\n  position: absolute;\r\n  box-sizing: border-box;\r\n  top: 30px;\r\n  right: 35px;\r\n} */\n.material-icons {\n  font-size: 25px; }\n.info {\n  background-color: #ef5350; }\n.secondary {\n  background-color: #ffee58; }\n.success {\n  background-color: #9ccc65; }\n.warning {\n  background-color: #ffa726; }\n.danger {\n  background-color: #ff7043; }\n"

/***/ }),

/***/ "./src/app/notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ "./src/app/shared/animations.ts");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(notService) {
        this.notService = notService;
        this.notifications = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notService
            .notificationSubject
            .subscribe(function (data) {
            var notification = data.notification;
            var timeout = data.timeout;
            // console.log(data);
            // console.log(this.notifications);
            _this.notifications.push(notification);
            setTimeout(function () {
                var index = _this.notifications.indexOf(notification);
                _this.notifications.splice(index, 1);
            }, timeout);
        });
        // this.notService.show('info', undefined, 'info');
        // this.notService.show('danger', undefined, 'danger');
        // this.notService.show('warning', undefined, 'warning');
        // this.notService.show('success', undefined, 'success');
        // this.notService.show('secondary', undefined, 'secondary');
    };
    NotificationsComponent.prototype.onDismiss = function (notification) {
        var index = this.notifications.indexOf(notification);
        // console.log(index);
        this.notifications.splice(index, 1);
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.scss */ "./src/app/notifications/notifications.component.scss")],
            animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__["fadeIn"], _shared_animations__WEBPACK_IMPORTED_MODULE_0__["fadeOut"]]
        }),
        __metadata("design:paramtypes", [_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.component */ "./src/app/notifications/notifications.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
            ],
            declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]],
            exports: [_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]],
            providers: [_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]]
        })
    ], NotificationsModule);
    return NotificationsModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.service.ts":
/*!********************************************************!*\
  !*** ./src/app/notifications/notifications.service.ts ***!
  \********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification */ "./src/app/notifications/notification.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = /** @class */ (function () {
    function NotificationsService() {
        this.notificationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // console.log('notifications service');
    }
    NotificationsService.prototype.show = function (body, title, type, timeout) {
        if (title === void 0) { title = 'Notificación'; }
        if (type === void 0) { type = 'info'; }
        if (timeout === void 0) { timeout = 2500; }
        var icon, background;
        switch (type) {
            case 'info':
                icon = 'info_outline';
                background = 'info';
                break;
            case 'secondary':
                icon = '';
                background = 'secondary';
                break;
            case 'success':
                icon = 'check_circle';
                background = 'success';
                break;
            case 'danger':
                icon = 'sms_failed';
                background = 'danger';
                break;
            case 'warning':
                icon = 'sms_failed';
                background = 'warning';
                break;
        }
        var notification = new _notification__WEBPACK_IMPORTED_MODULE_1__["Notification"](title, body, background, icon);
        this.notificationSubject.next({
            notification: notification,
            timeout: timeout
        });
    };
    NotificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: fadeInOut, fadeIn, fadeOut, fadeInDown, fadeInUp, fadeOutDown, fadeOutUp, shrinkX, shrinkY, slideLeft, slideRight, slideUp, fall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInDown", function() { return fadeInDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp", function() { return fadeInUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutDown", function() { return fadeOutDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutUp", function() { return fadeOutUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrinkX", function() { return shrinkX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shrinkY", function() { return shrinkY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideLeft", function() { return slideLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideRight", function() { return slideRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideUp", function() { return slideUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fall", function() { return fall; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
            ], { optional: true }),
        ])
    ])
]);
var fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);
var fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
]);
var fadeInDown = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, -100%, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'none' }))
        ]),
    ])
];
var fadeInUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, 100%, 0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'none' }))
        ]),
    ])
];
var fadeOutDown = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, 100 %, 0)' }))
        ])
    ])
];
var fadeOutUp = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(0, -100 %, 0)' }))
        ])
    ])
];
var shrinkX = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('shrinkX', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scaleX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scaleX(1)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scaleX(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scaleX(0)' }))
    ])
]);
var shrinkY = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('shrinkY', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scaleY(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scaleY(0)',
        display: 'none',
        'transform-origin': 'top'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-in'))
]);
var slideLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
    ]),
]);
var slideRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideRight', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
    ]),
]);
var slideUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
    ]),
]);
var fall = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fall', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
    ]),
]);


/***/ }),

/***/ "./src/app/shared/components/crud/create/create.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/create/create.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Agregar {{ className }}</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-template *ngTemplateOutlet='templateRef'></ng-template>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Agregar</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancelar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form> -->\r\n"

/***/ }),

/***/ "./src/app/shared/components/crud/create/create.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/create/create.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/crud/create/create.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/crud/create/create.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CreateComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "templateRef", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-crud-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/shared/components/crud/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/shared/components/crud/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/crud/delete/delete.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/delete/delete.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  delete works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/components/crud/delete/delete.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/delete/delete.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/crud/delete/delete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/crud/delete/delete.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeleteComponent = /** @class */ (function () {
    function DeleteComponent() {
    }
    DeleteComponent.prototype.ngOnInit = function () {
    };
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/shared/components/crud/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/shared/components/crud/delete/delete.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/crud/list/list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/crud/list/list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button type='button' routerLink='agregar'>Agregar {{ className }}</button>\r\n<table mat-table [dataSource]=\"objects\" class=\"mat-elevation-z0\" >\r\n  <ng-container *ngTemplateOutlet=\"templateRef\"></ng-container>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/shared/components/crud/list/list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/crud/list/list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  overflow: auto;\n  min-width: 700px; }\n\n.mat-cell {\n  padding: 0 5px; }\n"

/***/ }),

/***/ "./src/app/shared/components/crud/list/list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/crud/list/list.component.ts ***!
  \***************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        // console.log(this.templateRef);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListComponent.prototype, "className", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListComponent.prototype, "objects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "templateRef", void 0);
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-crud-list",
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/shared/components/crud/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/shared/components/crud/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/crud/update/update.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/update/update.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  update works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/components/crud/update/update.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/crud/update/update.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/crud/update/update.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/crud/update/update.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/shared/components/crud/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/shared/components/crud/update/update.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/shared/helpers/dao.ts":
/*!***************************************!*\
  !*** ./src/app/shared/helpers/dao.ts ***!
  \***************************************/
/*! exports provided: DAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAO", function() { return DAO; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



var DAO = /** @class */ (function () {
    function DAO(http, className, collectionName, apiRoute) {
        this.http = http;
        this.className = className;
        this.collectionName = collectionName;
        this.apiRoute = apiRoute;
        this.$api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api;
        this.selectedProductSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.objects = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.$api += apiRoute + "/";
    }
    Object.defineProperty(DAO.prototype, "api", {
        get: function () {
            return this.$api;
        },
        enumerable: true,
        configurable: true
    });
    // set api(api: string) {
    //   this.$api = api;
    // }
    DAO.prototype.getSelectedObject = function () {
        return this.selectedProductSubject.asObservable();
    };
    DAO.prototype.setSelectedObject = function (object) {
        return this.selectedProductSubject.next(object);
    };
    DAO.prototype.isObjectSelected = function () {
        return !!this.selectedProductSubject.getValue();
    };
    DAO.prototype.all = function () {
        var _this = this;
        return this.http.get(this.$api).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (objects) {
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.one = function (_id) {
        return this.http.get(this.$api + _id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }));
    };
    DAO.prototype.create = function (newObject) {
        var _this = this;
        return this.http.post(this.$api, newObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (addedProduct) {
            var objects = _this.objects.getValue().slice();
            objects.push(addedProduct);
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.update = function (_id, object) {
        var _this = this;
        return this.http.put(this.$api + _id, object).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return res.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (editedProduct) {
            var objects = _this.objects.getValue().slice();
            var index = objects.findIndex(function (_object) { return _object["_id"] === editedProduct["_id"]; });
            objects[index] = editedProduct;
            _this.objects.next(objects);
        }));
    };
    DAO.prototype.delete = function (_id) {
        var _this = this;
        return this.http.delete(this.api + _id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
            var objects = _this.objects.getValue().slice();
            var index = objects.findIndex(function (_object) { return _object["_id"] === _id; });
            objects.splice(index, 1);
            _this.objects.next(objects);
        }));
    };
    return DAO;
}());



/***/ }),

/***/ "./src/app/shared/helpers/methods.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/helpers/methods.ts ***!
  \*******************************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
var capitalize = function (word) {
    return word[0].toUpperCase() + word.slice(1);
};


/***/ }),

/***/ "./src/app/shared/models/category.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/category.ts ***!
  \*******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(_id, name, description, imageURL) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/shared/models/login.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/login.ts ***!
  \****************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login(email, password) {
        this.email = email;
        this.password = password;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/shared/models/product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(_id, name, description, cost, price, imageURL, category, discount) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.price = price;
        this.imageURL = imageURL;
        this.category = category;
        this.discount = discount;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/register.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/register.ts ***!
  \*******************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var Register = /** @class */ (function () {
    function Register(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return Register;
}());



/***/ }),

/***/ "./src/app/shared/models/user.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, name, username, email, role, createdAt, password) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.role = role;
        this.createdAt = createdAt;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'capitalize'
        })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/show-image.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/show-image.pipe.ts ***!
  \*************************************************/
/*! exports provided: ShowImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowImagePipe", function() { return ShowImagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ShowImagePipe = /** @class */ (function () {
    function ShowImagePipe() {
    }
    ShowImagePipe.prototype.transform = function (imageURL) {
        if (imageURL) {
            return _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].static + imageURL;
        }
        return "";
    };
    ShowImagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "showImage"
        })
    ], ShowImagePipe);
    return ShowImagePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _components_crud_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/crud/create/create.component */ "./src/app/shared/components/crud/create/create.component.ts");
/* harmony import */ var _components_crud_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/crud/list/list.component */ "./src/app/shared/components/crud/list/list.component.ts");
/* harmony import */ var _components_crud_update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/crud/update/update.component */ "./src/app/shared/components/crud/update/update.component.ts");
/* harmony import */ var _components_crud_delete_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/crud/delete/delete.component */ "./src/app/shared/components/crud/delete/delete.component.ts");
/* harmony import */ var _pipes_show_image_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/show-image.pipe */ "./src/app/shared/pipes/show-image.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"],
                _pipes_show_image_pipe__WEBPACK_IMPORTED_MODULE_10__["ShowImagePipe"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _components_crud_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _components_crud_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _components_crud_update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
                _components_crud_delete_delete_component__WEBPACK_IMPORTED_MODULE_9__["DeleteComponent"]
            ],
            declarations: [
                _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"],
                _components_crud_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"],
                _components_crud_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _components_crud_update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
                _components_crud_delete_delete_component__WEBPACK_IMPORTED_MODULE_9__["DeleteComponent"],
                _pipes_show_image_pipe__WEBPACK_IMPORTED_MODULE_10__["ShowImagePipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping-cart/overview/overview.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shopping-cart/overview/overview.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class='mat-elevation-z0'>\n  <!-- <mat-card-header>\n    <mat-card-title>\n      <h4>Productos agregados</h4>\n    </mat-card-title>\n  </mat-card-header> -->\n  <mat-card-content>\n    <ng-container *ngIf='items.length;else noItems'>\n      <div class=\"table-container\">\n        <table mat-table [dataSource]='dataSource'>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Producto </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.product.name}} </td>\n            <td mat-footer-cell *matFooterCellDef>\n\n            </td>\n          </ng-container>\n\n          <!-- Amount Column -->\n          <ng-container matColumnDef=\"amount\">\n            <th mat-header-cell *matHeaderCellDef> Cant </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n            <td mat-footer-cell *matFooterCellDef class='pr-3'>Total </td>\n          </ng-container>\n\n          <!-- Subtotal Column -->\n          <ng-container matColumnDef=\"subtotal\">\n            <th mat-header-cell *matHeaderCellDef> Subtotal </th>\n            <td mat-cell *matCellDef=\"let element\"> {{(element.product.price * element.amount)| currency}} </td>\n            <td mat-footer-cell *matFooterCellDef> {{ getTotal() | currency }} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n      </div>\n      <button class='full-width' type='button' mat-button routerLink='/carrito'>Pagar</button>\n    </ng-container>\n    <ng-template #noItems>\n      <h5>No has agregado ningún producto</h5>\n    </ng-template>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/shopping-cart/overview/overview.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shopping-cart/overview/overview.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  height: 100%;\n  padding: 0; }\n  .mat-card .mat-card-title {\n    padding: 0 10px; }\n  .mat-card .table-container {\n    width: 100%; }\n  .mat-card .table-container .mat-table .mat-footer-cell,\n    .mat-card .table-container .mat-table .mat-cell {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .mat-card .table-container .mat-table .mat-footer-cell {\n      font-weight: bolder; }\n  .mat-card .table-container .mat-table .mat-column-name {\n      width: 50%; }\n  .mat-card .table-container .mat-table .mat-column-amount {\n      width: 25%; }\n  .mat-card .table-container .mat-table .mat-column-subtotal {\n      width: 25%; }\n"

/***/ }),

/***/ "./src/app/shopping-cart/overview/overview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-cart/overview/overview.component.ts ***!
  \**************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shopping-cart.service */ "./src/app/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(service) {
        this.service = service;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.displayedColumns = ["name", "amount", "subtotal"];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (items) { return console.log(items); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (items) { return _this.items = items; }))
            .subscribe(function (items) { return _this.dataSource.data = items; });
    };
    OverviewComponent.prototype.getTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += (item.product.price * item.amount);
        }
        return total;
    };
    OverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shopping-cart-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/shopping-cart/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/shopping-cart/overview/overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingCartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartRoutingModule", function() { return ShoppingCartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'carrito', component: _shopping_cart_component__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartComponent"] }
];
var ShoppingCartRoutingModule = /** @class */ (function () {
    function ShoppingCartRoutingModule() {
    }
    ShoppingCartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShoppingCartRoutingModule);
    return ShoppingCartRoutingModule;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class='mat-elevation-z0'>\n  <mat-card-header>\n    <mat-card-title>\n      <h1>Carrito</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <ng-container *ngIf='items.length;else noItems'>\n      <div class=\"table-container\">\n        <table mat-table [dataSource]='dataSource'>\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Producto </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.product.name}} </td>\n            <td mat-footer-cell *matFooterCellDef>\n\n            </td>\n          </ng-container>\n\n          <!-- Amount Column -->\n          <ng-container matColumnDef=\"amount\">\n            <th mat-header-cell *matHeaderCellDef> Cant </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n            <td mat-footer-cell *matFooterCellDef class='pr-3'>Total </td>\n          </ng-container>\n\n          <!-- Subtotal Column -->\n          <ng-container matColumnDef=\"subtotal\">\n            <th mat-header-cell *matHeaderCellDef> Subtotal </th>\n            <td mat-cell *matCellDef=\"let element\"> {{(element.product.price * element.amount)| currency}} </td>\n            <td mat-footer-cell *matFooterCellDef> {{ getTotal() | currency }} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n        </table>\n      </div>\n      <div class=\"row my-2\">\n        <button class='col-12 col-sm-10 col-md-8 col-lg-6 mx-auto' type='button' mat-button routerLink='/carrito'>Pagar</button>\n      </div>\n    </ng-container>\n    <ng-template #noItems>\n      <h5>No has agregado ningún producto</h5>\n    </ng-template>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container .mat-table {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(service) {
        this.service = service;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ["name", "amount", "subtotal"];
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (items) { return console.log(items); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (items) { return _this.items = items; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (items) { return _this.dataSource.data = items; });
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    ShoppingCartComponent.prototype.getTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += (item.product.price * item.amount);
        }
        return total;
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.module.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingCartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartModule", function() { return ShoppingCartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-cart-routing.module */ "./src/app/shopping-cart/shopping-cart-routing.module.ts");
/* harmony import */ var _shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _shopping_cart_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shopping-cart/overview/overview.component */ "./src/app/shopping-cart/overview/overview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShoppingCartModule = /** @class */ (function () {
    function ShoppingCartModule() {
    }
    ShoppingCartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _shopping_cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartRoutingModule"]
            ],
            declarations: [_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"], _shopping_cart_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"]],
            exports: [_shopping_cart_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"]]
        })
    ], ShoppingCartModule);
    return ShoppingCartModule;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.items$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([
            {
                "amount": 1,
                "product": {
                    "_id": "5b7770ed0d8a7705f48dc4b7",
                    "imageURL": "productos/d86c1410-a282-11e8-88cc-69f7d226379e.jpeg",
                    "name": "Pilsener (330ml)",
                    "price": 1.5,
                    "cost": 0.5,
                    "category": {
                        "_id": "5b7770b40d8a7705f48dc4b6",
                        "name": "Cervezas nacionales"
                    },
                }
            }
        ]);
    }
    ShoppingCartService.prototype.getItems = function () {
        return this.items$.asObservable();
    };
    ShoppingCartService.prototype.addItem = function (item) {
        var items = this.items$.getValue().slice();
        items.push(item);
        this.items$.next(items);
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://ubuntu/api/v1/',
    static: 'http://ubuntu/static/',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Oscar Reinosa\Documents\GitHub\restaurant\dev\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map