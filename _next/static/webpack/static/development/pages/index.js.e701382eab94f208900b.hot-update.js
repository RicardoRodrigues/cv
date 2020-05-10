webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SocialMenu/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/SocialMenu/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SocialIconLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialIconLink */ "./src/components/SocialIconLink/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/SocialMenu/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SOCIAL_DATA = [{
  url: 'https://github.com/RicardoRodrigues',
  icon: 'FaGithub'
}, {
  url: 'https://twitter.com/r11rodrigues',
  icon: 'FaTwitter'
}, {
  url: 'mailto:ricardo@rodriguez.pt',
  icon: 'FaEnvelope'
}];
var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SocialMenu__Holder",
  componentId: "lo0l30-0"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"]);

var SocialMenu = function SocialMenu(_ref) {
  var className = _ref.className;
  return __jsx(Holder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, SOCIAL_DATA.map(function (_ref2) {
    var icon = _ref2.icon,
        url = _ref2.url;
    return __jsx(_SocialIconLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: icon,
      iconName: icon,
      url: url,
      size: "32",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 39
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMenu);

/***/ })

})
//# sourceMappingURL=index.js.e701382eab94f208900b.hot-update.js.map