webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/media.ts":
/*!**********************!*\
  !*** ./src/media.ts ***!
  \**********************/
/*! exports provided: breakpointsInPx, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsInPx", function() { return breakpointsInPx; });
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/theme.ts");


var breakpointsInPx = {};
var breakpoints = _theme__WEBPACK_IMPORTED_MODULE_1__["default"].breakpoints;

for (var key in breakpoints) {
  if (breakpoints.hasOwnProperty(key)) {
    breakpointsInPx[key] = "".concat(breakpoints[key], "px");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_media_query__WEBPACK_IMPORTED_MODULE_0__["generateMedia"])(breakpointsInPx));

/***/ })

})
//# sourceMappingURL=index.js.51ffb48705a7bc2665d7.hot-update.js.map