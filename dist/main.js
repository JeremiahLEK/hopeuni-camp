(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camper/home/home.component */ "./src/app/pages/camper/home/home.component.ts");
/* harmony import */ var _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin/home-admin/home-admin.component */ "./src/app/pages/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/admin/login-admin/login-admin.component */ "./src/app/pages/admin/login-admin/login-admin.component.ts");
/* harmony import */ var _pages_admin_redirect_admin_redirect_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/redirect-admin/redirect-admin.component */ "./src/app/pages/admin/redirect-admin/redirect-admin.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_3__["HomeAdminComponent"]
    },
    {
        path: 'admin/login',
        component: _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_4__["LoginAdminComponent"]
    },
    {
        path: 'admin/redirect',
        component: _pages_admin_redirect_admin_redirect_admin_component__WEBPACK_IMPORTED_MODULE_5__["RedirectAdminComponent"]
    },
    {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<a [routerLink]=\"['/']\"><button mat-button>Camper</button></a>\n<a [routerLink]=\"['/admin']\"><button mat-button style='background-color: warn'>Admin</button></a>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_camper_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/camper/announcements/announcements.component */ "./src/app/pages/camper/announcements/announcements.component.ts");
/* harmony import */ var _pages_camper_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/camper/schedule/schedule.component */ "./src/app/pages/camper/schedule/schedule.component.ts");
/* harmony import */ var _pages_camper_camper_info_camper_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/camper/camper-info/camper-info.component */ "./src/app/pages/camper/camper-info/camper-info.component.ts");
/* harmony import */ var _pages_camper_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/camper/feedback/feedback.component */ "./src/app/pages/camper/feedback/feedback.component.ts");
/* harmony import */ var _pages_camper_testimony_testimony_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/camper/testimony/testimony.component */ "./src/app/pages/camper/testimony/testimony.component.ts");
/* harmony import */ var _pages_admin_announcements_admin_announcements_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/admin/announcements-admin/announcements-admin.component */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.ts");
/* harmony import */ var _pages_admin_schedule_admin_schedule_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin/schedule-admin/schedule-admin.component */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.ts");
/* harmony import */ var _pages_admin_camper_info_admin_camper_info_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin/camper-info-admin/camper-info-admin.component */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts");
/* harmony import */ var _pages_admin_feedback_admin_feedback_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin/feedback-admin/feedback-admin.component */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.ts");
/* harmony import */ var _pages_admin_testimony_admin_testimony_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/admin/testimony-admin/testimony-admin.component */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.ts");
/* harmony import */ var _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/camper/home/home.component */ "./src/app/pages/camper/home/home.component.ts");
/* harmony import */ var _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/admin/home-admin/home-admin.component */ "./src/app/pages/admin/home-admin/home-admin.component.ts");
/* harmony import */ var _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/login-admin/login-admin.component */ "./src/app/pages/admin/login-admin/login-admin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_camper_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/camper/footer/footer.component */ "./src/app/pages/camper/footer/footer.component.ts");
/* harmony import */ var _pages_camper_schedule_schedule_countdown_schedule_countdown_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/camper/schedule/schedule-countdown/schedule-countdown.component */ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.ts");
/* harmony import */ var _pages_admin_redirect_admin_redirect_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/admin/redirect-admin/redirect-admin.component */ "./src/app/pages/admin/redirect-admin/redirect-admin.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// Material Modules













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_camper_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsComponent"],
                _pages_camper_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_6__["ScheduleComponent"],
                _pages_camper_camper_info_camper_info_component__WEBPACK_IMPORTED_MODULE_7__["CamperInfoComponent"],
                _pages_camper_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _pages_camper_testimony_testimony_component__WEBPACK_IMPORTED_MODULE_9__["TestimonyComponent"],
                _pages_admin_announcements_admin_announcements_admin_component__WEBPACK_IMPORTED_MODULE_10__["AnnouncementsAdminComponent"],
                _pages_admin_schedule_admin_schedule_admin_component__WEBPACK_IMPORTED_MODULE_11__["ScheduleAdminComponent"],
                _pages_admin_camper_info_admin_camper_info_admin_component__WEBPACK_IMPORTED_MODULE_12__["CamperInfoAdminComponent"],
                _pages_admin_feedback_admin_feedback_admin_component__WEBPACK_IMPORTED_MODULE_13__["FeedbackAdminComponent"],
                _pages_admin_testimony_admin_testimony_admin_component__WEBPACK_IMPORTED_MODULE_14__["TestimonyAdminComponent"],
                _pages_camper_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _pages_admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_16__["HomeAdminComponent"],
                _pages_admin_login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_17__["LoginAdminComponent"],
                _pages_admin_redirect_admin_redirect_admin_component__WEBPACK_IMPORTED_MODULE_21__["RedirectAdminComponent"],
                _pages_camper_schedule_schedule_countdown_schedule_countdown_component__WEBPACK_IMPORTED_MODULE_20__["ScheduleCountdownComponent"],
                _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__["NotFoundComponent"],
                _pages_camper_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // Import HttpClientModule
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                // Material Modules
                _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/AnnouncementEntry.model.ts":
/*!**************************************************!*\
  !*** ./src/app/model/AnnouncementEntry.model.ts ***!
  \**************************************************/
/*! exports provided: AnnouncementEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementEntry", function() { return AnnouncementEntry; });
/* harmony import */ var _IndexedObject_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexedObject.model */ "./src/app/model/IndexedObject.model.ts");
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

var AnnouncementEntry = /** @class */ (function (_super) {
    __extends(AnnouncementEntry, _super);
    function AnnouncementEntry(id, description, deleted) {
        var _this = this;
        if (deleted == null) {
            deleted = 0;
        }
        _this = _super.call(this, id, deleted) || this;
        _this.description = description;
        return _this;
    }
    AnnouncementEntry.FromSheet = function (values) {
        var annoEntry = new AnnouncementEntry(0, "", 1);
        annoEntry.setId(values[0]);
        annoEntry.setDeleted(values[1]);
        annoEntry.setDescription(values[2]);
        return annoEntry;
    };
    AnnouncementEntry.prototype.getDescription = function () {
        return this.description;
    };
    AnnouncementEntry.prototype.setDescription = function (description) {
        this.description = description;
    };
    AnnouncementEntry.prototype.toSheet = function () {
        return [this.getId(), this.getDeleted(), this.description];
    };
    return AnnouncementEntry;
}(_IndexedObject_model__WEBPACK_IMPORTED_MODULE_0__["IndexedObject"]));



/***/ }),

/***/ "./src/app/model/IndexedObject.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/IndexedObject.model.ts ***!
  \**********************************************/
/*! exports provided: IndexedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedObject", function() { return IndexedObject; });
var IndexedObject = /** @class */ (function () {
    function IndexedObject(id, deleted) {
        this.id = id;
        this.deleted = deleted;
    }
    IndexedObject.prototype.isDeleted = function () {
        return this.deleted === 1;
    };
    IndexedObject.prototype.delete = function () {
        this.setDeleted(1);
    };
    IndexedObject.prototype.getId = function () {
        return this.id;
    };
    IndexedObject.prototype.setId = function (id) {
        this.id = +id;
    };
    IndexedObject.prototype.getDeleted = function () {
        return this.deleted;
    };
    IndexedObject.prototype.setDeleted = function (deleted) {
        this.deleted = +deleted;
    };
    return IndexedObject;
}());



/***/ }),

/***/ "./src/app/model/ScheduleEntry.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/ScheduleEntry.model.ts ***!
  \**********************************************/
/*! exports provided: ScheduleEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEntry", function() { return ScheduleEntry; });
/* harmony import */ var _AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnouncementEntry.model */ "./src/app/model/AnnouncementEntry.model.ts");
/* harmony import */ var _utils_campInfo_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/campInfo.util */ "./src/app/utils/campInfo.util.ts");
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


var ScheduleEntry = /** @class */ (function (_super) {
    __extends(ScheduleEntry, _super);
    function ScheduleEntry(id, description, day, startTime, endTime, info, deleted) {
        var _this = _super.call(this, id, description, deleted) || this;
        _this.day = day;
        _this.startTime = startTime;
        _this.endTime = endTime;
        _this.info = info;
        return _this;
    }
    ScheduleEntry.prototype.getStartDate = function () {
        var campDay = _utils_campInfo_util__WEBPACK_IMPORTED_MODULE_1__["CAMP_DAYS"][this.day];
        var hour = this.startTime / 100;
        var minute = this.startTime % 100;
        return new Date(2018, 6, +campDay, +hour, +minute);
    };
    ScheduleEntry.prototype.getDay = function () {
        return this.day;
    };
    ScheduleEntry.prototype.getStartTime = function () {
        return this.startTime;
    };
    ScheduleEntry.prototype.getEndTime = function () {
        return this.endTime;
    };
    ScheduleEntry.prototype.getInfo = function () {
        return this.info;
    };
    ScheduleEntry.FromSheet = function (sheet) {
        return new ScheduleEntry(+sheet[0], sheet[2], +sheet[3], +sheet[4], +sheet[5], sheet[6], +sheet[1]);
    };
    return ScheduleEntry;
}(_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_0__["AnnouncementEntry"]));



/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <h1> Announcements </h1>\n  <mat-form-field>\n    <textarea matInput #description placeholder=\"New Announcement\"></textarea>\n  </mat-form-field>\n\n  <button mat-raised-button (click)=\"onAdd(description)\" style=\"margin-left: 20px;\">Add</button>\n</form>\n\n<table mat-table [dataSource]='dataSource'>\n\n  <!-- Description -->\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef> Description </th>\n    <td mat-cell *matCellDef=\"let entry\"> {{ entry.getDescription() }} </td>\n  </ng-container>\n\n  <!-- Delete -->\n  <ng-container matColumnDef=\"delete\">\n    <th mat-header-cell *matHeaderCellDef> Delete </th>\n    <td mat-cell *matCellDef=\"let entry\"><button mat-raised-button (click)=\"onDelete(entry)\"> Delete </button></td>\n  </ng-container>\n\n  <!-- Declares what column and what rows to be displayed --> \n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n</table> "

/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/announcements-admin/announcements-admin.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/announcements-admin/announcements-admin.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AnnouncementsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsAdminComponent", function() { return AnnouncementsAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_announcements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/announcements.service */ "./src/app/service/announcements.service.ts");
/* harmony import */ var _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/AnnouncementEntry.model */ "./src/app/model/AnnouncementEntry.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnnouncementsAdminComponent = /** @class */ (function () {
    function AnnouncementsAdminComponent(annoService) {
        this.annoService = annoService;
        this.displayedColumns = ["description", "delete"];
        this.dataSource = [];
        this.limit = 5;
    }
    AnnouncementsAdminComponent.prototype.ngOnInit = function () {
        this.loadSheet();
    };
    AnnouncementsAdminComponent.prototype.loadSheet = function () {
        var _this = this;
        this.annoService.getLatestEntries(this.limit).subscribe(function (entries) {
            _this.dataSource = entries;
        });
    };
    AnnouncementsAdminComponent.prototype.processEntry = function (entry) {
        return _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_2__["AnnouncementEntry"].FromSheet(entry);
    };
    AnnouncementsAdminComponent.prototype.createAnno = function (id, description) {
        var _this = this;
        var anno = new _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_2__["AnnouncementEntry"](id, description);
        this.annoService.appendSheet(anno).subscribe(function (response) {
            console.log(response);
            _this.loadSheet();
        });
    };
    AnnouncementsAdminComponent.prototype.onAdd = function (description) {
        var _this = this;
        var nextId = (this.dataSource[0]) ? this.dataSource[0].getId() + 1 : 1;
        var updates = [new _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_2__["AnnouncementEntry"](nextId, description.value)];
        if (this.dataSource.length == this.limit) {
            var lastEntry = this.dataSource[this.limit - 1];
            lastEntry.delete();
            updates.push(lastEntry);
        }
        this.annoService.multiAppendSheet(updates).subscribe(function (response) {
            _this.loadSheet();
        });
    };
    AnnouncementsAdminComponent.prototype.onDelete = function (entry) {
        var _this = this;
        entry.delete();
        this.annoService.appendSheet(entry).subscribe(function (response) {
            console.log(response);
            _this.loadSheet();
        });
    };
    AnnouncementsAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcements-admin',
            template: __webpack_require__(/*! ./announcements-admin.component.html */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.html"),
            styles: [__webpack_require__(/*! ./announcements-admin.component.scss */ "./src/app/pages/admin/announcements-admin/announcements-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_announcements_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementsService"]])
    ], AnnouncementsAdminComponent);
    return AnnouncementsAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  camper-info-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/camper-info-admin/camper-info-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: CamperInfoAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoAdminComponent", function() { return CamperInfoAdminComponent; });
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

var CamperInfoAdminComponent = /** @class */ (function () {
    function CamperInfoAdminComponent() {
    }
    CamperInfoAdminComponent.prototype.ngOnInit = function () {
    };
    CamperInfoAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camper-info-admin',
            template: __webpack_require__(/*! ./camper-info-admin.component.html */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.html"),
            styles: [__webpack_require__(/*! ./camper-info-admin.component.scss */ "./src/app/pages/admin/camper-info-admin/camper-info-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CamperInfoAdminComponent);
    return CamperInfoAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feedback-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/feedback-admin/feedback-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/feedback-admin/feedback-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedbackAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackAdminComponent", function() { return FeedbackAdminComponent; });
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

var FeedbackAdminComponent = /** @class */ (function () {
    function FeedbackAdminComponent() {
    }
    FeedbackAdminComponent.prototype.ngOnInit = function () {
    };
    FeedbackAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-admin',
            template: __webpack_require__(/*! ./feedback-admin.component.html */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.html"),
            styles: [__webpack_require__(/*! ./feedback-admin.component.scss */ "./src/app/pages/admin/feedback-admin/feedback-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackAdminComponent);
    return FeedbackAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-tab-group>\n    <mat-tab label=\"Announcement\">\n      <app-announcements-admin></app-announcements-admin>\n    </mat-tab>\n    <mat-tab label=\"Schedule\"> Content 2 </mat-tab>\n    <mat-tab label=\"Feedback\"> Content 3 </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/home-admin/home-admin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/home-admin/home-admin.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function() { return HomeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeAdminComponent = /** @class */ (function () {
    function HomeAdminComponent(activatedRouter, router, oauth) {
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.oauth = oauth;
    }
    HomeAdminComponent.prototype.validateOAuth = function () {
        if (!this.oauth.hasOAuth()) {
            this.router.navigate(["/admin/login"]);
        }
    };
    HomeAdminComponent.prototype.ngOnInit = function () {
        this.validateOAuth();
    };
    HomeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-admin',
            template: __webpack_require__(/*! ./home-admin.component.html */ "./src/app/pages/admin/home-admin/home-admin.component.html"),
            styles: [__webpack_require__(/*! ./home-admin.component.scss */ "./src/app/pages/admin/home-admin/home-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleOAuthService"]])
    ], HomeAdminComponent);
    return HomeAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login-admin works!\n\n  <a [href]=\"getAuthLink()\"><button> Login With Google </button></a>\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/login-admin/login-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/login-admin/login-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(oauth) {
        this.oauth = oauth;
    }
    LoginAdminComponent.prototype.getAuthLink = function () {
        return this.oauth.getAuthUrl();
    };
    LoginAdminComponent.prototype.ngOnInit = function () {
    };
    LoginAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-admin',
            template: __webpack_require__(/*! ./login-admin.component.html */ "./src/app/pages/admin/login-admin/login-admin.component.html"),
            styles: [__webpack_require__(/*! ./login-admin.component.scss */ "./src/app/pages/admin/login-admin/login-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleOAuthService"]])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/redirect-admin/redirect-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/redirect-admin/redirect-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div *ngIf=\"state == PROCESSING\">Processing Access Token...</div>\n\t<div *ngIf=\"state == ERROR\">{{ error }}</div>\n\t<div *ngIf=\"state == SUCCESS\">Successfully process access token</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/admin/redirect-admin/redirect-admin.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/redirect-admin/redirect-admin.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/redirect-admin/redirect-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/redirect-admin/redirect-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: RedirectAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectAdminComponent", function() { return RedirectAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
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



var RedirectAdminComponent = /** @class */ (function () {
    function RedirectAdminComponent(oauth, route) {
        this.oauth = oauth;
        this.route = route;
        this.PROCESSING = 1;
        this.ERROR = 2;
        this.SUCCESS = 3;
        this.state = this.PROCESSING;
        this.error = "No Error";
    }
    RedirectAdminComponent.prototype.ngOnInit = function () {
        this.processAccessToken(window.location.hash);
    };
    RedirectAdminComponent.prototype.processAccessToken = function (hashString) {
        var hasAccessKey = hashString.includes("access_token=");
        if (!hasAccessKey) {
            this.error = "Invalid Url: No access token";
            this.state = this.ERROR;
            return;
        }
        var accessToken = this.extrctAccessToken(hashString);
        if (this.oauth.isValidAccessToken(accessToken)) {
            this.state = this.SUCCESS;
            this.oauth.saveOAuth(accessToken);
            this.route.navigate(["/admin"]);
        }
        else {
            this.state = this.ERROR;
            this.error = "Invalid Url: Invalid Access Token: " + JSON.stringify(accessToken);
        }
    };
    RedirectAdminComponent.prototype.extrctAccessToken = function (hashString) {
        var params = {};
        hashString.substr(1).split("&").map(function (parts) {
            var keyValue = parts.split("=");
            params[keyValue[0]] = keyValue[1];
        });
        return params;
    };
    RedirectAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect-admin',
            template: __webpack_require__(/*! ./redirect-admin.component.html */ "./src/app/pages/admin/redirect-admin/redirect-admin.component.html"),
            styles: [__webpack_require__(/*! ./redirect-admin.component.scss */ "./src/app/pages/admin/redirect-admin/redirect-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_google_o_auth_service__WEBPACK_IMPORTED_MODULE_1__["GoogleOAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedirectAdminComponent);
    return RedirectAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/schedule-admin/schedule-admin.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/schedule-admin/schedule-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: ScheduleAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleAdminComponent", function() { return ScheduleAdminComponent; });
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

var ScheduleAdminComponent = /** @class */ (function () {
    function ScheduleAdminComponent() {
    }
    ScheduleAdminComponent.prototype.ngOnInit = function () {
    };
    ScheduleAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-admin',
            template: __webpack_require__(/*! ./schedule-admin.component.html */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.html"),
            styles: [__webpack_require__(/*! ./schedule-admin.component.scss */ "./src/app/pages/admin/schedule-admin/schedule-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleAdminComponent);
    return ScheduleAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  testimony-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin/testimony-admin/testimony-admin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/testimony-admin/testimony-admin.component.ts ***!
  \**************************************************************************/
/*! exports provided: TestimonyAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyAdminComponent", function() { return TestimonyAdminComponent; });
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

var TestimonyAdminComponent = /** @class */ (function () {
    function TestimonyAdminComponent() {
    }
    TestimonyAdminComponent.prototype.ngOnInit = function () {
    };
    TestimonyAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimony-admin',
            template: __webpack_require__(/*! ./testimony-admin.component.html */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.html"),
            styles: [__webpack_require__(/*! ./testimony-admin.component.scss */ "./src/app/pages/admin/testimony-admin/testimony-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonyAdminComponent);
    return TestimonyAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner class=\"spinner\" *ngIf=\"displayLoader\"></mat-spinner>\n<h1 style=\"text-align: center\"> Announcements </h1>\n<mat-list dense role=\"list\">\n  <div *ngFor = \"let anno of this.announcementlist\">\n    <mat-list-item role=\"listitem\">{{anno.getDescription()}}</mat-list-item>\n    <mat-divider></mat-divider> \n  </div>\n</mat-list>\n"

/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 20px;\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/pages/camper/announcements/announcements.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/camper/announcements/announcements.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_announcements_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/announcements.service */ "./src/app/service/announcements.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnnouncementsComponent = /** @class */ (function () {
    function AnnouncementsComponent(annoService) {
        this.annoService = annoService;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayLoader = true;
        this.annoService.getLatestEntries(5).subscribe(function (response) {
            _this.announcementlist = response;
            _this.displayLoader = false;
        });
    };
    AnnouncementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-announcements',
            template: __webpack_require__(/*! ./announcements.component.html */ "./src/app/pages/camper/announcements/announcements.component.html"),
            styles: [__webpack_require__(/*! ./announcements.component.scss */ "./src/app/pages/camper/announcements/announcements.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_announcements_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementsService"]])
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1> Camper Info </h1> \n\t<mat-progress-spinner *ngIf=\"displayLoader\" mode=\"indeterminate\" class=\"spinner\"></mat-progress-spinner>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/camper-info/camper-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/camper/camper-info/camper-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: CamperInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoComponent", function() { return CamperInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_camper_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/camper-info.service */ "./src/app/service/camper-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CamperInfoComponent = /** @class */ (function () {
    function CamperInfoComponent(camperInfoService) {
        this.camperInfoService = camperInfoService;
    }
    CamperInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayLoader = true;
        this.camperInfoService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
            _this.displayLoader = false;
        });
    };
    CamperInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-camper-info',
            template: __webpack_require__(/*! ./camper-info.component.html */ "./src/app/pages/camper/camper-info/camper-info.component.html"),
            styles: [__webpack_require__(/*! ./camper-info.component.scss */ "./src/app/pages/camper/camper-info/camper-info.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_camper_info_service__WEBPACK_IMPORTED_MODULE_1__["CamperInfoService"]])
    ], CamperInfoComponent);
    return CamperInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1> Feedback  </h1>\n\t<mat-progress-spinner *ngIf=\"displayLoader\" mode=\"indeterminate\" class=\"spinner\"></mat-progress-spinner>\n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/feedback/feedback.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/camper/feedback/feedback.component.ts ***!
  \*************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_feedback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/feedback.service */ "./src/app/service/feedback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(feedbackService) {
        this.feedbackService = feedbackService;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayLoader = true;
        this.feedbackService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
            _this.displayLoader = false;
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/pages/camper/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/pages/camper/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_feedback_service__WEBPACK_IMPORTED_MODULE_1__["FeedbackService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/camper/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class='campSchedule' align='center'>\n  <a mat-button class='footerTitle' href=\"\">\n    <h1>CAMP SCHEDULE</h1>\n  </a>\n  <mat-card-content>\n    <p class='footerText'>Find out what programme is happening now, later and what to bring</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-icon-button>\n      <mat-icon svgIcon=\"forward-arrow\">-></mat-icon>\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class='campersInfo' align='center'>\n  <a mat-button class='footerTitle' href=\"\">\n    <h1>CAMPERS INFO</h1>\n  </a>\n  <mat-card-content>\n    <p class='footerText'>Check out what workshop you belong to and what to bring for it</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-icon-button>\n      <mat-icon svgIcon=\"forward-arrow\">-></mat-icon>\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class='thanksgiving' align='center'>\n  <a mat-button class='footerTitle' href=\"\">\n    <h1>THANKSGIVING</h1>\n  </a>\n  <mat-card-content>\n    <p class='footerText'>Share with us your testimonies and breakthroughs during camp!</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-icon-button>\n      <mat-icon svgIcon=\"forward-arrow\">-></mat-icon>\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n<mat-card class='campInfo' align='center'>\n  <a mat-button class='footerTitle' href=\"\">\n    <h1>CAMP INFO</h1>\n  </a>\n  <mat-card-content>\n    <p class='footerText'>Emergency hotline, lost and found, and administrative matters</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-icon-button>\n      <mat-icon svgIcon=\"forward-arrow\">-></mat-icon>\n    </a>\n  </mat-card-actions>\n</mat-card>\n\n\n<mat-card class='footer' align='center'>\n  <a style='margin-right: 1vw' mat-icon-button href=\"https://www.facebook.com/profile.php?id=100005191305022\" target=\"blank\">\n    <mat-icon svgIcon=\"fb\" style='color:black'>FB</mat-icon>\n  </a>\n  \n  <a style='margin-left: 1vw' mat-icon-button href=\"https://www.instagram.com/hopeuni/\" target=\"blank\">\n    <mat-icon svgIcon=\"ig\" style='color:black'>IG</mat-icon>\n  </a>\n</mat-card>\n\n<!--\n<div>Icons made by\n  <a href=\"https://www.flaticon.com/authors/bogdan-rosu\" title=\"Bogdan Rosu\">Bogdan Rosu</a> from\n  <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by\n  <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\"\n    target=\"_blank\">CC 3.0 BY</a>\n</div>\n\n<div>Icons made by\n  <a href=\"https://www.flaticon.com/authors/bogdan-rosu\" title=\"Bogdan Rosu\">Bogdan Rosu</a> from\n  <a href=\"https://www.flaticon.com/\" title=\"Flaticon\">www.flaticon.com</a> is licensed by\n  <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\"\n    target=\"_blank\">CC 3.0 BY</a>\n</div> \n-->\n"

/***/ }),

/***/ "./src/app/pages/camper/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/camper/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\n  color: white;\n  font-size: 9vw;\n  height: 9vw;\n  width: 9vw;\n  line-height: 9vw; }\n\n.footerText {\n  font-size: 4vw; }\n\n.campSchedule {\n  color: black;\n  background-color: #efefef;\n  height: 33vh; }\n\n.campersInfo {\n  color: white;\n  background-color: #999997;\n  height: 33vh; }\n\n.thanksgiving {\n  color: white;\n  background-color: #414141;\n  height: 33vh; }\n\n.campInfo {\n  color: white;\n  background-color: #1e1e24;\n  height: 33vh; }\n"

/***/ }),

/***/ "./src/app/pages/camper/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/camper/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function FooterComponent(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('forward-arrow', sanitizer.bypassSecurityTrustResourceUrl('assets/images/forward-arrow.svg'));
        iconRegistry.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('assets/images/facebook-logo.svg'));
        iconRegistry.addSvgIcon('ig', sanitizer.bypassSecurityTrustResourceUrl('assets/images/instagram-logo.svg'));
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.pictureIG = '.src/assets/images/instagram-logo.png';
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/camper/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/pages/camper/footer/footer.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class = 'alert'>\n\t<app-announcements></app-announcements>\n</mat-card>\n\n<mat-card>\n\t<app-schedule></app-schedule>\n</mat-card> \n\n<mat-card>\n\t<app-footer></app-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/pages/camper/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/camper/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/camper/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/camper/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isCountingDown\">\n\t<div class = 'time-holder'>\n\t\t<div class = 'time'>\n\t\t\t<h1>{{days}}</h1>\n\t\t\t<p>days</p>\n\t\t</div>\n\t\t<div class = 'time'>\n\t\t\t<h1>{{hours}}</h1>\n\t\t\t<p>hours</p>\n\t\t</div>\n\t\t<div class = 'time'>\n\t\t\t<h1>{{minutes}}</h1>\n\t\t\t<p>minutes</p>\n\t\t</div>\n\t\t<div class = 'time'>\n\t\t\t<h1>{{seconds}}</h1>\n\t\t\t<p>seconds</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  text-align: center; }\n\n.time-holder {\n  width: 350px;\n  margin: 0 auto; }\n\n.time {\n  width: 25%;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ScheduleCountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCountdownComponent", function() { return ScheduleCountdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduleCountdownComponent = /** @class */ (function () {
    function ScheduleCountdownComponent() {
        this.expired = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCountingDown = false;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.message = "";
    }
    ScheduleCountdownComponent.prototype.ngOnInit = function () {
    };
    ScheduleCountdownComponent.prototype.start = function (schedule) {
        if (schedule) {
            this.startCountdown(schedule);
        }
        else {
            this.isCountingDown = false;
        }
    };
    ScheduleCountdownComponent.prototype.startCountdown = function (schedule) {
        var _this = this;
        var countdownTo = schedule.getStartDate();
        var currentTime, remainingTime;
        this.message = schedule.getInfo();
        var countdown = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).subscribe(function (n) {
            _this.isCountingDown = true;
            currentTime = new Date();
            if (Math.round((countdownTo.getTime() - currentTime.getTime()) / 1000) <= 0) {
                _this.expired.emit(schedule);
            }
            var seconds = Math.round((countdownTo.getTime() - currentTime.getTime()) / 1000);
            _this.days = Math.floor(seconds / 86400);
            seconds -= _this.days * 86400;
            _this.hours = Math.floor(seconds / 3600);
            seconds -= _this.hours * 3600;
            _this.minutes = Math.floor(seconds / 60);
            seconds -= _this.minutes * 60;
            _this.seconds = seconds;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScheduleCountdownComponent.prototype, "expired", void 0);
    ScheduleCountdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-countdown',
            template: __webpack_require__(/*! ./schedule-countdown.component.html */ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.html"),
            styles: [__webpack_require__(/*! ./schedule-countdown.component.scss */ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleCountdownComponent);
    return ScheduleCountdownComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner class=\"spinner\" *ngIf=\"displayLoader\"></mat-spinner>\n<app-schedule-countdown (expired)=\"onExpired($event)\"></app-schedule-countdown>  \n\n<mat-card style='background-color:#034f80;'> \n\n  <h1 align='center'  style='opacity: 0.4; color:white'>UP NEXT</h1>\n  \n  <mat-card class='cards'>\n    <h1 class='title1'>TIME</h1>\n    <p class='text1'>ACTIVITY</p>\n  </mat-card>\n\n  <div class='spacer'></div>\n\n  <mat-card class='cards'>\n    <h1 class='title2'>TIME</h1>\n    <p class='text2'>ACTIVITY</p>\n  </mat-card>\n\n  <div class='spacer'></div>\n\n  <mat-card class='cards'>\n    <h1 class='title3'>TIME</h1>\n    <p class='text3'>ACTIVITY</p>\n  </mat-card>\n\n  <div class='spacer'></div>\n\n  <table mat-table [dataSource]='dataSource'>\n    <!-- Day -->\n    <ng-container matColumnDef=\"day\"> \n      <th mat-header-cell *matHeaderCellDef> Day </th>\n      <td mat-cell *matCellDef=\"let entry\"> {{ entry.getDay() }} </td>\n    </ng-container>\n\n    <!-- Time -->\n    <ng-container matColumnDef=\"time\">\n      <th mat-header-cell *matHeaderCellDef> Time </th>\n      <td mat-cell *matCellDef=\"let entry\"> {{ entry.getStartTime() }} - {{ entry.getEndTime() }} </td>\n    </ng-container>\n\n    <!-- Event -->\n    <ng-container matColumnDef=\"event\">\n      <th mat-header-cell *matHeaderCellDef> Event </th>\n      <td mat-cell *matCellDef=\"let entry\"> {{ entry.getDescription() }} </td>\n    </ng-container>\n\n    <!-- Info -->\n    <ng-container matColumnDef=\"info\">\n      <th mat-header-cell *matHeaderCellDef> Info </th>\n      <td mat-cell *matCellDef=\"let entry\"> {{ entry.getInfo() }} </td>\n    </ng-container>\n\n    <!-- Declares what column and what rows to be displayed --> \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table> \n\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.cards {\n  background-color: #fe6060;\n  text-align: center;\n  color: white;\n  height: 25vh;\n  width: 90%; }\n\n.spacer {\n  height: 1vh; }\n"

/***/ }),

/***/ "./src/app/pages/camper/schedule/schedule.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/camper/schedule/schedule.component.ts ***!
  \*************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_schedule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/schedule.service */ "./src/app/service/schedule.service.ts");
/* harmony import */ var _schedule_countdown_schedule_countdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-countdown/schedule-countdown.component */ "./src/app/pages/camper/schedule/schedule-countdown/schedule-countdown.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(schService) {
        this.schService = schService;
        this.displayedColumns = ['day', 'time', 'event', 'info'];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        this.displayLoader = true;
    };
    ScheduleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.schService.getLatestEntries().subscribe(function (response) {
            _this.entries = _this.sortEntries(response);
            _this.dataSource = _this.entries;
            _this.onExpired(null);
            _this.displayLoader = false;
        });
    };
    ScheduleComponent.prototype.onExpired = function ($event) {
        if (this.entries) {
            if ($event == this.entries[0] && this.entries.length > 1) {
                this.entries.shift();
                this.countdown.start(this.entries[0]);
            }
            else if (this.entries.length > 1) {
                this.countdown.start(this.entries[0]);
            }
            else {
                this.countdown.start();
            }
        }
    };
    ScheduleComponent.prototype.sortEntries = function (entries) {
        entries.sort(function (a, b) {
            if (+a.getDay() < +b.getDay() ||
                +a.getDay() === +b.getDay() && +a.getStartTime() < +b.getStartTime()) {
                return -1;
            }
            return 1;
        });
        return entries;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_schedule_countdown_schedule_countdown_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleCountdownComponent"]),
        __metadata("design:type", Object)
    ], ScheduleComponent.prototype, "countdown", void 0);
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/pages/camper/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/pages/camper/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_schedule_service__WEBPACK_IMPORTED_MODULE_1__["ScheduleService"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-progress-spinner *ngIf=\"displayLoader\" mode=\"indeterminate\" class=\"spinner\"></mat-progress-spinner>\n\t<h1> Testimony </h1> \n\t<pre class = \"json-block\"> {{ data }} </pre>\n</div>"

/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/camper/testimony/testimony.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/camper/testimony/testimony.component.ts ***!
  \***************************************************************/
/*! exports provided: TestimonyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyComponent", function() { return TestimonyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_testimony_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/testimony.service */ "./src/app/service/testimony.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonyComponent = /** @class */ (function () {
    function TestimonyComponent(testimonyService) {
        this.testimonyService = testimonyService;
    }
    TestimonyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayLoader = true;
        this.testimonyService.getSheet().subscribe(function (response) {
            _this.data = JSON.stringify(response.values, null, 2);
            _this.displayLoader = false;
        });
    };
    TestimonyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimony',
            template: __webpack_require__(/*! ./testimony.component.html */ "./src/app/pages/camper/testimony/testimony.component.html"),
            styles: [__webpack_require__(/*! ./testimony.component.scss */ "./src/app/pages/camper/testimony/testimony.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_testimony_service__WEBPACK_IMPORTED_MODULE_1__["TestimonyService"]])
    ], TestimonyComponent);
    return TestimonyComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 Not Found!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
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
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service/announcements.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/announcements.service.ts ***!
  \**************************************************/
/*! exports provided: AnnouncementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsService", function() { return AnnouncementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
/* harmony import */ var _google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-o-auth.service */ "./src/app/service/google-o-auth.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/AnnouncementEntry.model */ "./src/app/model/AnnouncementEntry.model.ts");
/* harmony import */ var _utils_entries_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/entries.util */ "./src/app/utils/entries.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnnouncementsService = /** @class */ (function () {
    function AnnouncementsService(googleSheetService, googleOAuthService) {
        this.googleSheetService = googleSheetService;
        this.googleOAuthService = googleOAuthService;
        this.sheetname = "announcements";
    }
    AnnouncementsService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    AnnouncementsService.prototype.getLatestEntries = function (limit) {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.getSheet().subscribe(function (response) {
                var latestEntries = Object(_utils_entries_util__WEBPACK_IMPORTED_MODULE_5__["ExtractTopK"])(response.values, limit, _model_AnnouncementEntry_model__WEBPACK_IMPORTED_MODULE_4__["AnnouncementEntry"].FromSheet);
                observer.next(latestEntries);
                observer.complete();
            });
        });
    };
    AnnouncementsService.prototype.multiAppendSheet = function (announcements) {
        return this.googleSheetService.append(this.sheetname, announcements.map(function (anno) { return anno.toSheet(); }), this.googleOAuthService.getAccessToken());
    };
    AnnouncementsService.prototype.appendSheet = function (announcement) {
        return this.googleSheetService.append(this.sheetname, [announcement.toSheet()], this.googleOAuthService.getAccessToken());
    };
    AnnouncementsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"],
            _google_o_auth_service__WEBPACK_IMPORTED_MODULE_2__["GoogleOAuthService"]])
    ], AnnouncementsService);
    return AnnouncementsService;
}());



/***/ }),

/***/ "./src/app/service/camper-info.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/camper-info.service.ts ***!
  \************************************************/
/*! exports provided: CamperInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamperInfoService", function() { return CamperInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CamperInfoService = /** @class */ (function () {
    function CamperInfoService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "camperInfo";
    }
    CamperInfoService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    CamperInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], CamperInfoService);
    return CamperInfoService;
}());



/***/ }),

/***/ "./src/app/service/feedback.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/feedback.service.ts ***!
  \*********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = /** @class */ (function () {
    function FeedbackService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "feedback";
    }
    FeedbackService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    FeedbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/service/google-o-auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/google-o-auth.service.ts ***!
  \**************************************************/
/*! exports provided: GoogleOAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleOAuthService", function() { return GoogleOAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleOAuthService = /** @class */ (function () {
    function GoogleOAuthService(http) {
        this.http = http;
        this.endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        this.clientId = "947394714759-dfj9erkpjkc7ovptjs177gmlpfb0nb1d.apps.googleusercontent.com";
        this.redirectUri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].redirectUri;
        this.responseType = "token";
        this.scopes = Array.prototype.join.call([
            "https://www.googleapis.com/auth/spreadsheets"
        ], " ");
        this.apiEndPoint = this.endpoint + "?" + Array.prototype.join.call([
            "scope=" + this.scopes,
            "response_type=" + this.responseType,
            "redirect_uri=" + this.redirectUri,
            "client_id=" + this.clientId
        ], "&");
    }
    GoogleOAuthService.prototype.getAuthUrl = function () {
        return this.apiEndPoint;
    };
    GoogleOAuthService.prototype.getAccessToken = function () {
        return localStorage.getItem("access_token");
    };
    GoogleOAuthService.prototype.hasOAuth = function () {
        return localStorage.getItem("access_token") != null &&
            localStorage.getItem("expires_in") != null &&
            new Date(localStorage.getItem("expires_in")).getTime() - new Date().getTime() > 0;
    };
    GoogleOAuthService.prototype.validateOAuth = function (access_token) {
        var url = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" + access_token;
        return this.http.get(url);
    };
    GoogleOAuthService.prototype.isValidAccessToken = function (params) {
        return (params != null &&
            params.access_token != null &&
            params.expires_in != null &&
            params.token_type != null);
    };
    GoogleOAuthService.prototype.saveOAuth = function (params) {
        console.log("Saving OAuth");
        var now = new Date();
        now.setSeconds(+now.getSeconds() + +params.expires_in);
        localStorage.setItem("access_token", params.access_token);
        localStorage.setItem("token_type", params.token_type);
        localStorage.setItem("expires_in", now.toString());
    };
    GoogleOAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleOAuthService);
    return GoogleOAuthService;
}());



/***/ }),

/***/ "./src/app/service/googlesheet.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/googlesheet.service.ts ***!
  \************************************************/
/*! exports provided: GooglesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglesheetService", function() { return GooglesheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglesheetService = /** @class */ (function () {
    function GooglesheetService(http) {
        this.http = http;
        this.API_KEY = "AIzaSyAuPPsTAsNyQc4UiByhjvP4kGc_chB0DqA";
        this.SHEET_ID = "1CaSxTF0GTyjppwlmiuCN36dYt_tjw31E8zYfLJh4grM";
    }
    GooglesheetService.prototype.load = function (sheetname) {
        var url = "https://sheets.googleapis.com/v4/spreadsheets/" + this.SHEET_ID + "/values/" + sheetname + "?key=" + this.API_KEY;
        return this.http.get(url);
    };
    GooglesheetService.prototype.append = function (sheetname, values, access_token) {
        var requestBody = { "values": values };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        });
        var url = "https://sheets.googleapis.com/v4/spreadsheets/"
            + this.SHEET_ID
            + "/values/"
            + sheetname
            + ":append"
            + "?valueInputOption=USER_ENTERED";
        console.log(url, requestBody, headers);
        return this.http.post(url, requestBody, { headers: headers });
    };
    GooglesheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GooglesheetService);
    return GooglesheetService;
}());



/***/ }),

/***/ "./src/app/service/schedule.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/schedule.service.ts ***!
  \*********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _utils_entries_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/entries.util */ "./src/app/utils/entries.util.ts");
/* harmony import */ var _model_ScheduleEntry_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ScheduleEntry.model */ "./src/app/model/ScheduleEntry.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleService = /** @class */ (function () {
    function ScheduleService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "schedule";
    }
    ScheduleService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    ScheduleService.prototype.getLatestEntries = function (limit) {
        var _this = this;
        if (limit === void 0) { limit = 0; }
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.getSheet().subscribe(function (response) {
                var latestEntries = Object(_utils_entries_util__WEBPACK_IMPORTED_MODULE_3__["ExtractTopK"])(response.values, limit, _model_ScheduleEntry_model__WEBPACK_IMPORTED_MODULE_4__["ScheduleEntry"].FromSheet);
                observer.next(latestEntries);
                observer.complete();
            });
        });
    };
    ScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "./src/app/service/testimony.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/testimony.service.ts ***!
  \**********************************************/
/*! exports provided: TestimonyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonyService", function() { return TestimonyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _googlesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlesheet.service */ "./src/app/service/googlesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonyService = /** @class */ (function () {
    function TestimonyService(googleSheetService) {
        this.googleSheetService = googleSheetService;
        this.sheetname = "testimony";
    }
    TestimonyService.prototype.getSheet = function () {
        return this.googleSheetService.load(this.sheetname);
    };
    TestimonyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_googlesheet_service__WEBPACK_IMPORTED_MODULE_1__["GooglesheetService"]])
    ], TestimonyService);
    return TestimonyService;
}());



/***/ }),

/***/ "./src/app/utils/campInfo.util.ts":
/*!****************************************!*\
  !*** ./src/app/utils/campInfo.util.ts ***!
  \****************************************/
/*! exports provided: DAY1, CAMP_DAYS, CAMP_MONTH, CAMP_YEAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY1", function() { return DAY1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMP_DAYS", function() { return CAMP_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMP_MONTH", function() { return CAMP_MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMP_YEAR", function() { return CAMP_YEAR; });
var DAY1 = new Date(2018, 6, 20);
var CAMP_DAYS = [0, 20, 21, 22]; // 1 based index
var CAMP_MONTH = 6;
var CAMP_YEAR = 2018;


/***/ }),

/***/ "./src/app/utils/entries.util.ts":
/*!***************************************!*\
  !*** ./src/app/utils/entries.util.ts ***!
  \***************************************/
/*! exports provided: ExtractTopK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractTopK", function() { return ExtractTopK; });
function ExtractTopK(entries, k, fromSheet) {
    if (k === void 0) { k = 0; }
    var latestEntries = [];
    for (var i = entries.length - 1; i > 0; i--) {
        var entry = fromSheet(entries[i]);
        if (latestEntries[entry.getId()] == null) {
            latestEntries[entry.getId()] = entry;
        }
    }
    return latestEntries
        .filter(function (entry) { return entry != null && !entry.isDeleted(); })
        .slice(-k)
        .reverse();
}


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
    redirectUri: "http://localhost:4201/admin/redirect"
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

module.exports = __webpack_require__(/*! /Users/jerry/forked/forked/hopeuni-camp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map