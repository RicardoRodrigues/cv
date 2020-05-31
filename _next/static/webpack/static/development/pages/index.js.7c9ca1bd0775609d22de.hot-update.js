webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Folio/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Folio/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FolioCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FolioCard */ "./src/components/FolioCard/index.tsx");
var _this = undefined,
    _jsxFileName = "/Users/psyckic/Development/CV/src/components/Folio/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var FolioData = [{
  id: 1,
  title: 'Interface Killer',
  description: '<h3>Prototype of an Interface Usability Checker, (Interface Prototype) ( 2007 )</h3>\
      <p>For this project, my team and I designed and developed an \
      interface prototype for an application in which users could upload interface screenshots,\
      mark usability errors on them. The objective of this project was to develop an interface\
      prototype that somewhat was functional, simple and efficient to use by applying usability principles.</p>\
      <p>This project was developed for the Human-Computer Interaction course. \
      (see <a title="Project Report" href="http://www.knowmydream.com/Projects/InterfaceKiller/RelatorioIHMFinal.pdf" target="_blank">Project Report</a>\
      and <a title="Annex" href="http://www.knowmydream.com/Projects/InterfaceKiller/Anexos.rar" target="_blank">Annexes</a> in portuguese)</p>\
      <p><strong>Website: </strong>\
      <a title="Interface Killer - Prototype" href="http://www.knowmydream.com/Projects/InterfaceKiller/bin/InterfaceKiller.html" target="_blank">InterfaceKiller</a> </p>\
    ',
  imageUrl: 'folio/1.jpg',
  skills: ['UX/UI', 'ActionScript', 'Flex']
}];
var Holder = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Folio__Holder",
  componentId: "d096vf-0"
})(["display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));"]);

var Folio = function Folio(_ref) {
  var className = _ref.className;
  return __jsx(Holder, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, FolioData.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        description = _ref2.description,
        imageUrl = _ref2.imageUrl,
        skills = _ref2.skills;

    __jsx(_FolioCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      id: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      skills: skills,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Folio);

/***/ })

})
//# sourceMappingURL=index.js.7c9ca1bd0775609d22de.hot-update.js.map