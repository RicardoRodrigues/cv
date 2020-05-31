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
  id: 8,
  title: 'FACEIT',
  description: '<h3>FACEIT gaming community plataform, (Web Application) (2012)</h3> \
      <p>FACEIT is a gaming community continuously looking for innovative entertainment. \
      Our online platform offers players an environment to interact with each other, follow their \
      favorite professionals and remain up to date with the performance of their friends. \
      Our approach of using solid technologies and architectural patterns with the dark \
      obsession of using the latest techs available with a little bit of “if it works it\'s \
      obsolete” mindset has allowed us to complete a stable, bleeding edge application. Here\'s what we\'ve used:</p>\
      <ul>\
        <li>HTML 5 and Javascript with Backbone.js and Marionette</li>\
        <li>REST/JSON API in Java</li>\
        <li>PusherApp</li>\
        <li>MongoDB</li>\
      </ul>\
      <p><strong>Website: </strong><a href="http://www.faceit.com" target="_blank">www.faceit.com</a></p>\
    ',
  imageUrl: 'folio/8.jpg',
  skills: ['Javascript', 'Backbone']
}, {
  id: 7,
  title: 'BrandMyMail',
  description: '<h3>BrandMyMail social email templating (Web Application) (2011)</h3>\
      <p>BrandMyMail provides a way to create and send socially-branded emails from your personal email client.\
      It allow you to apply templates to the emails you send. You can embed your latest blog posts, social network \
      updates, photos or videos, and many other things directly in emails you send.</p>\
      <p>Work with Gmail from Firefox/Chrome as well as iPhone/iPad and Android.</p>\
      <p>Featured in many publications including \
      <a href="http://techcrunch.com/2011/12/19/brandmymail-lets-you-customize-gmail-with-social-media-updates/" target="_blank">TechCrunch</a>, \
      <a href="http://mashable.com/2012/04/03/brandmymail-premium/" target="_blank">Mashable</a>, \
      and <a href="http://www.forbes.com/sites/alexknapp/2011/12/19/brandmymail-lets-you-integrate-your-social-media-in-your-email/" target="_blank">Forbes</a>\
      <p><strong>Website: </strong><a href="http://www.brandmymail.com" target="_blank">www.brandmymail.com</a></p>\
    ',
  imageUrl: 'folio/7.jpg',
  skills: ['Javascript', 'JQuery', 'Python']
}, {
  id: 6,
  title: 'Medical SmartCard',
  description: '	<h3>Smart Card Medical appointment application, (Experimental System) ( 2010)</h3>\
      <p>This was my Master Thesis work and was supervised by \
      <a title="Nestor Cataño Personal Website" href="https://sites.google.com/view/nestorcatano/home" target="_blank">Nestor Cataño</a>. \
      This project has as objective the development of a Java Card application with the support of formal specification in JML, \
      which is used to correctly development an application.</p>\
      <p>The application is to be held in a Smart Card with the purpose of managing the medical \
      history as well as the medical appointments of the card holder.</p>\
      <p>A script prototype was development too support his strategy. \
      (See <a title="JFly Tool" href="http://www.knowmydream.com/Projects/jfly/">Script tool</a>, \
      <a title="Master Thesis Report" href="http://www.knowmydream.com/Projects/masterthesis/Ricardo-final.pdf" target="_blank">Master Thesis Report</a>, \
      <a title="Master Thesis Annex" href="http://www.knowmydream.com/Projects/masterthesis/Annex.pdf" target="_blank">Master Thesis Annex</a>, \
      <a title="Healthcard Manual" href="http://www.knowmydream.com/Projects/masterthesis/HealthCard%20Manual.pdf" target="_blank">HealthCard Manual</a> \
      and <a title="Healthcard Code" href="http://www.knowmydream.com/Projects/masterthesis/HealthCard_JavaCard-JML.rar" target="_blank">HealthCard Code</a>)</p> \
      <p><strong>Website: </strong><a title="Healthcard Project" href="http://sourceforge.net/projects/healthcard/" target="_blank">Healthcard Project</a></p>\
    ',
  imageUrl: 'folio/6.jpg',
  skills: ['Java', 'JML']
}, {
  id: 1,
  title: 'Interface Killer',
  description: '<h3>Prototype of an Interface Usability Checker, (Interface Prototype) (2007)</h3>\
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
      lineNumber: 100,
      columnNumber: 3
    }
  }, FolioData.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        description = _ref2.description,
        imageUrl = _ref2.imageUrl,
        skills = _ref2.skills;
    return __jsx(_FolioCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      id: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      skills: skills,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 7
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Folio);

/***/ })

})
//# sourceMappingURL=index.js.1af3d52b8a5cd7192f36.hot-update.js.map