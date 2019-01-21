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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n    font-size: 25px;\n    padding: 50px;\n}\n\n.schedule-button  {\n    display: inline-block;\n    box-sizing: border-box;\n    border: none;\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: #ffe578;\n    color: #ffffff;\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: center;\n    transition: background 200ms ease-in-out, \n                -webkit-transform 150ms ease;\n    transition: background 200ms ease-in-out, \n                transform 150ms ease;\n    transition: background 200ms ease-in-out, \n                transform 150ms ease, \n                -webkit-transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    outline: none;\n}\n\n.schedule-button:hover { background: #e2ca6b;}\n\n.active\n{\n    background: #e2ca6b;\n    outline-offset: -4px;\n}\n\n.schedule-button:active {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99);\n}\n\n.main {\n    margin-top: 100px;\n    text-align: center;\n}\n\n.schedule-button-container {\n    padding-top: 100px;\n}\n\n.lemonicon-container {\nposition: absolute;\ntop: -9px;\nz-index: -99;\npadding: 35px;\n}\n\n#lemonicon {\n    height: 110px;\n    width: 150px ;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25COzZDQUNpQztJQURqQztxQ0FDaUM7SUFEakM7OzZDQUNpQztJQUNqQyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGNBQWM7Q0FDakI7O0FBRUQseUJBQXlCLG9CQUFvQixDQUFDOztBQUM5Qzs7SUFFSSxvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7QUFDQSxtQkFBbUI7QUFDbkIsVUFBVTtBQUNWLGFBQWE7QUFDYixjQUFjO0NBQ2I7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uc2NoZWR1bGUtYnV0dG9uICB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmU1Nzg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcyBlYXNlLWluLW91dCwgXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDE1MG1zIGVhc2U7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2NoZWR1bGUtYnV0dG9uOmhvdmVyIHsgYmFja2dyb3VuZDogI2UyY2E2Yjt9XG4uYWN0aXZlXG57XG4gICAgYmFja2dyb3VuZDogI2UyY2E2YjtcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbn1cblxuLnNjaGVkdWxlLWJ1dHRvbjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG59XG5cbi5tYWluIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zY2hlZHVsZS1idXR0b24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG5cbi5sZW1vbmljb24tY29udGFpbmVyIHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogLTlweDtcbnotaW5kZXg6IC05OTtcbnBhZGRpbmc6IDM1cHg7XG59XG5cbiNsZW1vbmljb24ge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDE1MHB4IDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"head\"> LEMONOA \n                <div class=\"lemonicon-container\">\n                                <img id=\"lemonicon\" src=\"../assets/lemon.png\">\n                        </div>\n</div>\n\n<div class=\"main\">\n        <div class=\"story\"> <h2> Challenging, super fun, and satisfying pilates </h2> </div>\n        <div class=\"schedule-button-container\">\n            <button class=\"schedule-button\" [class.active]=\"scheduleClicked\" (click)=\"onScheduleClick()\"> Do Pilates! </button>\n        </div>\n</div>\n<app-map *ngIf=\"scheduleClicked\"></app-map>\n<app-schedule-form *ngIf=\"scheduleClicked\"></app-schedule-form>\n<app-calendar></app-calendar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data-provider.service */ "./src/app/services/data-provider.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(slotsService) {
        this.slotsService = slotsService;
        this.title = 'lemonoa';
        this.scheduleClicked = false;
    }
    AppComponent.prototype.onScheduleClick = function () {
        console.log(this.scheduleClicked);
        this.scheduleClicked = !this.scheduleClicked;
        this.slotsService.getSlots();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_provider_service__WEBPACK_IMPORTED_MODULE_2__["SlotsService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components//calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components//map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/schedule-form/schedule-form.component */ "./src/app/components/schedule-form/schedule-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data-provider.service */ "./src/app/services/data-provider.service.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                _components_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [_services_data_provider_service__WEBPACK_IMPORTED_MODULE_12__["SlotsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calendar/calendar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n</p>"

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.viewDate = new Date();
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/components/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    position: absolute;\n    left: 50%;\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n    <div #gmap style=\"width:600px;height:300px\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/// <reference types="@types/googlemaps" />


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(32.059568, 34.770767),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(32.059568, 34.770767),
            map: this.map,
            title: 'Lemonoa'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapComponent.prototype, "gmapElement", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/schedule-form/schedule-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/schedule-form/schedule-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    outline: none;\n    max-width: 200px;\n    max-height: 25px;\n}\n\n.checkbox:checked{\n    content: '\\f10c';\n    font: 1.5em 'FontAwesome';\n}\n\n.personal-info {\n    display: inline-block;\n    padding-left: 30%;\n    padding-top: 50px;\n}\n\n.form-group {\n    position: relative;\n    max-width: 200px;\n}\n\n.submit-button {\n    display: inline-block;\n    position: relative;\n    padding-left: 50px;\n}\n\nbutton {\n    position: inline-block;\n    width: 100px;   \n    background: #FFFF;\n    color: #000\n}\n\n#form-sessions {\n    max-width: 300px;\n    position: relative;\n    display: inline-block;\n    padding-left: 100px;\n}\n\n#session-box:hover {\nopacity: 0.6;\n/* border: 1px solid #e3e3e3; */\nborder-radius: 5px;\n}\n\n#session-box {\n    position: relative;\n    width: 200px;\n    max-height: 30px;\n}\n\n#session-box::after {\n    position: absolute;\n    content: '';\n    top:0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    background-color: rgb(252, 238, 112);\n    -webkit-transform-origin:left;\n            transform-origin:left;\n    transition:width 0.20s ease;\n    z-index:-1;\n  }\n\n#session-box:hover::after {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1mb3JtL3NjaGVkdWxlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztDQUNkOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsb0JBQW9CO0NBQ3ZCOztBQUVEO0FBQ0EsYUFBYTtBQUNiLGdDQUFnQztBQUNoQyxtQkFBbUI7Q0FDbEI7O0FBR0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixXQUFXO0dBQ1o7O0FBRUQ7SUFDRSxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NjaGVkdWxlLWZvcm0vc2NoZWR1bGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZHtcbiAgICBjb250ZW50OiAnXFxmMTBjJztcbiAgICBmb250OiAxLjVlbSAnRm9udEF3ZXNvbWUnO1xufVxuXG4ucGVyc29uYWwtaW5mbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDBweDsgICBcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRjtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4jZm9ybS1zZXNzaW9ucyB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG5cbiNzZXNzaW9uLWJveDpob3ZlciB7XG5vcGFjaXR5OiAwLjY7XG4vKiBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzOyAqL1xuYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbiNzZXNzaW9uLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuXG4jc2Vzc2lvbi1ib3g6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgdG9wOjA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjM4LCAxMTIpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46bGVmdDtcbiAgICB0cmFuc2l0aW9uOndpZHRoIDAuMjBzIGVhc2U7XG4gICAgei1pbmRleDotMTtcbiAgfVxuICBcbiAgI3Nlc3Npb24tYm94OmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/schedule-form/schedule-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/schedule-form/schedule-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"personal-info\">\n    <div class=\"form-group\">\n        <label>Full Name</label>\n        <input type=\"text\" formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\" />\n        <div *ngIf=\"submitted && f['fullName'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['fullName'].errors.required\">:(</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f['email'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['email'].errors.required\">:(</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n        <div *ngIf=\"submitted && f['phone'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['phone'].errors.required\">:(</div>\n        </div>\n    </div>\n  </div>\n    <div id=\"form-sessions\">\n    <label id=\"session-box\" formArrayName=\"availableSessions\" *ngFor=\"let session of sessions; let i = index\" [ngClass]=\"{ 'is-invalid': submitted && f.availableSessions.errors }\">\n        <input class=\"checkbox\" type=\"checkbox\" [formControlName]=\"i\">\n        {{session['name']}}\n        <div id=\"session-option\">\n   \n        </div>\n    </label>\n  </div>\n  <div class=\"submit-button\">\n      <button>Schedule</button>\n  </div>\n\n  </form>\n    "

/***/ }),

/***/ "./src/app/components/schedule-form/schedule-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/schedule-form/schedule-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: ScheduleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFormComponent", function() { return ScheduleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ScheduleFormComponent = /** @class */ (function () {
    function ScheduleFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.JSON = JSON;
        this.sessions = [
            { id: 354252454, name: 'Tuesday 18:00' },
            { id: 425245245, name: 'Tuesday 19:00' },
            { id: 134134134, name: 'Wednesday: 17:00' },
            { id: 234242344, name: 'Thursday 17:00' }
        ];
    }
    ScheduleFormComponent.prototype.ngOnInit = function () {
        var sessions = this.sessions.map(function (s) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false); });
        // sessions[0].setValue(true); // Set the first checkbox to true (checked)
        this.registerForm = this.formBuilder.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
            availableSessions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"](sessions)
        });
    };
    Object.defineProperty(ScheduleFormComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ScheduleFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var sessionScheduled = this.registerForm.value.availableSessions
            .map(function (v, i) { return v ? _this.sessions[i].id : null; })
            .filter(function (v) { return v !== null; });
        if (this.registerForm.invalid) {
            return;
        }
        else {
            console.log(sessionScheduled, this.f['email'].value, this.f['fullName'].value, this.f['phone'].value);
        }
    };
    ScheduleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-form',
            template: __webpack_require__(/*! ./schedule-form.component.html */ "./src/app/components/schedule-form/schedule-form.component.html"),
            styles: [__webpack_require__(/*! ./schedule-form.component.css */ "./src/app/components/schedule-form/schedule-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ScheduleFormComponent);
    return ScheduleFormComponent;
}());



/***/ }),

/***/ "./src/app/services/data-provider.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/data-provider.service.ts ***!
  \***************************************************/
/*! exports provided: SlotsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotsService", function() { return SlotsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SlotsService = /** @class */ (function () {
    function SlotsService(http) {
        this.http = http;
        this.baseUrl = '/api/v1/slots';
    }
    SlotsService.prototype.getSlots = function () {
        console.log('hi');
        return this.http.get(this.baseUrl);
    };
    SlotsService.prototype.scheduleSlot = function () {
        console.log(this.http.put(this.baseUrl, { 'fullName': 'Royzipuff', 'email': 'royzipuff@shtudel', 'phone': '0545124566', 'quantity': '1' }));
    };
    SlotsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SlotsService);
    return SlotsService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/royberkowitz/Documents/lemonoa/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map