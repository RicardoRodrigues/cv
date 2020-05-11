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
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
/* harmony import */ var _components_IntroCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IntroCard */ "./src/components/IntroCard/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SocialMenu */ "./src/components/SocialMenu/index.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/About */ "./src/components/About/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var LARGE_MIN_SIZE = 760;
var LoaderOverlay = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "pages__LoaderOverlay",
  componentId: "lsk2yb-0"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_3__["cover"])());
var FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__FadeIn",
  componentId: "lsk2yb-1"
})(["", ""], Object(_utils__WEBPACK_IMPORTED_MODULE_5__["fadeInBuilder"])(2));
var SocialMenuHolder = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "pages__SocialMenuHolder",
  componentId: "lsk2yb-2"
})(["width:100%;justify-content:center;margin-top:", ";"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(4));
var Middle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Middle",
  componentId: "lsk2yb-3"
})(["width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;position:fixed;top:0;text-align:center;z-index:1;"]);
var OverlayWithAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_animated_css__WEBPACK_IMPORTED_MODULE_2__["Animated"]).withConfig({
  displayName: "pages__OverlayWithAnimation",
  componentId: "lsk2yb-4"
})(["background:", ";width:90vw;height:90vh;padding:5vh 5vw;z-index:9;position:fixed;max-height:100vh;overflow-y:auto;"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background.secondary);
var MenuType;

(function (MenuType) {
  MenuType["About"] = "about";
  MenuType["Portfolio"] = "portfolio";
})(MenuType || (MenuType = {}));

var PageButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PageButton",
  componentId: "lsk2yb-5"
})(["width:10vw;height:10vw;text-align:center;font-size:25px;transform:rotate(-90deg);background:transparent;position:fixed;left:0;bottom:40vh;display:flex;flex-direction:column;justify-content:center;z-index:4;transition:0.4s ease-in-out;border-radius:0px 0px 100px 100px;"]);

var Home = function Home() {
  // const holderRef = useRef(null);
  // const { width: holderWidth } = useComponentSize(holderRef);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState[0],
      setIsLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      activeOverlay = _useState2[0],
      setActiveOverlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasAnimationEnd = _useState3[0],
      setHasAnimationEnd = _useState3[1]; // const isSmall = holderWidth < LARGE_MIN_SIZE;
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
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, isLoaded && hasAnimationEnd && __jsx(FadeIn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx(Middle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx(_components_IntroCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "Ricardo Rodrigues",
    description: "Front End Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx(SocialMenuHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx(OverlayWithAnimation, {
    animationIn: "slideInLeft",
    animationOut: "slideOutLeft",
    animationInDuration: 1000,
    animationOutDuration: 1000,
    isVisible: MenuType.About === activeOverlay,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(_components_About__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClose: function onClose() {
      return setActiveOverlay(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  })), __jsx(PageButton, {
    onClick: function onClick() {
      return setActiveOverlay(MenuType.About);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "ABOUT"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.79a36ef1dc67bb038116.hot-update.js.map