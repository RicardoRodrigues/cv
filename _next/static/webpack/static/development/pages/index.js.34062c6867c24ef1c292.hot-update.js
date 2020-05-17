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

var move = function move(width) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{width:0;visibility:visible;}100%{width:", ";visibility:visible;}"], width);
};

var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SkillBar__ProgressBar",
  componentId: "r6h5dv-3"
})(["width:", ";visibility:hidden;height:16px;border-radius:4px;background-color:#9ACD32;background-image:linear-gradient(to bottom,rgba(255,255,255,0.3),rgba(255,255,255,0.05));animation:", " 1s ease-in-out;animation-delay:1s;box-shadow:0 0 1px 1px rgba(0,0,0,0.25),inset 0 1px rgba(255,255,255,0.1);}"], function (_ref) {
  var width = _ref.width;
  return width;
}, function (_ref2) {
  var width = _ref2.width;
  return move(width);
});

var SkillBar = function SkillBar(_ref3) {
  var className = _ref3.className,
      name = _ref3.name,
      percentage = _ref3.percentage;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }, __jsx(Label, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, name), __jsx(Progress, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(ProgressBar, {
    width: "".concat(percentage, "%"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillBar);

/***/ })

})
//# sourceMappingURL=index.js.34062c6867c24ef1c292.hot-update.js.map