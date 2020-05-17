webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/About/index.tsx":
/*!****************************************!*\
  !*** ./src/components/About/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-on-screen */ "./node_modules/react-on-screen/lib/index.js");
/* harmony import */ var react_on_screen__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_on_screen__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _SkillBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SkillBar */ "./src/components/SkillBar/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/About/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "About__Holder",
  componentId: "sc-1www6jp-0"
})(["", ";font-weight:bold;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].typography.body);
var SkillBarHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "About__SkillBarHolder",
  componentId: "sc-1www6jp-1"
})(["margin:", " 0;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(1));
var SKILLS = [{
  id: 1,
  name: 'HTML',
  percentage: 90
}, {
  id: 2,
  name: 'CSS',
  percentage: 90
}, {
  id: 3,
  name: 'Javascipt',
  percentage: 80
}];

var About = function About(_ref) {
  var className = _ref.className;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 3
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "I'm Ricardo, a Front End Developer and passionate for new emerging technologies. My strong persistence is what make me dream. Been working with anguarJs and React."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "Most of my life was spent in an Island on Atlantic Ocean, called Madeira Island, Island of flowers... or just look where Cristiano Ronaldo born."), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Love to travel and know new people and culture"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Love to practice Basketball and Football"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Can't be too much far swimm in some nice beach and sun (What happen when you grow near the sea)")), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "Skills"), __jsx(react_on_screen__WEBPACK_IMPORTED_MODULE_2___default.a, {
    offset: 3000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, SKILLS.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name,
        percentage = _ref2.percentage;
    return __jsx(SkillBarHolder, {
      key: id,
      name: name,
      percentage: percentage,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 47
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.772ab4915fdb1a2d1979.hot-update.js.map