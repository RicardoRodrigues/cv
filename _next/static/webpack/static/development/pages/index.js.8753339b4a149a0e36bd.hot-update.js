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
})(["position:relative;height:0;padding-bottom:65%;margin-bottom:65px;display:block;box-sizing:border-box;background:white;"]); //Experimental approach, using checkbox to toggle

var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "FolioCard__Input",
  componentId: "izm7w7-1"
})(["display:none;"]);
var ExpandButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label.withConfig({
  displayName: "FolioCard__ExpandButton",
  componentId: "izm7w7-2"
})(["position:absolute;right:12px;top:12px;z-index:20;width:32px;height:32px;transform:rotate(0deg);transition:.5s ease-in-out;background:", ";border-radius:100%;cursor:pointer;box-shadow:0px 0px 0px 2px white;div{position:absolute;width:20px;height:20px;margin:10px 5px;}span{display:block;position:absolute;height:2px;width:100%;background:", ";border-radius:2px;opacity:1;left:0;transform:rotate(0deg);transition:.25s ease-in-out;}span:nth-child(1){top:0px;transform-origin:left center;}span:nth-child(2){top:4px;transform-origin:left center;}span:nth-child(3){top:8px;transform-origin:left center;}", ":checked ~ & span:nth-child(1){transform:rotate(45deg);top:-2.75px;left:3px;}", ":checked ~ & span:nth-child(2){width:0%;opacity:0;}", ":checked ~ & span:nth-child(3){transform:rotate(-45deg);top:11px;left:3px;}"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.background.secondary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.terciary, Input, Input, Input);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Intro",
  componentId: "izm7w7-3"
})(["box-sizing:border-box;position:absolute;top:100%;left:0;width:100%;padding:10px 16px;margin:0;z-index:10;transition:all 0.3s;color:", ";background-color:", ";", ":checked ~ &{padding:10px 16px 10px 75px;}"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.terciary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.background.secondary, Input);
var ContentHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ContentHolder",
  componentId: "izm7w7-4"
})(["position:absolute;top:8px;right:8px;bottom:8px;left:8px;transition:all 0.3s;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Description",
  componentId: "izm7w7-5"
})(["position:absolute;top:100%;right:24px;left:24px;bottom:16px;overflow:hidden;opacity:0;filter:alpha(opacity=0);transition:all 1.2s;overflow-y:auto;font-size:16px;h3{font-size:18px;margin-top:0;}a{font-weight:bold;transition:.4s ease-in-out;color:", ";text-decoration:underline;&:hover{color:", ";}}p{text-align:justify;}", ":checked ~ ", " &{top:36px;opacity:1;filter:alpha(opacity=100);}&::-webkit-scrollbar{width:14px;}&::-webkit-scrollbar-thumb{background-clip:content-box;border:4px solid transparent;border-radius:7px;box-shadow:inset 0 0 0 10px;}&::-webkit-scrollbar-button{width:0;height:0;display:none;}&::-webkit-scrollbar-corner{background-color:transparent;}"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.button.secondary.normal, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.button.secondary.hover, Input, ContentHolder);
var ImageHolder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__ImageHolder",
  componentId: "izm7w7-6"
})(["overflow:hidden;position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;transition:all 0.3s;", " ", ":checked ~ ", " &{left:0px;top:100%;margin-top:20px;width:60px;height:42px;z-index:20;}"], function (_ref) {
  var backgroundImage = _ref.backgroundImage;
  return backgroundImage && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["background-image:url(", ");background-position:center;background-size:cover;"], backgroundImage);
}, Input, ContentHolder);
var Chip = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FolioCard__Chip",
  componentId: "izm7w7-7"
})(["display:inline-block;font-size:12px;font-weight:bold;padding:4px;background:rgba(0,0,0,0.25);border-radius:6px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.25),0 1px rgba(255,255,255,0.08);margin-right:4px;"]);

var FolioCard = function FolioCard(_ref2) {
  var className = _ref2.className,
      id = _ref2.id,
      title = _ref2.title,
      description = _ref2.description,
      imageUrl = _ref2.imageUrl,
      skills = _ref2.skills;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 3
    }
  }, __jsx(Input, {
    id: "folio-".concat(id),
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }), __jsx(ExpandButton, {
    htmlFor: "folio-".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 9
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }))), __jsx(Intro, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 5
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }
  }, skills.map(function (skill) {
    return __jsx(Chip, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }, skill);
  }))), __jsx(ContentHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 5
    }
  }, __jsx(ImageHolder, {
    backgroundImage: imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 7
    }
  }), __jsx(Description, {
    dangerouslySetInnerHTML: {
      __html: description
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FolioCard);

/***/ })

})
//# sourceMappingURL=index.js.8753339b4a149a0e36bd.hot-update.js.map