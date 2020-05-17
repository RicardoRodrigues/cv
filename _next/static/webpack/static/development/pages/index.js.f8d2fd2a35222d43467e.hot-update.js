webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/OverlayWithAnimation/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/OverlayWithAnimation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ArrowButton */ "./src/components/ArrowButton/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/OverlayWithAnimation/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var HolderWithAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_animated_css__WEBPACK_IMPORTED_MODULE_2__["Animated"]).withConfig({
  displayName: "OverlayWithAnimation__HolderWithAnimation",
  componentId: "sc-11tbvng-0"
})(["background:", ";width:90vw;height:90vh;padding:5vh 5vw;z-index:9;position:fixed;max-height:100vh;overflow-y:auto;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.background.terciary);

var OverlayWithAnimation = function OverlayWithAnimation(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      isVisible = _ref.isVisible,
      onClose = _ref.onClose;
  return __jsx(HolderWithAnimation, {
    className: className,
    animationIn: "slideInLeft",
    animationOut: "slideOutLeft",
    animationInDuration: 1000,
    animationOutDuration: 1000,
    isVisible: isVisible,
    animateOnMount: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(_ArrowButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    direction: "Left",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, title), children);
};

/* harmony default export */ __webpack_exports__["default"] = (OverlayWithAnimation);

/***/ })

})
//# sourceMappingURL=index.js.f8d2fd2a35222d43467e.hot-update.js.map