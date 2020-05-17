webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/PageButton/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/PageButton/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../media */ "./src/media.ts");


var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/PageButton/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 10vw;\n    height: 10vw;\n    text-transform: uppercase;\n    text-align: center;\n    background: transparent;\n    position: absolute;\n    bottom: 40vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    border-radius: 0px 0px 100px 100px;\n    &:hover {\n      background: ", ";\n      color: ", ";\n    }\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 0 6%;\n    font-weight: bold;\n    text-decoration: underline;\n    &:hover {\n      color: ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DIRECTION_STYLES = {
  Left: {
    left: 0,
    transform: 'rotate(-90deg)'
  },
  Right: {
    right: 0,
    transform: 'rotate(90deg)'
  }
};
var Holder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PageButton__Holder",
  componentId: "sc-3himh-0"
})(["transition:.4s ease-in-out;transition-property:color,background;z-index:4;font-size:25px;display:inline-block;", ";", ";&:hover{cursor:pointer;}"], _media__WEBPACK_IMPORTED_MODULE_5__["default"].lessThan('sm')(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.primary.hover), function (_ref) {
  var placement = _ref.placement;
  return _media__WEBPACK_IMPORTED_MODULE_5__["default"].greaterThan('sm')(_templateObject2(), Object(polished__WEBPACK_IMPORTED_MODULE_3__["transparentize"])(0.1, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background.secondary), _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.text.terciary, DIRECTION_STYLES[placement]);
});

var PageButton = function PageButton(_ref2) {
  var className = _ref2.className,
      placement = _ref2.placement,
      onClick = _ref2.onClick,
      children = _ref2.children;
  return __jsx(Holder, {
    className: className,
    onClick: onClick,
    placement: placement,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageButton);

/***/ })

})
//# sourceMappingURL=index.js.6137934d4697e1169b4c.hot-update.js.map