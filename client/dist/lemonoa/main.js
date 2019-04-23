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

module.exports = ".head {\n    font-size: 25px;\n    padding: 10px;\n}\n\n@font-face {\n    font-family: bamboobrisk;\n    src: url(/assets/Bamboo_Brisk.otf) format(\"opentype\");\n  }\n\n.story {\n    font-family:'bamboobrisk', sans-serif; \n}\n\n.head h2{\n    left: 100px;\n}\n\n.fuocoicon-container img {\n    width: 100px;\n}\n\n#info-container {\n    position: absolute;\n    right: 30px;\n    top: 0px;\n}\n\n.schedule-button  {\n    display: inline-block;\n    box-sizing: border-box;\n    border: none;\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    border: 1px solid black;\n    background: #fbfaea; \n    font-size: 1rem;\n    cursor: pointer;\n    text-align: center;\n    transition: background 200ms ease-in-out, \n                -webkit-transform 150ms ease;\n    transition: background 200ms ease-in-out, \n                transform 150ms ease;\n    transition: background 200ms ease-in-out, \n                transform 150ms ease, \n                -webkit-transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    outline: none;\n}\n\n.schedule-button:hover { background: #e2ca6b;}\n\n.active\n{\n    background: #e2ca6b;\n    outline-offset: -4px;\n}\n\n.schedule-button:active {\n    -webkit-transform: scale(0.99);\n            transform: scale(0.99);\n}\n\n.main {\n    text-align: center;\n}\n\n.schedule-button-container {\n    padding-top: 40px;\n}\n\n#icon {\n    position: relative;\n    width: 140px;\n    left: 20px;\n}\n\n.locicon {\n    max-width: 23px;\n}\n\n.mailicon {\n    max-width: 20px;\n}\n\n.instaicon {\n    max-width: 20px;\n}\n\n.info-text {\n    font-size: 15px;\n    bottom: 5px;\n    position: relative;\n    font-family: 'Indie Flower', sans-serif;\n}\n\n.mail-icon-container {\n    position: relative;\n    top: 20px;\n    right: 30px;\n}\n\n.loc-icon-container {\n    position: relative;\n    top: 20px;\n    right: 32px;\n}\n\n.insta-icon-container {\n    position: relative;\n    top: 20px;\n    right: 30px;\n}\n\n#insta-info-container {\n    position: relative;\n    bottom: 30px;\n}\n\n#mail-info-container {\n    position: relative;\n    bottom: 15px;\n}\n\n#fuoco {\n    position: relative;\n    left: 60px;\n}\n\n#takes-a-minute {\n    position: relative;\n    top: 5px;\n    font-size: 14px;\n}\n\n@media only screen and (max-width: 800px) {\n    #mail-info-container {\n        position: relative;\n    }\n\n    #info-container {\n        right: 15px;\n    }\n    \n    .locicon {\n        max-width: 18px;\n        margin-top: 10px;\n    }\n    \n    .mailicon {\n        max-width: 15px;\n    }\n\n    .instaicon {\n        max-width: 15px;\n    }\n\n    .info-text {\n        font-size: 12px;\n    }\n\n    #icon {\n        position: relative;\n        width: 80px;\n        left: 5px;\n        padding-bottom: 10px;\n    }\n\n    .main {\n        padding: 20px;\n    }\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUF5QjtJQUN6QixzREFBc0Q7R0FDdkQ7O0FBRUg7SUFDSSxzQ0FBc0M7Q0FDekM7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixTQUFTO0NBQ1o7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25COzZDQUNpQztJQURqQztxQ0FDaUM7SUFEakM7OzZDQUNpQztJQUNqQyx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGNBQWM7Q0FDakI7O0FBRUQseUJBQXlCLG9CQUFvQixDQUFDOztBQUM5Qzs7SUFFSSxvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztDQUNkOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUdEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsd0NBQXdDO0NBQzNDOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJO1FBQ0ksbUJBQW1CO0tBQ3RCOztJQUVEO1FBQ0ksWUFBWTtLQUNmOztJQUVEO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtLQUNwQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osVUFBVTtRQUNWLHFCQUFxQjtLQUN4Qjs7SUFFRDtRQUNJLGNBQWM7S0FDakI7O0dBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGJhbWJvb2JyaXNrO1xuICAgIHNyYzogdXJsKC9hc3NldHMvQmFtYm9vX0JyaXNrLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG4gIH1cblxuLnN0b3J5IHtcbiAgICBmb250LWZhbWlseTonYmFtYm9vYnJpc2snLCBzYW5zLXNlcmlmOyBcbn1cblxuLmhlYWQgaDJ7XG4gICAgbGVmdDogMTAwcHg7XG59XG5cbi5mdW9jb2ljb24tY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4jaW5mby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLnNjaGVkdWxlLWJ1dHRvbiAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYWVhOyBcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0LCBcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zY2hlZHVsZS1idXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZTJjYTZiO31cbi5hY3RpdmVcbntcbiAgICBiYWNrZ3JvdW5kOiAjZTJjYTZiO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtNHB4O1xufVxuXG4uc2NoZWR1bGUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbn1cblxuLm1haW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjaGVkdWxlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4jaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4ubG9jaWNvbiB7XG4gICAgbWF4LXdpZHRoOiAyM3B4O1xufVxuXG4ubWFpbGljb24ge1xuICAgIG1heC13aWR0aDogMjBweDtcbn1cblxuLmluc3RhaWNvbiB7XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xufVxuXG5cbi5pbmZvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3R0b206IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbC1pY29uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMzBweDtcbn1cblxuLmxvYy1pY29uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMzJweDtcbn1cblxuLmluc3RhLWljb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xufVxuXG4jaW5zdGEtaW5mby1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDMwcHg7XG59XG5cbiNtYWlsLWluZm8tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAxNXB4O1xufVxuXG4jZnVvY28ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA2MHB4O1xufVxuXG4jdGFrZXMtYS1taW51dGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAjbWFpbC1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAjaW5mby1jb250YWluZXIge1xuICAgICAgICByaWdodDogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLmxvY2ljb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5tYWlsaWNvbiB7XG4gICAgICAgIG1heC13aWR0aDogMTVweDtcbiAgICB9XG5cbiAgICAuaW5zdGFpY29uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xuICAgIH1cblxuICAgIC5pbmZvLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuXG4gICAgI2ljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"head\">\n        <div class=\"fuocoicon-container\">\n                <img id=\"icon\" src=\"../assets/afuocologo.png\">\n        </div>\n        <div id=\"info-container\"> \n                <div id=\"loc-info-container\">\n                        <div class=\"loc-icon-container\"><img class=\"locicon\" src=\"../assets/locblack.png\"></div>\n                        <div class=\"info-text\"> Hertzel - Rothschild Area, Tel Aviv</div>\n                </div>\n                <div id=\"mail-info-container\">\n                        <div class=\"mail-icon-container\"><img class=\"mailicon\" src=\"../assets/gmailblack.png\"> </div>\n                        <div class=\"info-text\"> Pilatesafuoco@gmail.com </div>\n                </div>\n                <div id=\"insta-info-container\">\n                        <div class=\"insta-icon-container\"><img class=\"instaicon\" src=\"../assets/insta.png\"> </div>\n                        <div class=\"info-text\"> Pilatesafuoco </div>\n                </div>\n        </div>\n</div>\n\n<div class=\"main\">\n        <div class=\"story\"> <h2> Challenging, super fun, and satisfying pilates </h2> </div>\n        <div class=\"schedule-button-container\">\n            <button class=\"schedule-button\" [class.active]=\"formOpen\" (click)=\"onRequestFormClick()\"> {{scheduleButtonText}} </button>\n            <div id=\"takes-a-minute\" *ngIf=\"!formOpen && scheduleButtonText == scheduleClassText\"> Takes less than a minute</div>\n        </div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{'fullScreenBackdrop':false, 'backdropBackgroundColour': 'rgba(0,0,0,0)'}\"></ngx-loading>\n<app-schedule-form  [slots]=\"slots\" (submitPayload)=\"scheduleSlot($event)\" *ngIf=\"formOpen && scheduled==false\"></app-schedule-form>\n<app-summary-page *ngIf=\"scheduled\" [summaryData]=\"summaryData\" > </app-summary-page>\n\n<router-outlet></router-outlet>"

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
        this.formOpen = false;
        this.scheduled = false;
        this.scheduleClassText = 'Schedule Class';
        this.scheduleAnotherClassText = 'Schedule Another Class';
        this.scheduleButtonText = this.scheduleClassText;
        this.loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slotsService.availableSlots.subscribe(function (slots) {
            _this.slots = slots;
        });
    };
    AppComponent.prototype.onRequestFormClick = function () {
        if (this.scheduled) {
            this.scheduled = !this.scheduled;
            this.ngOnInit();
            this.formOpen = !this.formOpen;
        }
        if (!this.formOpen) {
            if (!this.slotsService.availableSlots.value.toString()) {
                this.slotsService.getSlots();
            }
        }
        this.formOpen = !this.formOpen;
    };
    AppComponent.prototype.scheduleSlot = function (data) {
        this.slotsService.scheduleSlot(data);
        this.scheduled = true;
        this.summaryData = data;
        this.scheduleButtonText = this.scheduleAnotherClassText;
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
/* harmony import */ var _components_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/schedule-form/schedule-form.component */ "./src/app/components/schedule-form/schedule-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data-provider.service */ "./src/app/services/data-provider.service.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/summary-page/summary-page.component */ "./src/app/components/summary-page/summary-page.component.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/local-storage.service */ "./src/app/services/local-storage.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_7__["ScheduleFormComponent"],
                _components_summary_page_summary_page_component__WEBPACK_IMPORTED_MODULE_14__["SummaryPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_12__["SlickCarouselModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_13__["DeviceDetectorModule"].forRoot(),
                ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingModule"].forRoot({}),
                angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [_services_data_provider_service__WEBPACK_IMPORTED_MODULE_10__["SlotsService"], _services_local_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/schedule-form/schedule-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/schedule-form/schedule-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n    outline: none;\n    max-width: 200px;\n    max-height: 25px;\n}\n\n.form-control:focus {\n  border-color: inherit;\n  box-shadow: none;\n}\n\n.form-control {\nbackground: inherit;\nborder-radius: 1px;\nborder-bottom-color: #e2ca6b;\nborder-top: none;\nborder-left: none;\nborder-right: none;\n}\n\np {\n    font-size: 10px;\n}\n\n#email-guide {\n  font-size: 11px;\n}\n\n#schedule-form {\n    max-height: 500px;\n}\n\n#hours {\n border: 1px solid #e3e3e3;\n margin: auto; \n}\n\n#hours-container {\n  max-height: 90%;\n  position: relative;\n  overflow-y: auto;\n}\n\n#slot-header {\n  font-size: 17px;\n  cursor: initial;\n}\n\n#hours:hover {\n  background-color: rgb(241, 236, 189);\n }\n\n.attendees-header {\n   position: relative;\n   top: 2px;\n   font-size: 11px;\n }\n\n.form-group {\n    position: relative;\n    max-width: 200px;\n}\n\n.attendee-ico {\n    max-width: 30px;\n    margin: auto;\n}\n\n.submit-button {\n  box-sizing: border-box;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 0;\n  text-decoration: none;\n  color: black;\n  background: #fbfaea; \n  border: 1px solid black;\n  outline: none;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  /* top: 10px; */\n  max-width: 300px;\n  margin: auto;\n  margin-bottom: 10px;\n}\n\n#request-class {\n  font-size: 13px;\n  box-sizing: border-box;\n  margin: auto;\n  position: relative;\n  text-align: center;\n}\n\n.invalid {\n  color: #c9c9c9;\n  border: 1px solid #c9c9c9;\n  cursor: default;\n}\n\n#session-grid {\n    max-width:  600px;\n    margin: 0 5px;\n}\n\n.form {\n    display: inline-flex;\n    width: 100%;\n    padding: 25px 0px 20px 0px;\n    justify-content: center;\n    font-family: 'Indie Flower', sans-serif;\n}\n\n.personal-info {\n  margin: 0 25px;\n  font-size: 18px;\n}\n\n.session-box:hover {\nopacity: 1;\nborder-radius: 5px;\n}\n\n.session-box {\n    position: relative;\n    width: 100px;\n    height: 250px;\n    border: 1px solid white;\n    margin-top: 5px;\n    text-align: center;\n    cursor: pointer;\n    box-shadow: 0px 1px 1px 1px #e3e3e3;\n    font-size: 18px;\n}\n\n.prev-slide:hover {\n    background-position: 0px -53px;\n  }\n\n.next-slide:hover {\n    background-position: -24px -53px;\n  }\n\n.prev-slide.slick-disabled,\n.next-slide.slick-disabled {\n    pointer-events: none;\n    opacity: 0.2;\n}\n\n.slick-slider {\n    width: 600px;\n    outline: none;\n    position: relative;\n  }\n\n.slick-slide {\n      outline: none;\n      width: 800px;\n  }\n\n.active {\n    background-color: rgb(252, 238, 112);\n}\n\n@media only screen and (max-width: 800px) {\n  .form {\n    flex-direction: column;\n  }\n  .slick-slider {\n    max-width: 100%;\n  }\n  #session-grid {\n    position: initial;\n  }\n  .personal-info {\n    margin: 0 auto;\n  }\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1mb3JtL3NjaGVkdWxlLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztBQUVEO0VBQ0Usc0JBQXNCO0VBRXRCLGlCQUFpQjtDQUNsQjs7QUFFRDtBQUNBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEIsbUJBQW1CO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQzs7QUFFRDtHQUNFLG1CQUFtQjtHQUNuQixTQUFTO0dBQ1QsZ0JBQWdCO0VBQ2pCOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0NBQ2pCOztBQUdEO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsd0NBQXdDO0NBQzNDOztBQUdEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7QUFFRDtBQUNBLFdBQVc7QUFDWCxtQkFBbUI7Q0FDbEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtDQUNuQjs7QUFDQztJQUNFLCtCQUErQjtHQUNoQzs7QUFFRDtJQUNFLGlDQUFpQztHQUNsQzs7QUFFSDs7SUFFSSxxQkFBcUI7SUFDckIsYUFBYTtDQUNoQjs7QUFFQTtJQUNHLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCOztBQUdEO01BQ0ksY0FBYztNQUNkLGFBQWE7R0FDaEI7O0FBRUQ7SUFDRSxxQ0FBcUM7Q0FDeEM7O0FBR0Q7RUFDRTtJQUNFLHVCQUF1QjtHQUN4QjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLGVBQWU7R0FDaEI7Q0FDRjs7QUFFRDs7RUFFRSx5QkFBeUI7RUFDekIsVUFBVTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY2hlZHVsZS1mb3JtL3NjaGVkdWxlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjVweDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbmJhY2tncm91bmQ6IGluaGVyaXQ7XG5ib3JkZXItcmFkaXVzOiAxcHg7XG5ib3JkZXItYm90dG9tLWNvbG9yOiAjZTJjYTZiO1xuYm9yZGVyLXRvcDogbm9uZTtcbmJvcmRlci1sZWZ0OiBub25lO1xuYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbiNlbWFpbC1ndWlkZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI3NjaGVkdWxlLWZvcm0ge1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4jaG91cnMge1xuIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gbWFyZ2luOiBhdXRvOyBcbn1cblxuI2hvdXJzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4jc2xvdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuI2hvdXJzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM2LCAxODkpO1xuIH1cblxuIC5hdHRlbmRlZXMtaGVhZGVyIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHRvcDogMnB4O1xuICAgZm9udC1zaXplOiAxMXB4O1xuIH1cblxuLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uYXR0ZW5kZWUtaWNvIHtcbiAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZmJmYWVhOyBcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIHRvcDogMTBweDsgKi9cbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jcmVxdWVzdC1jbGFzcyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogI2M5YzljOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5cbiNzZXNzaW9uLWdyaWQge1xuICAgIG1heC13aWR0aDogIDYwMHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4IDBweCAyMHB4IDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIHNhbnMtc2VyaWY7XG59XG5cblxuLnBlcnNvbmFsLWluZm8ge1xuICBtYXJnaW46IDAgMjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2Vzc2lvbi1ib3g6aG92ZXIge1xub3BhY2l0eTogMTtcbmJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNlc3Npb24tYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMXB4ICNlM2UzZTM7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuICAucHJldi1zbGlkZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC01M3B4O1xuICB9XG4gICBcbiAgLm5leHQtc2xpZGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yNHB4IC01M3B4O1xuICB9XG5cbi5wcmV2LXNsaWRlLnNsaWNrLWRpc2FibGVkLFxuLm5leHQtc2xpZGUuc2xpY2stZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuMjtcbn0gICAgICAgICAgICAgICAgICAgXG5cbiAuc2xpY2stc2xpZGVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH0gIFxuXG5cbiAgLnNsaWNrLXNsaWRlIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB3aWR0aDogODAwcHg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAyMzgsIDExMik7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZm9ybSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuc2xpY2stc2xpZGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3Nlc3Npb24tZ3JpZCB7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gIH1cbiAgLnBlcnNvbmFsLWluZm8ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcbiAgbWFyZ2luOiAwOyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/schedule-form/schedule-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/schedule-form/schedule-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"form\">\n    <div class=\"personal-info\">\n        <div class=\"form-group\">\n                <label>FULL NAME *</label>\n                <input type=\"text\" formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\" />\n                <div *ngIf=\"submitted && f['fullName'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['fullName'].errors.required\"></div>\n                </div>\n        </div>\n        <div class=\"form-group\">\n                <label>PHONE *</label>\n                <input type=\"number\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\n                <div *ngIf=\"submitted && f['phone'].errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f['phone'].errors.required\"></div>\n                </div>\n        </div>\n            <div class=\"form-group\">\n                <label>EMAIL</label>\n                <label id=\"email-guide\">  &nbsp; (no spam)</label>\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\" />\n            </div>\n    </div>\n    <div id=\"session-grid\">\n                <ngx-slick-carousel class=\"carousel\" \n                #slickModal=\"slick-carousel\" \n                [config]=\"slideConfig\">\n                <div ngxSlickItem class=\"session-box\" *ngFor=\"let slot of _slots; let i = index\">\n                    <div id=\"slot-header\"><b>{{slot[0]}}</b></div>\n                    <div id=\"hours-container\">\n                        <div id=\"hours\" (click)=\"chosenHour = slotHour['start']; chosenEventId = slotHour['id']; chosenSlot = slot\" [class.active]=\"chosenHour == slotHour['start'] && chosenSlot == slot\" *ngFor=\"let slotHour of slot[1];\"> {{slotHour['start']}}</div>\n                        <div>\n                            <div class=\"attendees-header\" *ngIf=\"chosenSlot == slot\"> Participants </div>\n                            <div class=\"attendees-header\" *ngIf=\"chosenSlot == slot\"> x </div>\n                            <div id=\"attendee\" *ngFor=\"let i of [1,2,3];\" (click)=\"selectedAttendees = i\">\n                            <img class=\"attendee-ico\" *ngIf=\"chosenSlot == slot\" [src]=\"selectedAttendees >= i ? attendeeSelectedSlot : attendeeSlot\"></div>\n                        </div>\n                    </div>\n                </div> \n            </ngx-slick-carousel>\n    </div>\n</div>\n<div id=\"request-class\"> Looking for another time? Pilatesafuoco@gmail.com </div>\n    <div class=\"submit-button\" [class.invalid]=\"registerForm.status == 'INVALID' || !this.chosenSlot\" (click)=\"onSubmit()\">Confirm</div>"

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
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");





var ScheduleFormComponent = /** @class */ (function () {
    function ScheduleFormComponent(formBuilder, deviceDetectorService, storageService) {
        this.formBuilder = formBuilder;
        this.deviceDetectorService = deviceDetectorService;
        this.storageService = storageService;
        this.submitted = false;
        this.savedInfo = { 'fullName': '', 'email': '', 'phone': '' };
        this.selectedAttendees = 1;
        this.attendeeSlot = '../../../assets/attendee-ico.png';
        this.attendeeSelectedSlot = '../../../assets/attendee-ico-selected.png';
        this.slideConfig = {};
        this.slideConfigDesktop = {
            'slidesToShow': 7,
            'slidesToScroll': 7,
            'nextArrow': false,
            'prevArrow': false,
            'dots': true,
            'infinite': false
        };
        this.slideConfigMobile = {
            'slidesToShow': 3,
            'slidesToScroll': 1,
            'nextArrow': false,
            'prevArrow': false,
            'dots': true,
            'infinite': false
        };
        this._slots = [];
        this.submitPayload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slideConfig = this.deviceDetectorService.isMobile() ? this.slideConfigMobile : this.slideConfigDesktop;
    }
    Object.defineProperty(ScheduleFormComponent.prototype, "slots", {
        set: function (_slots) {
            this._slots = _slots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleFormComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    ScheduleFormComponent.prototype.ngOnInit = function () {
        var info = this.storageService.getInfo() || this.savedInfo;
        this.registerForm = this.formBuilder.group({
            fullName: [info.fullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            email: [info.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            phone: [info.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]]
        });
    };
    ScheduleFormComponent.prototype.onSubmit = function () {
        if (this.registerForm.invalid || !this.chosenSlot) {
            console.log('missing form fields');
            return;
        }
        else {
            this.submitPayload.emit({
                'id': this.chosenEventId,
                'email': this.f['email'].value,
                'fullName': this.f['fullName'].value,
                'phone': this.f['phone'].value,
                'attendees': this.selectedAttendees,
                'dateTime': [this.chosenSlot[0], this.chosenHour]
            });
        }
        this.storageService.saveInfo(this.f['fullName'].value, this.f['email'].value, this.f['phone'].value);
        this.submitted = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScheduleFormComponent.prototype, "submitPayload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], ScheduleFormComponent.prototype, "slots", null);
    ScheduleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule-form',
            template: __webpack_require__(/*! ./schedule-form.component.html */ "./src/app/components/schedule-form/schedule-form.component.html"),
            styles: [__webpack_require__(/*! ./schedule-form.component.css */ "./src/app/components/schedule-form/schedule-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"],
            _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], ScheduleFormComponent);
    return ScheduleFormComponent;
}());



/***/ }),

/***/ "./src/app/components/summary-page/summary-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/summary-page/summary-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cancellation {\n    font-size: 10px;\n}\n\n#summary-container {\n    text-align: center;\n    padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5LXBhZ2Uvc3VtbWFyeS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS1wYWdlL3N1bW1hcnktcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbmNlbGxhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4jc3VtbWFyeS1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/summary-page/summary-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/summary-page/summary-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"summary-container\">\n  <h5 id=\"summary-header\"> Hey <b>{{summaryData.fullName}},</b></h5>\n  <p> Your session is scheduled for {{summaryData.attendees}} participants,</p> <span> <b>{{summaryData.dateTime[0]}}</b> at <b>{{summaryData.dateTime[1]}}</b></span>\n  <p *ngIf=\"summaryData.email\" >Confirmation was sent to {{summaryData.email}}</p>\n  <p> See you!</p>\n  <p id=\"cancellation\">*Free cancellation up to 7 hours before the beginning of the class by email. Otherwise, the full price will be charged.</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/summary-page/summary-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/summary-page/summary-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: SummaryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageComponent", function() { return SummaryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryPageComponent = /** @class */ (function () {
    function SummaryPageComponent() {
    }
    SummaryPageComponent.prototype.ngOnInit = function () {
        console.log(this.summaryData);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SummaryPageComponent.prototype, "summaryData", void 0);
    SummaryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary-page',
            template: __webpack_require__(/*! ./summary-page.component.html */ "./src/app/components/summary-page/summary-page.component.html"),
            styles: [__webpack_require__(/*! ./summary-page.component.css */ "./src/app/components/summary-page/summary-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SummaryPageComponent);
    return SummaryPageComponent;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SlotsService = /** @class */ (function () {
    function SlotsService(http) {
        this.http = http;
        this.availableSlots = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.baseUrl = '/api/v1/slots';
    }
    SlotsService.prototype.getSlots = function () {
        var _this = this;
        return this.http.get(this.baseUrl).subscribe(function (data) {
            _this.availableSlots.next(data);
            console.log('available slots refreshed');
        });
    };
    SlotsService.prototype.scheduleSlot = function (payload) {
        var _this = this;
        return this.http.patch(this.baseUrl + '/' + payload.id, payload).subscribe(function (res) {
            console.log('slot scheduled');
            _this.getSlots();
        });
    };
    SlotsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SlotsService);
    return SlotsService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.afuocoInfoKey = 'afuocoinfo';
    }
    StorageService.prototype.saveInfo = function (fullName, email, phone) {
        var info = JSON.stringify({ 'fullName': fullName, 'email': email, 'phone': phone });
        localStorage.setItem(this.afuocoInfoKey, info);
    };
    StorageService.prototype.getInfo = function () {
        var info = localStorage.getItem(this.afuocoInfoKey);
        return JSON.parse(info);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
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