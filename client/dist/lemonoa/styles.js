(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #d1e8ff;\n  color: #fff; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-month-view .cal-draggable {\n  cursor: move; }\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-week-view .cal-day-headers {\n    -js-display: flex;\n    display: flex;\n    border: 1px solid #e1e1e1;\n    padding-left: 70px; }\n.cal-week-view .cal-day-headers .cal-header {\n    flex: 1;\n    text-align: center;\n    padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\n.cal-week-view .cal-day-column {\n    flex-grow: 1;\n    border-left: solid 1px #e1e1e1; }\n.cal-week-view .cal-event {\n    font-size: 12px;\n    background-color: #d1e8ff;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\n.cal-week-view .cal-all-day-events {\n    border: solid 1px #e1e1e1;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      -js-display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px; }\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px #e1e1e1;\n    border-top: 0;\n    -js-display: flex;\n    display: flex; }\n.cal-week-view .cal-time-events .cal-day-columns {\n      -js-display: flex;\n      display: flex;\n      flex-grow: 1; }\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n        background-color: #ededed; }\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\n.cal-week-view .cal-hour-segment {\n    position: relative; }\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\n.cal-week-view .cal-draggable {\n    cursor: move; }\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-drag-active .cal-hour-segment {\n    pointer-events: none; }\n.cal-day-view .cal-event-container {\n    position: absolute;\n    cursor: pointer; }\n.cal-day-view .cal-event-container.resize-active {\n      z-index: 1;\n      pointer-events: none; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    background-color: #d1e8ff;\n    border: 1px solid #1e90ff;\n    color: #1e90ff;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%; }\n.cal-day-view .cal-all-day-events > * {\n    cursor: pointer; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-drag-active {\n    z-index: 1; }\n.cal-day-view .cal-drag-active * {\n      pointer-events: none; }\n.cal-day-view .cal-resize-handle {\n    width: 100%;\n    height: 4px;\n    cursor: row-resize;\n    position: absolute; }\n.cal-day-view .cal-resize-handle.cal-resize-handle-after-end {\n      bottom: 0; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\nbody{\n    background-color: #fbfaea;\n    font-family: sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtFQUErRTtBQ0EvRTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBRTtBQUV4QjtFQUNFLDBCQUEwQixFQUFFO0FBRTlCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUVkLHdCQUF3QjtFQUMzQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUU7QUFFeEI7O0VBRUUsMEJBQTBCLEVBQUU7QUFFOUI7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCLEVBQUU7QUFFckI7RUFDRSxpQkFBaUI7RUFHVCxRQUFRLEVBQUU7QUFFcEI7RUFHRSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFFO0FBRWxCO0VBQ0UsWUFBWTtFQUdKLFFBQVE7RUFHaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFJTix1QkFBdUI7RUFHdkIscUJBQXFCLEVBQUU7QUFFakM7RUFDRSxrQkFBa0IsRUFBRTtBQUNwQjtJQUNFO01BQ0UsZUFBZSxFQUFFLEVBQUU7QUFFekI7RUFDRSxnQ0FBZ0MsRUFBRTtBQUVwQztFQUNFLGlDQUFpQyxFQUFFO0FBRXJDO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFFO0FBRXhCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isb0JBQW9CLEVBQUU7QUFFeEI7RUFHVSxRQUFRO0VBR1Isc0JBQXNCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7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NEI7RUFDNUIsd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLG9CQUFvQixFQUFFO0FEbmV4QjtJQUNJLDBCQUEwQjtJQUMxQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzXCI7XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmFlYTtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn0iLCIuY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciAuY2FsLWNlbGwge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIsXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLmNhbC1oYXMtZXZlbnRzLmNhbC1vcGVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXRvcCB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtcm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAtanMtZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDsgfVxuICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTFlMWUxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1iYWRnZSB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0YTQ4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnRzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xuICBib3JkZXItY29sb3I6ICNkMWU4ZmY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1pbi1tb250aC5jYWwtaGFzLWV2ZW50cyB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LW51bWJlciB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC13ZWVrZW5kIC5jYWwtZGF5LW51bWJlciB7XG4gIGNvbG9yOiBkYXJrcmVkOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZkZTc7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS45ZW07IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWRyYWctb3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTAgIWltcG9ydGFudDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWRheS1iYWRnZSxcbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWV2ZW50IHtcbiAgb3BhY2l0eTogMC4zOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWdnYWJsZSB7XG4gIGN1cnNvcjogbW92ZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGU6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5jYWwtd2Vlay12aWV3IHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqLyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlciB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZTFlMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG9wYWNpdHk6IDAuNTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1jb2x1bW4ge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZThmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWU5MGZmO1xuICAgIGNvbG9yOiAjMWU5MGZmOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1sYWJlbC1jb2x1bW4ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTFlMWUxO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDA7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnRzLXJvdyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogNzBweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnQtY29udGFpbmVyLnJlc2l6ZS1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXN0YXJ0cy13aXRoaW4td2VlayAuY2FsLWV2ZW50IHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtdGltZS1sYWJlbC1jb2x1bW4ge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxNHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgcmlnaHQ6IDA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXRvZGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmZGU3OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICAgIGNvbG9yOiAjOGIwMDAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1hY3RpdmUgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UxZTFlMTtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zOm5vdCguY2FsLXJlc2l6ZS1hY3RpdmUpIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIG1hcmdpbjogMXB4O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBhMCc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kcmFnLW92ZXIgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudC5jYWwtYWZ0ZXItaG91ci1zdGFydCAuY2FsLXRpbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1zdGFydHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWVuZHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuXG4uY2FsLWRheS12aWV3IHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqLyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXJvd3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMWUxZTE7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLWRheS12aWV3IG13bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGEwJzsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIGRhc2hlZCAjZTFlMWUxOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50LmNhbC1hZnRlci1ob3VyLXN0YXJ0IC5jYWwtdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyLFxuICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1vdmVyIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnLWFjdGl2ZSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFlOTBmZjtcbiAgICBjb2xvcjogIzFlOTBmZjtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzID4gKiB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogbW92ZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWVuZHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1hY3RpdmUge1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1hY3RpdmUgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC5jYWwtZGF5LXZpZXcgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICBib3R0b206IDA7IH1cblxuLmNhbC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDcwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvcGFjaXR5OiAwLjk7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAtM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggMDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQgLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20gLmNhbC10b29sdGlwLWFycm93IHtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCB7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBtYXJnaW4tbGVmdDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDA7IH1cblxuLmNhbC10b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4uY2FsLXRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cbiJdfQ== */", '', '']]

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
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guyserfaty/lemonoa/client/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map