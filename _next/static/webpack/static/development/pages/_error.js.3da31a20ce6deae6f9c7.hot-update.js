webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fpsyckic%2FDevelopment%2FCV%2Fsrc%2Fpages%2F_error.tsx&hotRouterUpdates=true!./":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fpsyckic%2FDevelopment%2FCV%2Fsrc%2Fpages%2F_error.tsx&hotRouterUpdates=true ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        var mod = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx");
        if (true) {
          module.hot.accept(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx", function () {
            if (!next.router.components["/_error"]) return;
            var updatedPage = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx");
            next.router.update("/_error", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error&hotRouterUpdates=true!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/pages/_error.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "_error__Layout",
  componentId: "sc-176gra-0"
})(["position:relative;"]);
var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "_error__Holder",
  componentId: "sc-176gra-1"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
var MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "_error__MainTitle",
  componentId: "sc-176gra-2"
})(["font-size:124px;letter-spacing:-7px;animation:glitch 1s linear infinite;color:", ";@keyframes glitch{2%,64%{transform:translate(2px,0) skew(0deg);}4%,60%{transform:translate(-2px,0) skew(0deg);}62%{transform:translate(0,0) skew(5deg);}}&:before,&:after{content:attr(title);position:absolute;left:0;}&:before{animation:glitchTop 1s linear infinite;clip-path:polygon(0 0,100% 0,100% 33%,0 33%);-webkit-clip-path:polygon(0 0,100% 0,100% 33%,0 33%);}@keyframes glitchTop{2%,64%{transform:translate(2px,-2px);}4%,60%{transform:translate(-2px,2px);}62%{transform:translate(13px,-1px) skew(-13deg);}}&:after{animation:glitchBotom 1.5s linear infinite;clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%);-webkit-clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%);}@keyframes glitchBotom{2%,64%{transform:translate(-2px,0);}4%,60%{transform:translate(-2px,0);}62%{transform:translate(-22px,5px) skew(21deg);}}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.secondary);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4.withConfig({
  displayName: "_error__Text",
  componentId: "sc-176gra-3"
})(["max-width:", "px;padding:0 ", ";text-align:center;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].breakpoints.xl, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(4));

var NotFoundPage = function NotFoundPage() {
  return __jsx(Layout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }
  }, __jsx(Holder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(MainTitle, {
    title: "404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, "404"), __jsx(Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, "You\u2019ve found a Glitch!", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), "You\u2019ve found yourself in a weird place. Probably not the one you were looking for \xAF\\_(\u30C4)_/\xAF")));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fpsyckic%2FDevelopment%2FCV%2Fsrc%2Fpages%2F_error.tsx&hotRouterUpdates=true ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fpsyckic%2FDevelopment%2FCV%2Fsrc%2Fpages%2F_error.tsx&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fpsyckic%2FDevelopment%2FCV%2Fsrc%2Fpages%2F_error.tsx&hotRouterUpdates=true!./");


/***/ })

})
//# sourceMappingURL=_error.js.3da31a20ce6deae6f9c7.hot-update.js.map