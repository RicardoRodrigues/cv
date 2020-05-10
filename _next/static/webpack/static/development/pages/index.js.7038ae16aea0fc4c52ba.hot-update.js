webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
/* harmony import */ var _components_IntroCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/IntroCard */ "./src/components/IntroCard/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SocialMenu */ "./src/components/SocialMenu/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var LARGE_MIN_SIZE = 760;
var LoaderOverlay = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"]).withConfig({
  displayName: "pages__LoaderOverlay",
  componentId: "lsk2yb-0"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
var FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__FadeIn",
  componentId: "lsk2yb-1"
})(["", ""], Object(_utils__WEBPACK_IMPORTED_MODULE_4__["fadeInBuilder"])(2));
var SocialMenuHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "pages__SocialMenuHolder",
  componentId: "lsk2yb-2"
})(["width:100%;justify-content:center;margin-top:", ";"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(4));
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Middle",
  componentId: "lsk2yb-3"
})(["width:100vw;height:90vh;display:flex;flex-direction:column;justify-content:center;position:fixed;top:0;text-align:center;z-index:1;color:#fff;padding-bottom:10vh;"]);

var Home = function Home() {
  // const holderRef = useRef(null);
  // const { width: holderWidth } = useComponentSize(holderRef);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState[0],
      setIsLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasAnimationEnd = _useState2[0],
      setHasAnimationEnd = _useState2[1]; // const isSmall = holderWidth < LARGE_MIN_SIZE;
  //ref={holderRef}


  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !hasAnimationEnd && __jsx(LoaderOverlay, {
    fadeOutTime: 3000,
    onLoaded: function onLoaded() {
      return setIsLoaded(true);
    },
    onAnimationEnd: function onAnimationEnd() {
      return setHasAnimationEnd(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, isLoaded && hasAnimationEnd && __jsx(FadeIn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(Middle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_components_IntroCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "Ricardo Rodrigues",
    description: "Front End Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }), __jsx(SocialMenuHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7038ae16aea0fc4c52ba.hot-update.js.map