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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/FolioCard/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "FolioCard__Holder",
  componentId: "izm7w7-0"
})(["max-width:300px;position:relative;height:0;padding-bottom:calc(100% - 75px);margin-bottom:6.6em;display:block;box-sizing:border-box;background:white;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Intro",
  componentId: "izm7w7-1"
})(["box-sizing:border-box;position:absolute;top:100%;left:0;width:100%;padding:10px 16px;margin:0;z-index:10;transition:all 0.3s;color:", ";background-color:", ";"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.terciary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.background.secondary);
var ContentHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ContentHolder",
  componentId: "izm7w7-2"
})(["position:absolute;top:8px;right:8px;bottom:8px;left:8px;transition:all 0.3s;"]);
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ImageHolder",
  componentId: "izm7w7-3"
})(["overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;transition:all 0.3s;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "FolioCard__Image",
  componentId: "izm7w7-4"
})(["display:block;max-width:100%;height:auto;margin:auto;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Description",
  componentId: "izm7w7-5"
})(["position:absolute;top:100%;right:30px;left:30px;bottom:54px;overflow:hidden;opacity:0;filter:alpha(opacity=0);transition:all 1.2s;"]); //Experimental approach, using checkbox to toggle

var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "FolioCard__Input",
  componentId: "izm7w7-6"
})(["display:none;"]);
var ExpandButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "FolioCard__ExpandButton",
  componentId: "izm7w7-7"
})(["position:absolute;right:16px;top:15px;z-index:20;width:60px;height:45px;transform:rotate(0deg);transition:.5s ease-in-out;background:white;border-radius:100%;div{position:absolute;cursor:pointer;width:50px;height:50px;}span{display:block;position:absolute;height:2px;width:100%;background:#d3531a;border-radius:2px;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out;}span:nth-child(1){top:0px;transform-origin:left center;}span:nth-child(2){top:4.5px;transform-origin:left center;}span:nth-child(3){top:9px;transform-origin:left center;}", ":checked ~ & span:nth-child(1){transform:rotate(45deg);top:-0.75px;left:2px;}", ":checked ~ & span:nth-child(2){width:0%;opacity:0;}", ":checked ~ & span:nth-child(3){transform:rotate(-45deg);top:9.75px;left:2px;}"], Input, Input, Input);
var Chip = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Chip",
  componentId: "izm7w7-8"
})(["display:inline-block;font-size:12px;font-weight:bold;padding:4px;background:rgba(0,0,0,0.25);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.25),0 1px rgba(255,255,255,0.08);margin-rigth:4px;"]);

var FolioCard = function FolioCard(_ref) {
  var className = _ref.className,
      id = _ref.id;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 3
    }
  }, __jsx(Input, {
    id: "folio-".concat(id),
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 5
    }
  }), __jsx(ExpandButton, {
    htmlFor: "folio-".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }))), __jsx(Intro, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, "FACEIT Web"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(Chip, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "html/css"), __jsx(Chip, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "react"))), __jsx(ContentHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, __jsx(ImageHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, __jsx(Image, {
    src: "/folio/".concat(id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  })), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, "He has appeared in more than 100 films and television shows, including The Deer Hunter, Annie Hall, The Prophecy trilogy, The Dogs of War ...")));
};

/* harmony default export */ __webpack_exports__["default"] = (FolioCard);

/***/ })

})
//# sourceMappingURL=index.js.c943812d274b739a5602.hot-update.js.map