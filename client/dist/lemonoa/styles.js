(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/slick-carousel/slick/slick-theme.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n/* Slider */\n.slick-loading .slick-list {\n  background: #fff url('ajax-loader.gif') center center no-repeat; }\n/* Icons */\n@font-face {\n  font-family: \"slick\";\n  src: url('slick.eot');\n  src: url('slick.eot?#iefix') format(\"embedded-opentype\"), url('slick.woff') format(\"woff\"), url('slick.ttf') format(\"truetype\"), url('slick.svg#slick') format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n/* Arrows */\n.slick-prev,\n.slick-next {\n  position: absolute;\n  display: block;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  font-size: 0px;\n  cursor: pointer;\n  background: transparent;\n  color: transparent;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  padding: 0;\n  border: none;\n  outline: none; }\n.slick-prev:hover, .slick-prev:focus,\n  .slick-next:hover,\n  .slick-next:focus {\n    outline: none;\n    background: transparent;\n    color: transparent; }\n.slick-prev:hover:before, .slick-prev:focus:before,\n    .slick-next:hover:before,\n    .slick-next:focus:before {\n      opacity: 1; }\n.slick-prev.slick-disabled:before,\n  .slick-next.slick-disabled:before {\n    opacity: 0.25; }\n.slick-prev:before,\n  .slick-next:before {\n    font-family: \"slick\";\n    font-size: 20px;\n    line-height: 1;\n    color: white;\n    opacity: 0.75;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n.slick-prev {\n  left: -25px; }\n[dir=\"rtl\"] .slick-prev {\n    left: auto;\n    right: -25px; }\n.slick-prev:before {\n    content: \"←\"; }\n[dir=\"rtl\"] .slick-prev:before {\n      content: \"→\"; }\n.slick-next {\n  right: -25px; }\n[dir=\"rtl\"] .slick-next {\n    left: -25px;\n    right: auto; }\n.slick-next:before {\n    content: \"→\"; }\n[dir=\"rtl\"] .slick-next:before {\n      content: \"←\"; }\n/* Dots */\n.slick-dotted.slick-slider {\n  margin-bottom: 30px; }\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  list-style: none;\n  display: block;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  width: 100%; }\n.slick-dots li {\n    position: relative;\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    margin: 0 5px;\n    padding: 0;\n    cursor: pointer; }\n.slick-dots li button {\n      border: 0;\n      background: transparent;\n      display: block;\n      height: 20px;\n      width: 20px;\n      outline: none;\n      line-height: 0px;\n      font-size: 0px;\n      color: transparent;\n      padding: 5px;\n      cursor: pointer; }\n.slick-dots li button:hover, .slick-dots li button:focus {\n        outline: none; }\n.slick-dots li button:hover:before, .slick-dots li button:focus:before {\n          opacity: 1; }\n.slick-dots li button:before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        content: \"•\";\n        width: 20px;\n        height: 20px;\n        font-family: \"slick\";\n        font-size: 6px;\n        line-height: 20px;\n        text-align: center;\n        color: black;\n        opacity: 0.25;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n.slick-dots li.slick-active button:before {\n      color: black;\n      opacity: 0.75; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5zY3NzIiwiL1VzZXJzL3JveWJlcmtvd2l0ei9Eb2N1bWVudHMvbGVtb25vYS9jbGllbnQvbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDeUNqQixZQUFZO0FBR1I7RUFDSSxnRUFBMkUsRUFDOUU7QUFHTCxXQUFXO0FBRVA7RUFDSSxxQkFBb0I7RUFDcEIsc0JBaEJvQztFQWlCcEMsc0tBQWlOO0VBQ2pOLG9CQUFtQjtFQUNuQixtQkFBa0IsRUFBQTtBQUkxQixZQUFZO0FBRVo7O0VBRUksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFZO0VBQ1osWUFBVztFQUNYLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixzQ0FBcUM7RUFFckMsOEJBQTZCO0VBQzdCLFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQXFCaEI7QUF0Q0Q7OztJQW1CUSxjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLG1CQUFrQixFQUlyQjtBQXpCTDs7O01BdUJZLFdBakVjLEVBa0VqQjtBQXhCVDs7SUEyQlEsY0FwRXVCLEVBcUUxQjtBQTVCTDs7SUE4QlEscUJBbEZtQjtJQW1GbkIsZ0JBQWU7SUFDZixlQUFjO0lBQ2QsYUFuRmlCO0lBb0ZqQixjQTdFb0I7SUE4RXBCLG9DQUFtQztJQUNuQyxtQ0FBa0MsRUFDckM7QUFHTDtFQUNJLFlBQVcsRUFXZDtBRHpEQztJQ2dETSxXQUFVO0lBQ1YsYUFBWSxFQUNmO0FBTEw7SUFPUSxhQTlGc0IsRUFBQTtBRCtDMUI7TUNpRFEsYUEvRmtCLEVBQUE7QUFvRzlCO0VBQ0ksYUFBWSxFQVdmO0FEN0RDO0lDb0RNLFlBQVc7SUFDWCxZQUFXLEVBQ2Q7QUFMTDtJQU9RLGFBM0dzQixFQUFBO0FEd0QxQjtNQ3FEUSxhQTlHa0IsRUFBQTtBQW1IOUIsVUFBVTtBQUVWO0VBQ0ksb0JBQW1CLEVBQ3RCO0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFTO0VBQ1QsWUFBVyxFQWlEZDtBQXpERDtJQVVRLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsYUFBWTtJQUNaLFlBQVc7SUFDWCxjQUFhO0lBQ2IsV0FBVTtJQUNWLGdCQUFlLEVBd0NsQjtBQXhETDtNQWtCWSxVQUFTO01BQ1Qsd0JBQXVCO01BQ3ZCLGVBQWM7TUFDZCxhQUFZO01BQ1osWUFBVztNQUNYLGNBQWE7TUFDYixpQkFBZ0I7TUFDaEIsZUFBYztNQUNkLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osZ0JBQWUsRUF1QmxCO0FBbkRUO1FBOEJnQixjQUFhLEVBSWhCO0FBbENiO1VBZ0NvQixXQXBKTSxFQXFKVDtBQWpDakI7UUFvQ2dCLG1CQUFrQjtRQUNsQixPQUFNO1FBQ04sUUFBTztRQUNQLGFBOUphO1FBK0piLFlBQVc7UUFDWCxhQUFZO1FBQ1oscUJBeEtXO1FBeUtYLGVBaktJO1FBa0tKLGtCQUFpQjtRQUNqQixtQkFBa0I7UUFDbEIsYUF6S087UUEwS1AsY0FsS2U7UUFtS2Ysb0NBQW1DO1FBQ25DLG1DQUFrQyxFQUNyQztBQWxEYjtNQXFEWSxhQWhMVztNQWlMWCxjQTNLZ0IsRUE0S25CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogU2xpZGVyICovXG4uc2xpY2stbG9hZGluZyAuc2xpY2stbGlzdCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiLi9hamF4LWxvYWRlci5naWZcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7IH1cblxuLyogSWNvbnMgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJzbGlja1wiO1xuICBzcmM6IHVybChcIi4vZm9udHMvc2xpY2suZW90XCIpO1xuICBzcmM6IHVybChcIi4vZm9udHMvc2xpY2suZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi9mb250cy9zbGljay53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4vZm9udHMvc2xpY2sudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuL2ZvbnRzL3NsaWNrLnN2ZyNzbGlja1wiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG4vKiBBcnJvd3MgKi9cbi5zbGljay1wcmV2LFxuLnNsaWNrLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMHB4O1xuICBmb250LXNpemU6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lOyB9XG4gIC5zbGljay1wcmV2OmhvdmVyLCAuc2xpY2stcHJldjpmb2N1cyxcbiAgLnNsaWNrLW5leHQ6aG92ZXIsXG4gIC5zbGljay1uZXh0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgIC5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSwgLnNsaWNrLXByZXY6Zm9jdXM6YmVmb3JlLFxuICAgIC5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcbiAgICAuc2xpY2stbmV4dDpmb2N1czpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTsgfVxuICAuc2xpY2stcHJldi5zbGljay1kaXNhYmxlZDpiZWZvcmUsXG4gIC5zbGljay1uZXh0LnNsaWNrLWRpc2FibGVkOmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC4yNTsgfVxuICAuc2xpY2stcHJldjpiZWZvcmUsXG4gIC5zbGljay1uZXh0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwic2xpY2tcIjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxuXG4uc2xpY2stcHJldiB7XG4gIGxlZnQ6IC0yNXB4OyB9XG4gIFtkaXI9XCJydGxcIl0gLnNsaWNrLXByZXYge1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IC0yNXB4OyB9XG4gIC5zbGljay1wcmV2OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLihpBcIjsgfVxuICAgIFtkaXI9XCJydGxcIl0gLnNsaWNrLXByZXY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwi4oaSXCI7IH1cblxuLnNsaWNrLW5leHQge1xuICByaWdodDogLTI1cHg7IH1cbiAgW2Rpcj1cInJ0bFwiXSAuc2xpY2stbmV4dCB7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKGklwiOyB9XG4gICAgW2Rpcj1cInJ0bFwiXSAuc2xpY2stbmV4dDpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLihpBcIjsgfVxuXG4vKiBEb3RzICovXG4uc2xpY2stZG90dGVkLnNsaWNrLXNsaWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLnNsaWNrLWRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLnNsaWNrLWRvdHMgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG4gICAgICBmb250LXNpemU6IDBweDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOmhvdmVyLCAuc2xpY2stZG90cyBsaSBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAgIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpob3ZlcjpiZWZvcmUsIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpmb2N1czpiZWZvcmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7IH1cbiAgICAgIC5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgY29udGVudDogXCLigKJcIjtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwic2xpY2tcIjtcbiAgICAgICAgZm9udC1zaXplOiA2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cbiAgICAuc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBvcGFjaXR5OiAwLjc1OyB9XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vIERlZmF1bHQgVmFyaWFibGVzXG5cbi8vIFNsaWNrIGljb24gZW50aXR5IGNvZGVzIG91dHB1dHMgdGhlIGZvbGxvd2luZ1xuLy8gXCJcXDIxOTBcIiBvdXRwdXRzIGFzY2lpIGNoYXJhY3RlciBcIuKGkFwiXG4vLyBcIlxcMjE5MlwiIG91dHB1dHMgYXNjaWkgY2hhcmFjdGVyIFwi4oaSXCJcbi8vIFwiXFwyMDIyXCIgb3V0cHV0cyBhc2NpaSBjaGFyYWN0ZXIgXCLigKJcIlxuXG4kc2xpY2stZm9udC1wYXRoOiBcIi4vZm9udHMvXCIgIWRlZmF1bHQ7XG4kc2xpY2stZm9udC1mYW1pbHk6IFwic2xpY2tcIiAhZGVmYXVsdDtcbiRzbGljay1sb2FkZXItcGF0aDogXCIuL1wiICFkZWZhdWx0O1xuJHNsaWNrLWFycm93LWNvbG9yOiB3aGl0ZSAhZGVmYXVsdDtcbiRzbGljay1kb3QtY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuJHNsaWNrLWRvdC1jb2xvci1hY3RpdmU6ICRzbGljay1kb3QtY29sb3IgIWRlZmF1bHQ7XG4kc2xpY2stcHJldi1jaGFyYWN0ZXI6IFwiXFwyMTkwXCIgIWRlZmF1bHQ7XG4kc2xpY2stbmV4dC1jaGFyYWN0ZXI6IFwiXFwyMTkyXCIgIWRlZmF1bHQ7XG4kc2xpY2stZG90LWNoYXJhY3RlcjogXCJcXDIwMjJcIiAhZGVmYXVsdDtcbiRzbGljay1kb3Qtc2l6ZTogNnB4ICFkZWZhdWx0O1xuJHNsaWNrLW9wYWNpdHktZGVmYXVsdDogMC43NSAhZGVmYXVsdDtcbiRzbGljay1vcGFjaXR5LW9uLWhvdmVyOiAxICFkZWZhdWx0O1xuJHNsaWNrLW9wYWNpdHktbm90LWFjdGl2ZTogMC4yNSAhZGVmYXVsdDtcblxuQGZ1bmN0aW9uIHNsaWNrLWltYWdlLXVybCgkdXJsKSB7XG4gICAgQGlmIGZ1bmN0aW9uLWV4aXN0cyhpbWFnZS11cmwpIHtcbiAgICAgICAgQHJldHVybiBpbWFnZS11cmwoJHVybCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgICAgQHJldHVybiB1cmwoJHNsaWNrLWxvYWRlci1wYXRoICsgJHVybCk7XG4gICAgfVxufVxuXG5AZnVuY3Rpb24gc2xpY2stZm9udC11cmwoJHVybCkge1xuICAgIEBpZiBmdW5jdGlvbi1leGlzdHMoZm9udC11cmwpIHtcbiAgICAgICAgQHJldHVybiBmb250LXVybCgkdXJsKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgICBAcmV0dXJuIHVybCgkc2xpY2stZm9udC1wYXRoICsgJHVybCk7XG4gICAgfVxufVxuXG4vKiBTbGlkZXIgKi9cblxuLnNsaWNrLWxpc3Qge1xuICAgIC5zbGljay1sb2FkaW5nICYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmIHNsaWNrLWltYWdlLXVybChcImFqYXgtbG9hZGVyLmdpZlwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICB9XG59XG5cbi8qIEljb25zICovXG5AaWYgJHNsaWNrLWZvbnQtZmFtaWx5ID09IFwic2xpY2tcIiB7XG4gICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInNsaWNrXCI7XG4gICAgICAgIHNyYzogc2xpY2stZm9udC11cmwoXCJzbGljay5lb3RcIik7XG4gICAgICAgIHNyYzogc2xpY2stZm9udC11cmwoXCJzbGljay5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCBzbGljay1mb250LXVybChcInNsaWNrLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgc2xpY2stZm9udC11cmwoXCJzbGljay50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHNsaWNrLWZvbnQtdXJsKFwic2xpY2suc3ZnI3NsaWNrXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIH1cbn1cblxuLyogQXJyb3dzICovXG5cbi5zbGljay1wcmV2LFxuLnNsaWNrLW5leHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICRzbGljay1vcGFjaXR5LW9uLWhvdmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuc2xpY2stZGlzYWJsZWQ6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogJHNsaWNrLW9wYWNpdHktbm90LWFjdGl2ZTtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBmb250LWZhbWlseTogJHNsaWNrLWZvbnQtZmFtaWx5O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBjb2xvcjogJHNsaWNrLWFycm93LWNvbG9yO1xuICAgICAgICBvcGFjaXR5OiAkc2xpY2stb3BhY2l0eS1kZWZhdWx0O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB9XG59XG5cbi5zbGljay1wcmV2IHtcbiAgICBsZWZ0OiAtMjVweDtcbiAgICBbZGlyPVwicnRsXCJdICYge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLTI1cHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJHNsaWNrLXByZXYtY2hhcmFjdGVyO1xuICAgICAgICBbZGlyPVwicnRsXCJdICYge1xuICAgICAgICAgICAgY29udGVudDogJHNsaWNrLW5leHQtY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2xpY2stbmV4dCB7XG4gICAgcmlnaHQ6IC0yNXB4O1xuICAgIFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgIGxlZnQ6IC0yNXB4O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAkc2xpY2stbmV4dC1jaGFyYWN0ZXI7XG4gICAgICAgIFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgICAgICBjb250ZW50OiAkc2xpY2stcHJldi1jaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qIERvdHMgKi9cblxuLnNsaWNrLWRvdHRlZC5zbGljay1zbGlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zbGljay1kb3RzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjVweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICRzbGljay1vcGFjaXR5LW9uLWhvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgY29udGVudDogJHNsaWNrLWRvdC1jaGFyYWN0ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkc2xpY2stZm9udC1mYW1pbHk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkc2xpY2stZG90LXNpemU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2xpY2stZG90LWNvbG9yO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6ICRzbGljay1vcGFjaXR5LW5vdC1hY3RpdmU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnNsaWNrLWFjdGl2ZSBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkc2xpY2stZG90LWNvbG9yLWFjdGl2ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6ICRzbGljay1vcGFjaXR5LWRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/slick-carousel/slick/slick.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./node_modules/slick-carousel/slick/slick.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n.slick-list:focus {\n    outline: none; }\n.slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n.slick-track:after {\n    clear: both; }\n.slick-loading .slick-track {\n    visibility: hidden; }\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n[dir=\"rtl\"] .slick-slide {\n    float: right; }\n.slick-slide img {\n    display: block; }\n.slick-slide.slick-loading img {\n    display: none; }\n.slick-slide.dragging img {\n    pointer-events: none; }\n.slick-initialized .slick-slide {\n    display: block; }\n.slick-loading .slick-slide {\n    visibility: hidden; }\n.slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n.slick-arrow.slick-hidden {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb3liZXJrb3dpdHovRG9jdW1lbnRzL2xlbW9ub2EvY2xpZW50L25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5zY3NzIiwibm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUVaO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCx1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLDBCQUF5QjtFQUV6Qix1QkFBc0I7RUFDdEIsc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUVqQixvQkFBbUI7RUFDbkIseUNBQXdDLEVBQzNDO0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxVQUFTO0VBQ1QsV0FBVSxFQVViO0FBZkQ7SUFRUSxjQUFhLEVBQ2hCO0FBVEw7SUFZUSxnQkFBZTtJQUNmLGFBQVksRUFDZjtBQUVMOztFQUVJLHdDQUF1QztFQUl2QyxnQ0FBK0IsRUFDbEM7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsT0FBTTtFQUNOLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCLEVBZXJCO0FBckJEO0lBVVEsWUFBVztJQUNYLGVBQWMsRUFDakI7QUFaTDtJQWVRLFlBQVcsRUFDZDtBQUVEO0lBQ0ksbUJBQWtCLEVBQ3JCO0FBRUw7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBV2YsY0FBYSxFQW1CaEI7QUN6Q0M7SURhTSxhQUFZLEVBQ2Y7QUFOTDtJQVFRLGVBQWMsRUFDakI7QUFUTDtJQVdRLGNBQWEsRUFDaEI7QUFaTDtJQWlCUSxxQkFBb0IsRUFDdkI7QUFFRDtJQUNJLGVBQWMsRUFDakI7QUFFRDtJQUNJLG1CQUFrQixFQUNyQjtBQUVEO0lBQ0ksZUFBYztJQUNkLGFBQVk7SUFDWiw4QkFBNkIsRUFDaEM7QUFFTDtFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTbGlkZXIgKi9cblxuLnNsaWNrLXNsaWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zbGljay1saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICYuZHJhZ2dpbmcge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGN1cnNvcjogaGFuZDtcbiAgICB9XG59XG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcbi5zbGljay1zbGlkZXIgLnNsaWNrLWxpc3Qge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uc2xpY2stdHJhY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cblxuICAgIC5zbGljay1sb2FkaW5nICYge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxufVxuLnNsaWNrLXNsaWRlIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIFtkaXI9XCJydGxcIl0gJiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICYuc2xpY2stbG9hZGluZyBpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmLmRyYWdnaW5nIGltZyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5zbGljay1pbml0aWFsaXplZCAmIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnNsaWNrLWxvYWRpbmcgJiB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuc2xpY2stdmVydGljYWwgJiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbn1cbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4iLCIvKiBTbGlkZXIgKi9cbi5zbGljay1zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLnNsaWNrLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cbiAgLnNsaWNrLWxpc3Q6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLnNsaWNrLWxpc3QuZHJhZ2dpbmcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7IH1cblxuLnNsaWNrLXNsaWRlciAuc2xpY2stdHJhY2ssXG4uc2xpY2stc2xpZGVyIC5zbGljay1saXN0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XG5cbi5zbGljay10cmFjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuICAuc2xpY2stdHJhY2s6YmVmb3JlLCAuc2xpY2stdHJhY2s6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7IH1cbiAgLnNsaWNrLXRyYWNrOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDsgfVxuICAuc2xpY2stbG9hZGluZyAuc2xpY2stdHJhY2sge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuXG4uc2xpY2stc2xpZGUge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgW2Rpcj1cInJ0bFwiXSAuc2xpY2stc2xpZGUge1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAuc2xpY2stc2xpZGUgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuc2xpY2stc2xpZGUuc2xpY2stbG9hZGluZyBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLnNsaWNrLXNsaWRlLmRyYWdnaW5nIGltZyB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLnNsaWNrLWxvYWRpbmcgLnNsaWNrLXNsaWRlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgLnNsaWNrLXZlcnRpY2FsIC5zbGljay1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyB9XG5cbi5zbGljay1hcnJvdy5zbGljay1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lOyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #d1e8ff;\n  color: #fff; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-month-view .cal-draggable {\n  cursor: move; }\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-week-view .cal-day-headers {\n    -js-display: flex;\n    display: flex;\n    border: 1px solid #e1e1e1;\n    padding-left: 70px; }\n.cal-week-view .cal-day-headers .cal-header {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\n.cal-week-view .cal-day-column {\n    flex-grow: 1;\n    border-left: solid 1px #e1e1e1; }\n.cal-week-view .cal-event {\n    font-size: 12px;\n    background-color: #d1e8ff;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\n.cal-week-view .cal-all-day-events {\n    border: solid 1px #e1e1e1;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px #e1e1e1;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n.cal-week-view .cal-time-events .cal-day-columns {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n        background-color: #ededed; }\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\n.cal-week-view .cal-hour-segment {\n    position: relative; }\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\n.cal-week-view .cal-draggable {\n    cursor: move; }\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-drag-active .cal-hour-segment {\n    pointer-events: none; }\n.cal-day-view .cal-event-container {\n    position: absolute;\n    cursor: pointer; }\n.cal-day-view .cal-event-container.resize-active {\n      z-index: 1;\n      pointer-events: none; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    background-color: #d1e8ff;\n    border: 1px solid #1e90ff;\n    color: #1e90ff;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%; }\n.cal-day-view .cal-all-day-events > * {\n    cursor: pointer; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-drag-active {\n    z-index: 1; }\n.cal-day-view .cal-drag-active * {\n      pointer-events: none; }\n.cal-day-view .cal-resize-handle {\n    width: 100%;\n    height: 4px;\n    cursor: row-resize;\n    position: absolute; }\n.cal-day-view .cal-resize-handle.cal-resize-handle-after-end {\n      bottom: 0; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n@font-face {\n    font-family: bamboobrisk;\n    src: url('Bamboo_Brisk.otf') format(\"opentype\");\n  }\nbody{\n    background-color: #fbfaea;\n    font-family: 'Indie Flower', sans-serif;\n    max-width: 100%;\n    padding: 10px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQ0EvRTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLDBCQUEwQixFQUFFO0FBRTlCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUVkLHdCQUF3QjtFQUMzQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUU7QUFFeEI7O0VBRUUsMEJBQTBCLEVBQUU7QUFFOUI7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxpQkFBaUI7RUFHVCxRQUFRLEVBQUU7QUFFcEI7RUFHRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFFO0FBRWxCO0VBQ0UsWUFBWTtFQUdKLFFBQVE7RUFHaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFJTix1QkFBdUI7RUFHdkIscUJBQXFCLEVBQUU7QUFFakM7RUFDRSxrQkFBa0IsRUFBRTtBQUNwQjtJQUNFO01BQ0UsZUFBZSxFQUFFLEVBQUU7QUFFekI7RUFDRSxnQ0FBZ0MsRUFBRTtBQUVwQztFQUNFLGlDQUFpQyxFQUFFO0FBRXJDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFFO0FBRXhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUU7QUFFeEI7RUFHVSxRQUFRO0VBR1Isc0JBQXNCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7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NEI7RUFDNUIsd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLG9CQUFvQixFQUFFO0FEbmV4QjtJQUNJLHlCQUF5QjtJQUN6QixnREFBcUQ7R0FDdEQ7QUFFSDtJQUNJLDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9jc3MvYW5ndWxhci1jYWxlbmRhci5jc3NcIjtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGJhbWJvb2JyaXNrO1xuICAgIHNyYzogdXJsKGFzc2V0cy9CYW1ib29fQnJpc2sub3RmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbiAgfVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZWE7XG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBzYW5zLXNlcmlmO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtaGVhZGVyIC5jYWwtY2VsbCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IC5jYWwtY2VsbDpob3Zlcixcbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwuY2FsLWhhcy1ldmVudHMuY2FsLW9wZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICBib3JkZXItYm90dG9tOiAwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtdG9wIHtcbiAgbWluLWhlaWdodDogNzhweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwge1xuICBmbG9hdDogbGVmdDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4OyB9XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMWUxZTE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOTRhNDg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudHMge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTkwZmY7XG4gIGJvcmRlci1jb2xvcjogI2QxZThmZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWluLW1vbnRoLmNhbC1oYXMtZXZlbnRzIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1vdXQtbW9udGggLmNhbC1kYXktbnVtYmVyIHtcbiAgb3BhY2l0eTogMC4xO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXdlZWtlbmQgLmNhbC1kYXktbnVtYmVyIHtcbiAgY29sb3I6IGRhcmtyZWQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNzsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtdG9kYXkgLmNhbC1kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjllbTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtZHJhZy1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LWJhZGdlLFxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZXZlbnQge1xuICBvcGFjaXR5OiAwLjM7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIHBhZGRpbmctbGVmdDogNzBweDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlcixcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgb3BhY2l0eTogMC41OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlOGZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTkwZmY7XG4gICAgY29sb3I6ICMxZTkwZmY7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudHMtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMzFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWVuZHMtd2l0aGluLXdlZWsgLmNhbC1ldmVudCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICByaWdodDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gICAgY29sb3I6ICM4YjAwMDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTFlMWUxO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnM6bm90KC5jYWwtcmVzaXplLWFjdGl2ZSkgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1vZGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnXFwwMGEwJzsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lcjpub3QoLmNhbC1kcmFnZ2FibGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogbW92ZTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyBtd2wtY2FsZW5kYXItd2Vlay12aWV3LWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdGhpbiBkYXNoZWQgI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50LmNhbC1hZnRlci1ob3VyLXN0YXJ0IC5jYWwtdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXN0YXJ0cy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZW5kcy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XG5cbi5jYWwtZGF5LXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovIH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItcm93cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gIC5jYWwtZGF5LXZpZXcgbXdsLWNhbGVuZGFyLWRheS12aWV3LWhvdXItc2VnbWVudCxcbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkICNlMWUxZTE7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLXRpbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQgLmNhbC10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLW92ZXIgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWctYWN0aXZlIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lci5yZXNpemUtYWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZThmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWU5MGZmO1xuICAgIGNvbG9yOiAjMWU5MGZmO1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgPiAqIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gICAgY3Vyc29yOiBtb3ZlOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1zdGFydHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZW5kcy13aXRoaW4tZGF5IC5jYWwtZXZlbnQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4OyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSB7XG4gICAgei1pbmRleDogMTsgfVxuICAgIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgLmNhbC1kYXktdmlldyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgIGJvdHRvbTogMDsgfVxuXG4uY2FsLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd29yZC1icmVhazogbm9ybWFsO1xuICB3b3JkLXNwYWNpbmc6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG9wYWNpdHk6IDAuOTsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAzcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.scss":
/*!************************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!../../sass-loader/lib/loader.js??ref--14-3!./slick-theme.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/slick-carousel/slick/slick-theme.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.scss":
/*!******************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!../../sass-loader/lib/loader.js??ref--14-3!./slick.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/slick-carousel/slick/slick.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************************************************************************************!*\
  !*** multi ./src/styles.css ./node_modules/slick-carousel/slick/slick.scss ./node_modules/slick-carousel/slick/slick-theme.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/royberkowitz/Documents/lemonoa/client/src/styles.css */"./src/styles.css");
__webpack_require__(/*! /Users/royberkowitz/Documents/lemonoa/client/node_modules/slick-carousel/slick/slick.scss */"./node_modules/slick-carousel/slick/slick.scss");
module.exports = __webpack_require__(/*! /Users/royberkowitz/Documents/lemonoa/client/node_modules/slick-carousel/slick/slick-theme.scss */"./node_modules/slick-carousel/slick/slick-theme.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map