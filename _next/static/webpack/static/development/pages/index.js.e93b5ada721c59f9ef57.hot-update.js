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
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _SkillBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SkillBar */ "./src/components/SkillBar/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/About/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "About__Holder",
  componentId: "sc-1www6jp-0"
})(["", ";a{font-weight:bold;transition:.4s ease-in-out;color:", ";text-decoration:underline;&:hover{color:", ";}}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].typography.body, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.normal, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.hover);
var SkillBarHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "About__SkillBarHolder",
  componentId: "sc-1www6jp-1"
})(["margin-bottom:", ";"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(3));
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
      lineNumber: 48,
      columnNumber: 3
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "I'm ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 12
    }
  }, "Ricardo"), ", a ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 40
    }
  }, "Front End Developer"), " and passionate for new emerging technologies. My strong persistence is one of the biggest strengths."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "Most of my life was spent in an Island on Atlantic Ocean, called ", __jsx("a", {
    href: "http://en.wikipedia.org/wiki/Madeira",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 73
    }
  }, "Madeira Island"), ", Island of flowers... or just look where ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 196
    }
  }, "Cristiano Ronaldo"), " born."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Travel is a must and know new people and cultures. Can't wait for a swimm in some nice beach and sun (What happen when you grow near the sea). Love to practice Basketball and Football."), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "Skills"), __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
        lineNumber: 54,
        columnNumber: 47
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.e93b5ada721c59f9ef57.hot-update.js.map