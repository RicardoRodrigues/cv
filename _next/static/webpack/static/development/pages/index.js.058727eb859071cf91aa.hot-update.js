webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SkillBar/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/SkillBar/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/SkillBar/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillBar__Holder",
  componentId: "r6h5dv-0"
})([""]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillBar__Label",
  componentId: "r6h5dv-1"
})(["", " margin-bottom:", ""], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.small, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(1));
var Progress = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillBar__Progress",
  componentId: "r6h5dv-2"
})(["padding:4px;background:rgba(0,0,0,0.25);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.25),0 1px rgba(255,255,255,0.08);"]);
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillBar__ProgressBar",
  componentId: "r6h5dv-3"
})(["width:", ";height:16px;border-radius:4px;background-color:#9acd32;background-image:linear-gradient(to bottom,rgba(255,255,255,0.3),rgba(255,255,255,0.05));transition:0.4s ease-in-out;transition-property:width,background-color;animation-delay:10s;box-shadow:0 0 1px 1px rgba(0,0,0,0.25),inset 0 1px rgba(255,255,255,0.1);"], function (_ref) {
  var width = _ref.width;
  return width;
});

var SkillBar = function SkillBar(_ref2) {
  var className = _ref2.className,
      name = _ref2.name,
      percentage = _ref2.percentage;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx(Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, name), __jsx(Progress, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(ProgressBar, {
    width: "".concat(percentage, "%"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillBar);

/***/ })

})
//# sourceMappingURL=index.js.058727eb859071cf91aa.hot-update.js.map