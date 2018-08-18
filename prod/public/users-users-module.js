(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/admin/users/create/create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Agregar {{ service.className | lowercase }}</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='Nombre' [(ngModel)]='user.name' name='name' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='Usuario' [(ngModel)]='user.username' name='username' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"email\" placeholder='Correo electrónico' [(ngModel)]='user.email' name='email' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder='Rol' [(ngModel)]='user.role' name='role' required [disabled]='f.submitted'>\r\n          <mat-option *ngFor='let role of roles' [value]='role'>{{ role }}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder='Contraseña' [(ngModel)]='user.password' name='password' required [readonly]='f.submitted'>\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Agregar</button>\r\n      <button mat-button type='button' routerLink='../' [disabled]='f.submitted'>Cancelar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/admin/users/create/create.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/create/create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/create/create.component.ts ***!
  \********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users.service */ "./src/app/admin/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_helpers_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/helpers/create */ "./src/app/shared/helpers/create.ts");
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
    function CreateComponent(usersService, router, route, notifications) {
        var _this = _super.call(this, usersService, notifications, router, route) || this;
        _this.usersService = usersService;
        _this.router = router;
        _this.route = route;
        _this.notifications = notifications;
        _this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        _this.roles = ["Cliente", "Admin"];
        return _this;
    }
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-create",
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/admin/users/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/admin/users/create/create.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-create.scss */ "./src/app/shared/styles/crud-create.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], CreateComponent);
    return CreateComponent;
}(_shared_helpers_create__WEBPACK_IMPORTED_MODULE_5__["Create"]));



/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf='service.className | lowercase as className'>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h2>Eliminar {{ className }}</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>¿Seguro que quieres eliminar al {{ className }}\r\n      <b>{{ _id }}</b>?\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button type='button' (click)='onSubmit()'>Eliminar</button>\r\n    <button mat-button type='button' routerLink='../../'>Cancelar</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/delete/delete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/delete/delete.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users.service */ "./src/app/admin/users/users.service.ts");
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
    function DeleteComponent(usersService, notifications, router, route) {
        var _this = _super.call(this, usersService, notifications, router, route) || this;
        _this.usersService = usersService;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        return _this;
    }
    DeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-delete",
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/admin/users/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/admin/users/delete/delete.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-delete.scss */ "./src/app/shared/styles/crud-delete.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DeleteComponent);
    return DeleteComponent;
}(_shared_helpers_delete__WEBPACK_IMPORTED_MODULE_4__["Delete"]));



/***/ }),

/***/ "./src/app/admin/users/update/update.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f='ngForm' (ngSubmit)='onSubmit(f)'>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>\r\n        <h2>Actualizar {{ service.className | lowercase }}</h2>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf='object as user'>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='Nombre' [ngModel]='user.name' name='name' required [readonly]='f.submitted'>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder='Usuario' [ngModel]='user.username' name='username' required [readonly]='f.submitted'>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select placeholder='Rol' [ngModel]='user.role' name='role' required [disabled]='f.submitted'>\r\n            <mat-option *ngFor='let role of roles' [value]='role'>{{ role }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </ng-container>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button type='submit' [disabled]='f.invalid || f.submitted'>Actualizar</button>\r\n      <button mat-button type='button' routerLink='../../' [disabled]='f.submitted'>Cancelar</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/admin/users/update/update.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/update/update.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/users/update/update.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/admin/users/users.service.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");
/* harmony import */ var _shared_helpers_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/helpers/update */ "./src/app/shared/helpers/update.ts");
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
    function UpdateComponent(service, notifications, router, route) {
        var _this = _super.call(this, service, notifications, router, route) || this;
        _this.service = service;
        _this.notifications = notifications;
        _this.router = router;
        _this.route = route;
        _this.roles = ["Cliente", "Admin"];
        return _this;
    }
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/admin/users/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/admin/users/update/update.component.scss"), __webpack_require__(/*! ../../../shared/styles/crud-update.scss */ "./src/app/shared/styles/crud-update.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UpdateComponent);
    return UpdateComponent;
}(_shared_helpers_update__WEBPACK_IMPORTED_MODULE_4__["Update"]));



/***/ }),

/***/ "./src/app/admin/users/users-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/users/delete/delete.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/users/update/update.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/users/create/create.component.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], children: [
            { path: 'agregar', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: 'actualizar', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'actualizar/:_id', component: _update_update_component__WEBPACK_IMPORTED_MODULE_3__["UpdateComponent"] },
            { path: 'eliminar', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
            { path: 'eliminar/:_id', component: _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__["DeleteComponent"] },
        ]
    },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"action-container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h2>{{ service.collectionName }}</h2>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <button mat-button type='button' routerLink='agregar'>Agregar {{ service.className | lowercase }}</button>\r\n    <div class=\"table-container\">\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\" matSort>\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef> ID </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element._id}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Created at Column -->\r\n        <ng-container matColumnDef=\"createdAt\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha de registro </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- User name Column -->\r\n        <ng-container matColumnDef=\"username\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Usuario </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Email address Column -->\r\n        <ng-container matColumnDef=\"email\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Correo electrónico </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Role Column -->\r\n        <ng-container matColumnDef=\"role\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Rol </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Acciones </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-button type='button' (click)='onAction(\"actualizar\",element)'>Actualizar</button>\r\n            <button mat-button type='button' (click)='onAction(\"eliminar\",element)'>Eliminar</button>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    </div>\r\n    <ng-container *ngIf='!objects'>\r\n      <mat-spinner class=\"mx-auto col-12\"></mat-spinner>\r\n    </ng-container>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/admin/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helpers_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/helpers/list */ "./src/app/shared/helpers/list.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/admin/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var UsersComponent = /** @class */ (function (_super) {
    __extends(UsersComponent, _super);
    function UsersComponent(service, router) {
        var _this = _super.call(this, service, router, ["id", "createdAt", "name", "username", "email", "role", "actions"]) || this;
        _this.service = service;
        _this.router = router;
        return _this;
    }
    UsersComponent.prototype.onAction = function (action, user) {
        var username = "";
        if (user) {
            username = user['username'];
            this.service.setSelectedObject(user);
        }
        this.router.navigate(["admin", this.service.collectionName.toLowerCase(), action, username]);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/admin/users/users.component.scss"), __webpack_require__(/*! ../../shared/styles/crud-list.scss */ "./src/app/shared/styles/crud-list.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}(_shared_helpers_list__WEBPACK_IMPORTED_MODULE_1__["List"]));



/***/ }),

/***/ "./src/app/admin/users/users.module.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/admin/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/admin/users/create/create.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "./src/app/admin/users/update/update.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/admin/users/delete/delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_2__["UsersRoutingModule"]],
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/admin/users/users.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/users/users.service.ts ***!
  \**********************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
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



var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(httpClient) {
        return _super.call(this, httpClient, "Usuario", "Usuarios", "usuarios") || this;
    }
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UsersService);
    return UsersService;
}(_shared_helpers_dao__WEBPACK_IMPORTED_MODULE_2__["DAO"]));



/***/ }),

/***/ "./src/app/shared/helpers/create.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/create.ts ***!
  \******************************************/
/*! exports provided: Create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Create", function() { return Create; });
var Create = /** @class */ (function () {
    function Create(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
    }
    Create.prototype.onSubmit = function (form) {
        var _this = this;
        var product = form.value;
        this.service.create(product).subscribe(function (addedObject) {
            console.log(addedObject);
            _this.notifications.show(_this.service.className + " agregado (ID: " + addedObject["_id"], _this.service.collectionName, "success");
            _this.router.navigate(["../"], { relativeTo: _this.route });
        }, function (e) {
            console.log(e.error);
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
            form.resetForm();
        });
    };
    return Create;
}());



/***/ }),

/***/ "./src/app/shared/helpers/delete.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/delete.ts ***!
  \******************************************/
/*! exports provided: Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Delete = /** @class */ (function () {
    function Delete(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Delete.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return params.get("_id"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_id) {
            return !!_id
                ? false
                : _this.router.navigate(["../"], { relativeTo: _this.route });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (_id) { return !!_id; }))
            .subscribe(function (_id) { return (_this._id = _id); });
    };
    Delete.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Delete.prototype.onSubmit = function () {
        var _this = this;
        this.service.delete(this._id).subscribe(function () {
            _this.notifications.show(_this.service.className + " eliminado", _this.service.collectionName, "success");
        }, function (e) {
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
        }, function () { return _this.router.navigate(["../../"], { relativeTo: _this.route }); });
    };
    return Delete;
}());



/***/ }),

/***/ "./src/app/shared/helpers/list.ts":
/*!****************************************!*\
  !*** ./src/app/shared/helpers/list.ts ***!
  \****************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var List = /** @class */ (function () {
    function List(service, router, displayedColumns) {
        this.service = service;
        this.router = router;
        this.displayedColumns = displayedColumns;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        if (true) {
            var indexID = displayedColumns.indexOf("id");
            if (indexID >= 0)
                displayedColumns.splice(indexID, 1);
        }
    }
    List.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .all()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function () { return _this.service.objects; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (objects) {
            console.log(_this.service.collectionName + " : ", objects);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.paginator.pageSize = 10;
            _this.objects = objects;
        }))
            .subscribe(function (objects) { return (_this.dataSource.data = objects); });
    };
    List.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    List.prototype.onAction = function (action, object) {
        var _id = "";
        if (object) {
            _id = object["_id"];
            this.service.setSelectedObject(object);
        }
        this.router.navigate(["admin", this.service.apiRoute, action, _id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], List.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], List.prototype, "sort", void 0);
    return List;
}());



/***/ }),

/***/ "./src/app/shared/helpers/update.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helpers/update.ts ***!
  \******************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var Update = /** @class */ (function () {
    function Update(service, notifications, router, route) {
        this.service = service;
        this.notifications = notifications;
        this.router = router;
        this.route = route;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Update.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) { return params.get("_id"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (_id) {
            _this._id = _id;
            if (_id === null || !_id) {
                _this.router.navigate(["../"], { relativeTo: _this.route });
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(function (_id) { return !!_id; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (_id) {
            return _this.service.isObjectSelected()
                ? _this.service.getSelectedObject()
                : _this.service.one(_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngUnsubscribe)
        // tap(object => console.log(object))
        )
            .subscribe(function (object) { return (_this.object = object); });
    };
    Update.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    Update.prototype.onSubmit = function (form) {
        var _this = this;
        var object = form.value;
        this.service.update(this._id, object).subscribe(function (editedObject) {
            _this.notifications.show(_this.service.className + " actualizado", _this.service.collectionName, "success");
            _this.router.navigate(["../../"], { relativeTo: _this.route });
        }, function (e) {
            _this.notifications.show(e.error, _this.service.collectionName, "danger");
            form.resetForm(object);
        });
    };
    return Update;
}());



/***/ }),

/***/ "./src/app/shared/styles/crud-create.scss":
/*!************************************************!*\
  !*** ./src/app/shared/styles/crud-create.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/shared/styles/crud-delete.scss":
/*!************************************************!*\
  !*** ./src/app/shared/styles/crud-delete.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/styles/crud-list.scss":
/*!**********************************************!*\
  !*** ./src/app/shared/styles/crud-list.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  overflow: auto; }\n  .table-container table {\n    width: 100%;\n    min-width: 700px; }\n  .mat-cell {\n  padding: 0 10px; }\n  .action-container {\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/shared/styles/crud-update.scss":
/*!************************************************!*\
  !*** ./src/app/shared/styles/crud-update.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n"

/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map