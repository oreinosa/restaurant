(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/admin/products/create/create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/create/create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Agregar {{ service.className | lowercase }}</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-sm-6 col-lg-4 offset-lg-1\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder='Nombre' [(ngModel)]='product.name' name='name' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder='Descripción' [(ngModel)]='product.description' name='description' [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder='Precio' [(ngModel)]='product.price' name='price' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" placeholder='Costo' [(ngModel)]='product.cost' name='cost' required [readonly]='f.submitted'>\r\n          </mat-form-field>\r\n          <mat-form-field *ngIf='categories;else loadingCategories'>\r\n            <mat-select placeholder='Categoría' [(ngModel)]='product.category' name='category' required>\r\n              <mat-option *ngFor='let category of categories' [value]='category'>{{ category.name }}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <ng-template #loadingCategories>\r\n            <mat-spinner class=\"mx-auto col-12\"></mat-spinner>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-12 col-sm-6 col-lg-6 offset-lg-1 text-center my-2\">\r\n          <app-upload></app-upload>\r\n          <input type=\"text\" placeholder='Image URL' [(ngModel)]='product.imageURL' name='imageURL' class='d-none'>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted || !upload?.fileURL'>Agregar</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancelar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/products/create/create.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/create/create.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/create/create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/create/create.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_models_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/models/product */ "./src/app/shared/models/product.ts");
/* harmony import */ var _shared_helpers_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/helpers/create */ "./src/app/shared/helpers/create.ts");
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









var CreateComponent = /** @class */ (function (_super) {
    __extends(CreateComponent, _super);
    function CreateComponent(productsService, router, route, notifications, categoriesService) {
        var _this = _super.call(this, productsService, notifications, router, route) || this;
        _this.productsService = productsService;
        _this.router = router;
        _this.route = route;
        _this.notifications = notifications;
        _this.categoriesService = categoriesService;
        _this.product = new _shared_models_product__WEBPACK_IMPORTED_MODULE_7__["Product"]();
        return _this;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService
            .all()
            .pipe(
        // tslint:disable-next-line:arrow-return-shorthand
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (categories) {
            return categories.map(function (category) {
                return { name: category.name, _id: category._id };
            });
        }))
            .subscribe(function (categories) { return (_this.categories = categories); });
    };
    CreateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // console.log(form.value);
        this.upload
            .onSubmit(this.productsService.apiRoute)
            .subscribe(function (imageURL) {
            // console.log(imageURL);
            // this.product.imageURL = imageURL;
            var imageCtrl = form.controls.imageURL;
            imageCtrl.setValue(imageURL); // set imageURL input value to the resolt of the upload POST event
            // form.setValue({ ...form.value, "imageURL": res.data });
            // console.log(form.value);
            _super.prototype.onSubmit.call(_this, form);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_upload_upload_component__WEBPACK_IMPORTED_MODULE_0__["UploadComponent"]),
        __metadata("design:type", _upload_upload_component__WEBPACK_IMPORTED_MODULE_0__["UploadComponent"])
    ], CreateComponent.prototype, "upload", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/products/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/products/create/create.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-create.scss */ "./src/app/shared/styles/crud-create.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]])
    ], CreateComponent);
    return CreateComponent;
}(_shared_helpers_create__WEBPACK_IMPORTED_MODULE_8__["Create"]));



/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf='service.className | lowercase as className'>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h2>Eliminar {{ className }}</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>¿Seguro que quieres eliminar la {{ className }}\r\n      <b>{{ _id }}</b>?\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button type='button' (click)='onSubmit()'>Eliminar</button>\r\n    <button mat-button type='button' routerLink='../../'>Cancelar</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/delete/delete.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/delete/delete.component.ts ***!
  \***********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_helpers_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/helpers/delete */ "./src/app/shared/helpers/delete.ts");
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





var DeleteComponent = /** @class */ (function (_super) {
    __extends(DeleteComponent, _super);
    function DeleteComponent(productsService, notifications, router, route) {
        var _this = _super.call(this, productsService, notifications, router, route) || this;
        _this.productsService = productsService;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-delete",
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/products/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/admin/products/delete/delete.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-delete.scss */ "./src/app/shared/styles/crud-delete.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_0__["ProductsService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeleteComponent);
    return DeleteComponent;
}(_shared_helpers_delete__WEBPACK_IMPORTED_MODULE_4__["Delete"]));



/***/ }),

/***/ "./src/app/admin/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/products/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/products/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/products/create/create.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.component */ "./src/app/admin/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"], children: [
            { path: 'agregar', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: 'actualizar', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'actualizar/:_id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'eliminar', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
            { path: 'eliminar/:_id', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
        ]
    },
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h2>{{ service.collectionName }}</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <button mat-button type='button' routerLink='agregar'>Agregar {{ service.className | lowercase }}</button>\r\n    <div class=\"row mt-4 mb-2\">\r\n      <div class=\"col-12 col-sm-6\">\r\n        <h4>\r\n          <mat-form-field class='full-width'>\r\n            <mat-select placeholder='Filtrar por categoría' [formControl]='categoryCtrl'>\r\n              <mat-option value='all'>Todas</mat-option>\r\n              <mat-option *ngFor='let category of categories' [value]='category._id'> {{ category.name }}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-container\">\r\n      <table mat-table matSort [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef> ID </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Price Column -->\r\n        <ng-container matColumnDef=\"price\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Precio </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.price | currency }} </td>\r\n        </ng-container>\r\n\r\n        <!-- Cost Column -->\r\n        <ng-container matColumnDef=\"cost\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Costo </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.cost | currency }} </td>\r\n        </ng-container>\r\n\r\n        <!-- Image Column -->\r\n        <ng-container matColumnDef=\"imageURL\">\r\n          <th mat-header-cell *matHeaderCellDef> Imagen </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <img src=\"{{element.imageURL | showImage }}\" [alt]=\"element.name\" class=\"img-fluid\">\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Category Column -->\r\n        <ng-container matColumnDef=\"category\">\r\n          <th mat-header-cell *matHeaderCellDef> Categoría </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.category.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-button type='button' (click)='onAction(\"actualizar\",element)'>Actualizar</button>\r\n            <button mat-button type='button' (click)='onAction(\"eliminar\",element)'>Eliminar</button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>\r\n    <ng-container *ngIf='!objects'>\r\n      <mat-spinner class=\"mx-auto col-12\"></mat-spinner>\r\n    </ng-container>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/products/products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-column-name {\n  max-width: 250px; }\n\n.mat-column-imageURL {\n  text-align: center;\n  max-width: 150px; }\n\n.mat-column-imageURL .img-fluid {\n    height: 200px; }\n"

/***/ }),

/***/ "./src/app/admin/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/list */ "./src/app/shared/helpers/list.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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







var ProductsComponent = /** @class */ (function (_super) {
    __extends(ProductsComponent, _super);
    function ProductsComponent(service, router, categoriesService) {
        var _this = _super.call(this, service, router, [
            "id",
            "name",
            "category",
            "price",
            "cost",
            "imageURL",
            "actions"
        ]) || this;
        _this.service = service;
        _this.router = router;
        _this.categoriesService = categoriesService;
        _this.categoryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("all");
        return _this;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.service
            .all()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.categoriesService.all(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (categories) {
            console.log(categories);
            _this.categories = categories;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.service.objects; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (products) {
            console.log(_this.service.collectionName + " : ", products);
            _this.objects = products;
            _this.dataSource.data = _this.filterByCategory(_this.categoryCtrl.value);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.categoryCtrl.valueChanges; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (categoryId) {
            if (categoryId === "all") {
                _this.displayedColumns = [
                    // "id",
                    "name",
                    "category",
                    "price",
                    "cost",
                    "imageURL",
                    "actions"
                ];
            }
            else {
                _this.displayedColumns = [
                    // "id",
                    "name",
                    "price",
                    "cost",
                    "imageURL",
                    "actions"
                ];
            }
        }))
            .subscribe(function (categoryId) {
            return (_this.dataSource.data = _this.filterByCategory(categoryId));
        });
    };
    ProductsComponent.prototype.filterByCategory = function (id) {
        // console.log(id);
        // if (!this.objects) {
        //   return [];
        // }
        if (id === "all") {
            return this.objects.slice();
        }
        return this.objects
            .slice()
            .filter(function (_product) { return _product.category._id === id; });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/admin/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/admin/products/products.component.scss"), __webpack_require__(/*! ../../shared/styles/crud-list.scss */ "./src/app/shared/styles/crud-list.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]])
    ], ProductsComponent);
    return ProductsComponent;
}(_shared_helpers_list__WEBPACK_IMPORTED_MODULE_1__["List"]));



/***/ }),

/***/ "./src/app/admin/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/admin/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/admin/products/products.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/products/create/create.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/products/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/products/update/update.component.ts");
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../upload/upload.module */ "./src/app/upload/upload.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _upload_upload_module__WEBPACK_IMPORTED_MODULE_7__["UploadModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"]],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/admin/products/update/update.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/update/update.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Actualizar {{ service.className | lowercase }}</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf='object as product;else loadingObject'>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-6 col-lg-4 offset-lg-1\">\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder='Nombre' [ngModel]='product.name' name='name' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder='Descripción' [ngModel]='product.description' name='description' [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" placeholder='Precio' [ngModel]='product.price' name='price' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" placeholder='Costo' [ngModel]='product.cost' name='cost' required [readonly]='f.submitted'>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf='categories;else loadingCategories'>\r\n              <mat-select placeholder='Categoría' [ngModel]='product.category' name='category' [compareWith]='categoryCompareWith' required\r\n                [disabled]='f.submitted'>\r\n                <mat-option *ngFor='let category of categories' [value]='category'>{{ category.name }}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <ng-template #loadingCategories>\r\n              <mat-spinner class=\"mx-auto col-12\"></mat-spinner>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-12 col-sm-6 col-lg-6 offset-lg-1 text-center my-2\">\r\n            <app-upload [fileURL]='product.imageURL | showImage'></app-upload>\r\n            <input type=\"text\" placeholder='Image URL' [ngModel]='product.imageURL' name='imageURL' class='d-none'>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-template #loadingObject>\r\n        <mat-spinner class=\"mx-auto col-12\"></mat-spinner>\r\n      </ng-template>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Actualizar</button>\r\n      <button mat-button type='button' routerLink='../../' [disabled]='f.submitted'>Cancelar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/products/update/update.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/products/update/update.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/products/update/update.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/products/update/update.component.ts ***!
  \***********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../categories/categories.service */ "./src/app/admin/categories/categories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/admin/products/products.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_helpers_update__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/helpers/update */ "./src/app/shared/helpers/update.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../upload/upload.component */ "./src/app/upload/upload.component.ts");
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








var UpdateComponent = /** @class */ (function (_super) {
    __extends(UpdateComponent, _super);
    function UpdateComponent(service, notifications, router, route, categoriesService) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        _this.categoriesService = categoriesService;
        return _this;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.categoriesService
            .all()
            .pipe(
        // tslint:disable-next-line:arrow-return-shorthand
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (categories) {
            return categories.map(function (category) {
                return { name: category.name, _id: category._id };
            });
        }))
            .subscribe(function (categories) { return (_this.categories = categories); });
    };
    UpdateComponent.prototype.categoryCompareWith = function (a, b) {
        if (a && b) {
            return a._id === b._id;
        }
        return false;
    };
    UpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.upload.onSubmit(this.service.apiRoute).subscribe(function (imageURL) {
            if (imageURL) {
                form.controls.imageURL.setValue(imageURL);
            }
            else {
                form.controls.imageURL.disable();
            }
            // form.reset(form.value);
            _super.prototype.onSubmit.call(_this, form);
        }, function (error) {
            console.log(error);
            form.reset(form.value);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"]),
        __metadata("design:type", _upload_upload_component__WEBPACK_IMPORTED_MODULE_7__["UploadComponent"])
    ], UpdateComponent.prototype, "upload", void 0);
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/products/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/admin/products/update/update.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-update.scss */ "./src/app/shared/styles/crud-update.scss")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"]])
    ], UpdateComponent);
    return UpdateComponent;
}(_shared_helpers_update__WEBPACK_IMPORTED_MODULE_6__["Update"]));



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map