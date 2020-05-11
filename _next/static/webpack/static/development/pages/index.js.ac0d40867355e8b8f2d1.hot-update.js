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
/* harmony import */ var _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rehooks/component-size */ "./node_modules/@rehooks/component-size/index.js");
/* harmony import */ var _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rehooks_component_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
/* harmony import */ var _components_IntroCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IntroCard */ "./src/components/IntroCard/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SocialMenu */ "./src/components/SocialMenu/index.tsx");
/* harmony import */ var _components_OverlayWithAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/OverlayWithAnimation */ "./src/components/OverlayWithAnimation/index.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/About */ "./src/components/About/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var LoaderOverlay = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "pages__LoaderOverlay",
  componentId: "lsk2yb-0"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
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
var MenuType;

(function (MenuType) {
  MenuType["About"] = "about";
  MenuType["Portfolio"] = "portfolio";
})(MenuType || (MenuType = {}));

var Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Menu",
  componentId: "lsk2yb-4"
})([""]);
var PageButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__PageButton",
  componentId: "lsk2yb-5"
})(["transition:4s ease-in-out;z-index:4;display:inline-block;position:absolute;", " &:hover{background:", ";color:", ";cursor:pointer;}"], function (_ref) {
  var isSmall = _ref.isSmall;
  console.log({
    isSmall: isSmall
  });

  if (isSmall) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([""]);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:10vw;height:10vw;text-align:center;font-size:25px;transform:rotate(-90deg);background:transparent;position:absolute;left:0;bottom:40vh;display:flex;flex-direction:column;justify-content:center;border-radius:0px 0px 100px 100px;"]);
}, Object(polished__WEBPACK_IMPORTED_MODULE_2__["transparentize"])(0.1, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background.secondary), _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.secondary.normal);

var Home = function Home() {
  var holderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useComponentSize = _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3___default()(holderRef),
      holderWidth = _useComponentSize.width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState[0],
      setIsLoaded = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      activeOverlay = _useState2[0],
      setActiveOverlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      hasAnimationEnd = _useState3[0],
      setHasAnimationEnd = _useState3[1];

  var isSmall = holderWidth < _theme__WEBPACK_IMPORTED_MODULE_4__["default"].breakpoints.sm;
  return __jsx("div", {
    ref: holderRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, !hasAnimationEnd && __jsx(LoaderOverlay, {
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
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, isLoaded && hasAnimationEnd && __jsx(FadeIn, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(Middle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx(_components_IntroCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "Ricardo Rodrigues",
    description: "Front End Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }), __jsx(SocialMenuHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }), __jsx(Menu, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(PageButton, {
    isSmall: isSmall,
    onClick: function onClick() {
      return setActiveOverlay(MenuType.About);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "ABOUT"))), __jsx(_components_OverlayWithAnimation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'About',
    isVisible: MenuType.About === activeOverlay,
    onClose: function onClose() {
      return setActiveOverlay(null);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_components_About__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ac0d40867355e8b8f2d1.hot-update.js.map