webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ArrowButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ArrowButton/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/ArrowButton/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ArrowButton__Button",
  componentId: "sc-16p613p-0"
})(["font-size:42px;cursor:pointer;transition:color 0.5s ease-in-out;color:", ";&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.normal, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.normal);

var ArrowButton = function ArrowButton(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      onClick = _ref.onClick;
  var iconName = "FaChevronCircle".concat(direction);
  var icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[iconName]);
  return __jsx(Button, {
    className: className,
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, icon);
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowButton);

/***/ })

})
//# sourceMappingURL=index.js.42b60ded54eddc6bf292.hot-update.js.map