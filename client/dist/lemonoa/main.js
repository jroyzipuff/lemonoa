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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'lemonoa';
        this.scheduleClicked = false;
    }
    AppComponent.prototype.onScheduleClick = function () {
        console.log(this.scheduleClicked);
        this.scheduleClicked = !this.scheduleClicked;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule-form/schedule-form.component */ "./src/app/schedule-form/schedule-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                _schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n</p>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
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
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    position: absolute;\n    left: 50%;\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">\n    <div #gmap style=\"width:600px;height:300px\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
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
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/schedule-form/schedule-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/schedule-form/schedule-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    outline: none;\n    max-width: 200px;\n    max-height: 25px;\n}\n\n.checkbox:checked{\n    content: '\\f10c';\n    font: 1.5em 'FontAwesome';\n}\n\n.personal-info {\n    display: inline-block;\n    padding-left: 30%;\n    padding-top: 50px;\n}\n\n.form-group {\n    position: relative;\n    max-width: 200px;\n}\n\n.submit-button {\n    display: inline-block;\n    position: relative;\n    padding-left: 50px;\n}\n\nbutton {\n    position: inline-block;\n    width: 100px;   \n    background: #FFFF;\n    color: #000\n}\n\n#form-sessions {\n    max-width: 300px;\n    position: relative;\n    display: inline-block;\n    padding-left: 100px;\n}\n\n#session-box:hover {\nopacity: 0.6;\n/* border: 1px solid #e3e3e3; */\nborder-radius: 5px;\n}\n\n#session-box {\n    position: relative;\n    width: 200px;\n    max-height: 30px;\n}\n\n#session-box::after {\n    position: absolute;\n    content: '';\n    top:0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    background-color: rgb(252, 238, 112);\n    -webkit-transform-origin:left;\n            transform-origin:left;\n    transition:width 0.20s ease;\n    z-index:-1;\n  }\n\n#session-box:hover::after {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUtZm9ybS9zY2hlZHVsZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUN2Qjs7QUFFRDtBQUNBLGFBQWE7QUFDYixnQ0FBZ0M7QUFDaEMsbUJBQW1CO0NBQ2xCOztBQUdEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztHQUNaOztBQUVEO0lBQ0UsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGUtZm9ybS9zY2hlZHVsZS1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDI1cHg7XG59XG5cbi5jaGVja2JveDpjaGVja2Vke1xuICAgIGNvbnRlbnQ6ICdcXGYxMGMnO1xuICAgIGZvbnQ6IDEuNWVtICdGb250QXdlc29tZSc7XG59XG5cbi5wZXJzb25hbC1pbmZvIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG5idXR0b24ge1xuICAgIHBvc2l0aW9uOiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMHB4OyAgIFxuICAgIGJhY2tncm91bmQ6ICNGRkZGO1xuICAgIGNvbG9yOiAjMDAwXG59XG5cbiNmb3JtLXNlc3Npb25zIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cblxuI3Nlc3Npb24tYm94OmhvdmVyIHtcbm9wYWNpdHk6IDAuNjtcbi8qIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7ICovXG5ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuI3Nlc3Npb24tYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwcHg7XG59XG5cbiNzZXNzaW9uLWJveDo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICB0b3A6MDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzgsIDExMik7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjpsZWZ0O1xuICAgIHRyYW5zaXRpb246d2lkdGggMC4yMHMgZWFzZTtcbiAgICB6LWluZGV4Oi0xO1xuICB9XG4gIFxuICAjc2Vzc2lvbi1ib3g6aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/schedule-form/schedule-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/schedule-form/schedule-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"personal-info\">\n    <div class=\"form-group\">\n        <label>Full Name</label>\n        <input type=\"text\" formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\" />\n        <div *ngIf=\"submitted && f['fullName'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['fullName'].errors.required\">:(</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n        <div *ngIf=\"submitted && f['email'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['email'].errors.required\">:(</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Phone</label>\n        <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n        <div *ngIf=\"submitted && f['phone'].errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f['phone'].errors.required\">:(</div>\n        </div>\n    </div>\n  </div>\n    <div id=\"form-sessions\">\n    <label id=\"session-box\" formArrayName=\"availableSessions\" *ngFor=\"let session of sessions; let i = index\" [ngClass]=\"{ 'is-invalid': submitted && f.availableSessions.errors }\">\n        <input class=\"checkbox\" type=\"checkbox\" [formControlName]=\"i\">\n        {{session['name']}}\n        <div id=\"session-option\">\n   \n        </div>\n    </label>\n  </div>\n  <div class=\"submit-button\">\n      <button>Schedule</button>\n  </div>\n\n  </form>\n    "

/***/ }),

/***/ "./src/app/schedule-form/schedule-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/schedule-form/schedule-form.component.ts ***!
  \**********************************************************/
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
            template: __webpack_require__(/*! ./schedule-form.component.html */ "./src/app/schedule-form/schedule-form.component.html"),
            styles: [__webpack_require__(/*! ./schedule-form.component.css */ "./src/app/schedule-form/schedule-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ScheduleFormComponent);
    return ScheduleFormComponent;
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

module.exports = __webpack_require__(/*! /Users/guyserfaty/lemonoa/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map