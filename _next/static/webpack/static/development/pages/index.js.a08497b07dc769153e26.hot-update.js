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
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ArrowButton */ "./src/components/ArrowButton/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/About/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "About__Holder",
  componentId: "sc-1www6jp-0"
})(["text-align:center;"]);

var About = function About(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx(_ArrowButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "Left",
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }), __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, "About"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, "I'm Ricardo and come from small island on Atlantic ocean. Called Madeira, Island of flowers... or where Cristiano Ronaldo is from."), "A passionate for new emerging technologies such as HTML5 and CSS3. Born in Venezuela but spent most of my life on Madeira Island, Portugal. I can characterize me for my persistence, looking for new emerging technologies. I like to work in team. Random facts: - Don't drink or smoke, but love Coca-Cola - Love to travel and know new people and culture - Love Basketball and Footbal, as practice too - Can't be too much far swimm in some nice beach and sun");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

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
})(["transition:0.5s ease-in-out;font-size:42px;color:", ";padding:", ";&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.secondary, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(4), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.primary);

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
//# sourceMappingURL=index.js.a08497b07dc769153e26.hot-update.js.map