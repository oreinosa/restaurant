(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module~products-products-module"],{

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

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" (drop)='onDrop($event)' (dragover)=\"onDragover($event);\">\r\n  <div class=\"col-12 mb-4\">\r\n    <div class=\"drop_zone my-2 hover\" (click)='addFile()' >\r\n      <p class=\"hint-message\">{{ hint }}</p>\r\n      <p class='supported-types'>({{ types }})</p>\r\n    </div>\r\n    <input type=\"file\" #file style='display:none' name='foo' placeholder='File upload' (change)=\"previewFile($event)\" [accept]='types'\r\n    />\r\n  </div>\r\n  <div class=\"col-12 mb-4\">\r\n    <ng-container *ngIf='fileURL;else noFile'>\r\n      <ng-container [ngSwitch]='type'>\r\n        <ng-container *ngSwitchCase='\"image\"'>\r\n          <img [src]=\"fileURL\" alt=\"image\" class='img-fluid'>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase='\"document\"'>\r\n          document preview\r\n        </ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n    <ng-template #noFile>\r\n      <h6>({{ errorMsg }})</h6>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-fluid {\n  max-height: 350px;\n  text-align: center; }\n\n.drop_zone {\n  height: 100%;\n  border: 1px solid #aaa;\n  background-color: #fafafa;\n  text-align: center;\n  padding-top: 15px;\n  padding-right: 15%;\n  padding-left: 15%; }\n\n.drop_zone .hint-message {\n    font-size: 25px;\n    line-height: 25px; }\n\n.drop_zone .supported-types {\n    margin-top: 15px;\n    font-size: 15px;\n    line-height: 15px; }\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.types = ".png,.jpeg,.jpg";
        this.hint = "Selecciona o arrastra un archivo acá";
        this.errorMsg = "No se ha subido ninguna imagen aún";
        this.mode = "new";
    }
    UploadComponent.prototype.ngOnInit = function () {
        if (this.fileURL) {
            this.mode = "edit";
            this.originalFileURL = this.fileURL;
            this.originalFileURL = this.originalFileURL.replace(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].static, "");
        }
        if (this.types.search(/(jpg|png|jpeg)/)) {
            this.type = "image";
        }
        else if (this.types.search(/pdf/)) {
            this.type = "document";
        }
    };
    UploadComponent.prototype.addFile = function () {
        this.fileInput.nativeElement.click();
    };
    UploadComponent.prototype.previewFile = function (event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            if (this.type === "image") {
                this.previewImage(this.file);
            }
        }
    };
    UploadComponent.prototype.previewImage = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.fileURL = event.target.result;
        };
        reader.readAsDataURL(image);
    };
    UploadComponent.prototype.onDrop = function (ev) {
        ev.preventDefault();
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === "file") {
                    this.file = ev.dataTransfer.items[i].getAsFile();
                    // console.log('... file[' + i + '].name = ' + file.name);
                }
            }
        }
        else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
                this.file = ev.dataTransfer.files[i];
            }
        }
        this.previewImage(this.file);
        // Pass event to removeDragData for cleanup
        this.removeDragData(ev);
    };
    UploadComponent.prototype.removeDragData = function (ev) {
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        }
        else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    };
    UploadComponent.prototype.onDragover = function (event) {
        // console.log('File(s) in drop zone');
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();
    };
    UploadComponent.prototype.onSubmit = function (fileRoute) {
        // console.log(this.file);
        // console.log('submitting ', this.mode);
        if (this.file) {
            if (this.mode === "edit" && this.originalFileURL) {
                return this.uploadService.editFile(this.originalFileURL, this.file);
            }
            else if (this.mode === "new" || this.mode === "edit") {
                return this.uploadService.uploadFile(fileRoute, this.file);
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String)
    ], UploadComponent.prototype, "fileURL", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "types", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "hint", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("file"),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "fileInput", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-upload",
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"]],
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "upload/";
    }
    UploadService.prototype.uploadFile = function (route, file) {
        var formData = new FormData();
        formData.append("uploadedFile", file, "upload");
        formData.append("route", route);
        return this.http.post(this.api, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data;
        }));
    };
    UploadService.prototype.editFile = function (filePath, file) {
        var formData = new FormData();
        formData.append("uploadedFile", file, "upload");
        formData.append("filePath", filePath);
        return this.http.put(this.api, formData);
    };
    UploadService.prototype.deleteFile = function (filePath) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params.append("filePath", filePath);
        return this.http.delete(this.api, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res.data;
        }));
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module~products-products-module.js.map