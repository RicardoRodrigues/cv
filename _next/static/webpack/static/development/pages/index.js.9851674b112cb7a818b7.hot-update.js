webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/SocialIconLink/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/SocialIconLink/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/SocialIconLink/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "SocialIconLink__Link",
  componentId: "wd8y40-0"
})([""]);

var SocialIconLink = function SocialIconLink(_ref) {
  var className = _ref.className,
      iconName = _ref.iconName,
      url = _ref.url;
  var icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[iconName]);
  return __jsx(Link, {
    href: url,
    className: className,
    target: "_blank",
    rel: "noopener",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, icon);
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIconLink);

/***/ }),

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
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons */ "./node_modules/react-icons/lib/esm/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _SocialIconLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SocialIconLink */ "./src/components/SocialIconLink/index.tsx");
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
  return __jsx(react_icons__WEBPACK_IMPORTED_MODULE_2__["IconContext"].Provider, {
    value: {
      color: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.primary,
      size: '32'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, SOCIAL_DATA.map(function (_ref2) {
    var icon = _ref2.icon,
        url = _ref2.url;
    return __jsx(_SocialIconLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: icon,
      iconName: icon,
      url: url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 41
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialMenu);

/***/ })

})
//# sourceMappingURL=index.js.9851674b112cb7a818b7.hot-update.js.map