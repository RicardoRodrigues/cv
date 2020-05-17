webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/FolioCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/FolioCard/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");


var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/FolioCard/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-image: url(", ");\n    background-position: center;\n    background-size: cover;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Holder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].article.withConfig({
  displayName: "FolioCard__Holder",
  componentId: "izm7w7-0"
})(["max-width:300px;position:relative;height:0;padding-bottom:65%;margin-bottom:6.6em;display:block;box-sizing:border-box;background:white;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "FolioCard__Image",
  componentId: "izm7w7-1"
})(["display:block;max-width:100%;height:auto;margin:auto;"]); //Experimental approach, using checkbox to toggle

var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "FolioCard__Input",
  componentId: "izm7w7-2"
})(["display:none;"]);
var ExpandButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label.withConfig({
  displayName: "FolioCard__ExpandButton",
  componentId: "izm7w7-3"
})(["position:absolute;right:12px;top:12px;z-index:20;width:32px;height:32px;transform:rotate(0deg);transition:.5s ease-in-out;background:", ";border-radius:100%;cursor:pointer;box-shadow:0px 0px 0px 2px white;", ":checked ~ &{right:-15px;top:-15px;}div{position:absolute;width:20px;height:20px;margin:10px 5px;}span{display:block;position:absolute;height:2px;width:100%;background:", ";border-radius:2px;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out;}span:nth-child(1){top:0px;transform-origin:left center;}span:nth-child(2){top:4.5px;transform-origin:left center;}span:nth-child(3){top:8px;transform-origin:left center;}", ":checked ~ & span:nth-child(1){transform:rotate(45deg);top:-2.75px;left:3px;}", ":checked ~ & span:nth-child(2){width:0%;opacity:0;}", ":checked ~ & span:nth-child(3){transform:rotate(-45deg);top:11px;left:3px;}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.background.secondary, Input, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.terciary, Input, Input, Input);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FolioCard__Intro",
  componentId: "izm7w7-4"
})(["box-sizing:border-box;position:absolute;top:100%;left:0;width:100%;padding:10px 16px;margin:0;z-index:10;transition:all 0.3s;color:", ";background-color:", ";", ":checked ~ &{padding:10px 16px 10px 75px;}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.terciary, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.background.secondary, Input);
var ContentHolder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FolioCard__ContentHolder",
  componentId: "izm7w7-5"
})(["position:absolute;top:8px;right:8px;bottom:8px;left:8px;transition:all 0.3s;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FolioCard__Description",
  componentId: "izm7w7-6"
})(["position:absolute;top:100%;right:30px;left:30px;bottom:54px;overflow:hidden;opacity:0;filter:alpha(opacity=0);transition:all 1.2s;", ":checked ~ ", " &{top:50px;padding-top:5.6em;opacity:1;filter:alpha(opacity=100);}"], Input, ContentHolder);
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FolioCard__ImageHolder",
  componentId: "izm7w7-7"
})(["overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;transition:all 0.3s;", " ", ":checked ~ ", " &{left:0px;top:100%;margin-top:20px;width:60px;height:42px;z-index:20;}"], function (_ref) {
  var backgroundImage = _ref.backgroundImage;
  return backgroundImage && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), backgroundImage);
}, Input, ContentHolder);
var Chip = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "FolioCard__Chip",
  componentId: "izm7w7-8"
})(["display:inline-block;font-size:12px;font-weight:bold;padding:4px;background:rgba(0,0,0,0.25);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.25),0 1px rgba(255,255,255,0.08);margin-right:4px;"]);

var FolioCard = function FolioCard(_ref2) {
  var className = _ref2.className,
      id = _ref2.id;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 3
    }
  }, __jsx(Input, {
    id: "folio-".concat(id),
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }), __jsx(ExpandButton, {
    htmlFor: "folio-".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }))), __jsx(Intro, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, "FACEIT Web"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, __jsx(Chip, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, "html/css"), __jsx(Chip, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, "react"))), __jsx(ContentHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, __jsx(ImageHolder, {
    backgroundImage: "/folio/".concat(id, ".jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum...")));
};

/* harmony default export */ __webpack_exports__["default"] = (FolioCard);

/***/ })

})
//# sourceMappingURL=index.js.3759b12eeef8c32792ec.hot-update.js.map