webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/FolioCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/FolioCard/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/FolioCard/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "FolioCard__Holder",
  componentId: "izm7w7-0"
})(["max-width:300px;position:relative;height:0;padding-bottom:calc(100% - 16px);margin-bottom:6.6em;display:block;box-sizing:border-box;"]);
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Inner",
  componentId: "izm7w7-1"
})(["padding:1rem 1rem 1rem 1rem;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Intro",
  componentId: "izm7w7-2"
})(["box-sizing:border-box;position:absolute;top:calc(100% - (250/240 * 100)%);left:0;width:100%;padding:10px 16px;margin:0;z-index:10;transition:all 0.3s;color:", ";background-color:", ";"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.terciary, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.background.secondary);
var ContentHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ContentHolder",
  componentId: "izm7w7-3"
})(["", " transition:all 0.3s;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ImageHolder",
  componentId: "izm7w7-4"
})(["overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;transition:all 0.3s;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FolioCard__Image",
  componentId: "izm7w7-5"
})(["display:block;max-width:100%;height:auto;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Description",
  componentId: "izm7w7-6"
})(["position:absolute;top:100%;right:30px;left:30px;bottom:54px;overflow:hidden;opacity:0;filter:alpha(opacity=0);transition:all 1.2s;"]); //Experimental approach, using checkbox to toggle

var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "FolioCard__Input",
  componentId: "izm7w7-7"
})(["display:none;"]);
var ExpandButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "FolioCard__ExpandButton",
  componentId: "izm7w7-8"
})(["position:absolute;right:16px;top:15px;z-index:20;width:60px;height:45px;position:relative;margin:50px auto;transform:rotate(0deg);transition:.5s ease-in-out;cursor:pointer;span{display:block;position:absolute;height:9px;width:100%;background:#d3531a;border-radius:9px;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out;}span:nth-child(1){top:0px;transform-origin:left center;}span:nth-child(2){top:18px;transform-origin:left center;}span:nth-child(3){top:36px;transform-origin:left center;}", ":checked ~ & span:nth-child(1){transform:rotate(45deg);top:-3px;left:8px;}", ":checked ~ & span:nth-child(2){width:0%;opacity:0;}", ":checked ~ & span:nth-child(3){transform:rotate(-45deg);top:39px;left:8px;}"], Input, Input, Input);

var FolioCard = function FolioCard(_ref) {
  var className = _ref.className,
      id = _ref.id;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 3
    }
  }, __jsx(Inner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(Input, {
    id: "folio-".concat(id),
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), __jsx(ExpandButton, {
    htmlFor: "folio-".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx(Intro, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "Christopher Walken"), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "The Deer Hunter")), __jsx(ContentHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(ImageHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(Image, {
    src: "/folio/".concat(id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  })), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ..."))));
};

/* harmony default export */ __webpack_exports__["default"] = (FolioCard);

/***/ })

})
//# sourceMappingURL=index.js.1de4283c092b28357a6b.hot-update.js.map