module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GlobalStyle.ts":
/*!****************************!*\
  !*** ./src/GlobalStyle.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/theme.ts");



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${polished__WEBPACK_IMPORTED_MODULE_1__["normalize"]};
  body {
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontFamily.base};
    background: ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.background.body};
    color: ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.primary};
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.body};

    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  h1 {
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.h1};
  }
  h2 {
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.h2};
  }
  h3 {
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.h3};
  }
  h4 {
    ${_theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.h4};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./src/components/About/index.tsx":
/*!****************************************!*\
  !*** ./src/components/About/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/About/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "About__Holder",
  componentId: "sc-1www6jp-0"
})([""]);

const About = ({
  className
}) => __jsx(Holder, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, "I'm Ricardo and come from small island on Atlantic ocean. Called Madeira, Island of flowers... or where Cristiano Ronaldo is from."), "A passionate for new emerging technologies such as HTML5 and CSS3. Born in Venezuela but spent most of my life on Madeira Island, Portugal. I can characterize me for my persistence, looking for new emerging technologies. I like to work in team. Random facts: - Don't drink or smoke, but love Coca-Cola - Love to travel and know new people and culture - Love Basketball and Footbal, as practice too - Can't be too much far swimm in some nice beach and sun");

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/ArrowButton/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ArrowButton/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/ArrowButton/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ArrowButton__Button",
  componentId: "sc-16p613p-0"
})(["font-size:42px;cursor:pointer;transition:color 0.4s ease-in-out;color:", ";&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.normal, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.button.secondary.hover);

const ArrowButton = ({
  className,
  direction,
  onClick
}) => {
  const iconName = `FaChevronCircle${direction}`;
  const icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[iconName]);
  return __jsx(Button, {
    className: className,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, icon);
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowButton);

/***/ }),

/***/ "./src/components/Head/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Head/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/Head/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


//TODO: remove external place
const METADATA = {
  title: 'Ricardo Rodrigues | Personal Portfolio Ricardo Rodrigues',
  description: 'Personal Portfolio Ricardo Rodrigues',
  keywords: ['Ricardo', 'Rodrigues', 'frontend', 'curriculum', 'portfolio'],
  author: 'Ricardo Rodrigues',
  favicon: 'data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAADPjAcAzogAAM6JAADOiQAAzokANM6JAJjOiQDazokA9c6JAPbOiQDczokAnM6JADjOiQAAzokAAM6JAADOiAAAz40HAM6JAADOigAFzokAisyFAPbMhgD/zooA/86KAP/OigD/zooA/86KAP/OigD4zooAkM6KAAjOigAAzokAAM+NBwDOiQAGzYcAr8+LBP/bqEH/2KAx/82GAP/OigD/zooA/82IAP/MhAD/zIQA/8yEAP/OiQC3zooACM6JAADPjQcAzYcAhtCMC//z4Lv////////////fsVb/zIQA/86IAP/SkhT/7dKd//HbsP/htV//0I4M/86JAJDOiQAAz40HLcuCAPnnxH3//////92sS//px4T/+/Lf/86KBP/LggD/7dCX///////15cf///////LdtP/NhgH8zokANc+MBZbOiAL/+/Lf//ThvP/KfQD/1Jcd///99//XnSr/zogB//747P/z3rX/yn8A/9ihMv/cq0f/zYcA/86JAJ/OigLa0pMU///////ry4z/y4EA/9CMBv/99un/3q9Q/9WZIv//////47ll/8uDAP/NhgD/zYYA/86KAP/OiQDgzooB9dOVGP//////682R/8uCAP/NhgD/+u7Y/+O6aP/juGT//fbq/9KRE//NhwD/zooA/86KAP/OigD/zokA+c+LBPTQjQj//vnv//Tguv/LggD/1Zkk//z05P/469L//ffr/+vOkv/SkRj/zIQA/86JAP/OigD/zooA/86JAPnPjQfYzIMA//LcsP///Pb/0I0K/+rJi//++/T///z2//Leuf/68Nz///v0/+fCe//NhwD/zokA/86KAP/OiQDfz40HksyEAP/cqUL//////+fEfP/IewD/682Q///89P/OhwD/zokJ/+bAdv//////4bVe/8yEAP/OigD/zokAm8+NByrOiQD3zIUA/+/Vov//////26dC/9OTGP/qyYn/z4sD/8yDAP/NhwD///z1//Lcsv/MgwD/zooA+86JADHPjQcAzokAgM2IAP/Piwn/8t2z///////pyIn/1Jgk/9GRE//Skxv/58N8///////mwXb/zIMA/86KAIrOiQAAz40HAM6JAAPOigCnzYcA/86IAv/lv3X//Pbr/////////fr////////////u05//z4sJ/86JAK/OigAGzokAAM+MBgDOiAAAzokAAs6JAIDNiADxy4MA/9COC//apj7/4bZh/+C0Xf/WnSz/zIUA882HAIfOiQAFzokAAM6IAADQkA4Az4wHAM+NBwDPjQcAz40HLM+NB5DOiwPUzYcA8cyGAPHMhgDWzYkAk8+MBjDPjQcAz40HAM+NBwDPjAcA+B8AAOAHAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAgAEAAMADAADgBwAA+B8AAA=='
};

const Head = ({
  title = METADATA.title,
  description = METADATA.description,
  keywords = METADATA.keywords,
  author = METADATA.author,
  favicon = METADATA.favicon
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, title), __jsx("meta", {
  name: "description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:type",
  content: "website",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:title",
  content: title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:description",
  content: description,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:site",
  content: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:creator",
  content: author,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/png",
  href: favicon,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "apple-touch-icon",
  href: favicon,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }
}), __jsx("meta", {
  property: "og:image",
  content: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "twitter:image",
  content: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "keywords",
  content: keywords.join(`, `),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Pacifico&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./src/components/IntroCard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/IntroCard/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/IntroCard/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "IntroCard__Holder",
  componentId: "afr6bf-0"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;"]);
const NameLabel = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "IntroCard__NameLabel",
  componentId: "afr6bf-1"
})(["color:", ";", ";"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.secondary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontFamily.logo);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "IntroCard__Title",
  componentId: "afr6bf-2"
})(["margin:", " 0 ", ";"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(4), _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(2));
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "IntroCard__Description",
  componentId: "afr6bf-3"
})(["margin:0;"]);

const IntroCard = ({
  className,
  name,
  description
}) => __jsx(Holder, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, __jsx(Title, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, "I'm ", __jsx(NameLabel, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 16
  }
}, name)), __jsx(Description, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, description));

/* harmony default export */ __webpack_exports__["default"] = (IntroCard);

/***/ }),

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-particles-js */ "react-particles-js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../GlobalStyle */ "./src/GlobalStyle.ts");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Head */ "./src/components/Head/index.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/Layout/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Particles = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_particles_js__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "Layout__Particles",
  componentId: "sc-1dlmyp1-0"
})(["", " z-index:-1;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());

const Layout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
}), __jsx(_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}), __jsx(Particles, {
  params: {
    particles: {
      number: {
        value: 30,
        density: {
          enable: false
        }
      },
      color: {
        value: _theme__WEBPACK_IMPORTED_MODULE_6__["default"].palette.primary.main
      },
      size: {
        value: 4,
        random: true,
        anim: {
          speed: 3,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: react_particles_js__WEBPACK_IMPORTED_MODULE_3__["MoveDirection"].top,
        out_mode: react_particles_js__WEBPACK_IMPORTED_MODULE_3__["OutMode"].bounce
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: react_particles_js__WEBPACK_IMPORTED_MODULE_3__["HoverMode"].slow
        },
        onclick: {
          enable: true,
          mode: react_particles_js__WEBPACK_IMPORTED_MODULE_3__["ClickMode"].repulse
        }
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 5,
          size: 0,
          opacity: 0
        },
        repulse: {
          distance: 200,
          duration: 4
        }
      }
    }
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}), children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Loader/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Loader/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/Loader/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loader__Holder",
  componentId: "j83lno-0"
})(["position:relative;", ""], ({
  isLoading
}) => isLoading ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["fadeInBuilder"])(3) : Object(_utils__WEBPACK_IMPORTED_MODULE_4__["fadeOutBuilder"])(2));
const LogoWithAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "Loader__LogoWithAnimation",
  componentId: "j83lno-1"
})(["display:flex;justify-content:center;align-items:center;", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());

const Loader = ({
  className,
  fadeOutTime,
  onLoaded,
  onAnimationEnd
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      setIsLoading(false);
      onLoaded && onLoaded();
    }, 3000);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isLoading) {
      setTimeout(() => {
        onAnimationEnd && onAnimationEnd();
      }, fadeOutTime);
    }
  }, [isLoading]);
  return __jsx(Holder, {
    className: className,
    isLoading: isLoading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx(LogoWithAnimation, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 63
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./src/components/Logo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Logo/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/Logo/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.i.withConfig({
  displayName: "Logo__Holder",
  componentId: "sc-10jgzls-0"
})(["color:", ";", ";", ";"], _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.text.secondary, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].typography.h1, _theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontFamily.logo);

const Logo = ({
  className
}) => __jsx(Holder, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, "R");

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/OverlayWithAnimation/index.tsx":
/*!*******************************************************!*\
  !*** ./src/components/OverlayWithAnimation/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animated-css */ "react-animated-css");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ArrowButton */ "./src/components/ArrowButton/index.tsx");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/OverlayWithAnimation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HolderWithAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_animated_css__WEBPACK_IMPORTED_MODULE_2__["Animated"]).withConfig({
  displayName: "OverlayWithAnimation__HolderWithAnimation",
  componentId: "sc-11tbvng-0"
})(["background:", ";width:90vw;height:90vh;padding:5vh 5vw;z-index:9;position:fixed;max-height:100vh;overflow-y:auto;"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.background.secondary);

const OverlayWithAnimation = ({
  className,
  children,
  title,
  isVisible,
  onClose
}) => __jsx(HolderWithAnimation, {
  className: className,
  animationIn: "slideInLeft",
  animationOut: "slideOutLeft",
  animationInDuration: 1000,
  animationOutDuration: 1000,
  isVisible: isVisible,
  animateOnMount: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }
}, __jsx(_ArrowButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
  direction: "Left",
  onClick: onClose,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}), __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}, title), children);

/* harmony default export */ __webpack_exports__["default"] = (OverlayWithAnimation);

/***/ }),

/***/ "./src/components/SocialIconLink/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/SocialIconLink/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/SocialIconLink/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "SocialIconLink__Link",
  componentId: "wd8y40-0"
})(["transition:0.5s ease-in-out;font-size:42px;color:", ";padding:", ";&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.primary, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(4), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.secondary);

const SocialIconLink = ({
  className,
  iconName,
  url
}) => {
  const icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[iconName]);
  return __jsx(Link, {
    href: url,
    className: className,
    target: "_blank",
    rel: "noopener",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialIconLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SocialIconLink */ "./src/components/SocialIconLink/index.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.ts");
var _jsxFileName = "/Users/psyckic/Development/CV/src/components/SocialMenu/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




//TODO: Move to data layer
const SOCIAL_DATA = [{
  url: 'https://github.com/RicardoRodrigues',
  icon: 'FaGithub'
}, {
  url: 'https://twitter.com/r11rodrigues',
  icon: 'FaTwitter'
}, {
  url: 'mailto:ricardo@rodriguez.pt',
  icon: 'FaEnvelope'
}];
const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SocialMenu__Holder",
  componentId: "lo0l30-0"
})(["display:inline-flex;text-align:center;"]);
const SocialIconLinkHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_SocialIconLink__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "SocialMenu__SocialIconLinkHolder",
  componentId: "lo0l30-1"
})(["margin:", " ", ";"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(4), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(6));

const SocialMenu = ({
  className
}) => __jsx(Holder, {
  className: className,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }
}, SOCIAL_DATA.map(({
  icon,
  url
}) => __jsx(SocialIconLinkHolder, {
  key: icon,
  iconName: icon,
  url: url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (SocialMenu);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rehooks/component-size */ "@rehooks/component-size");
/* harmony import */ var _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rehooks_component_size__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
/* harmony import */ var _components_IntroCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/IntroCard */ "./src/components/IntroCard/index.tsx");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loader */ "./src/components/Loader/index.tsx");
/* harmony import */ var _components_SocialMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SocialMenu */ "./src/components/SocialMenu/index.tsx");
/* harmony import */ var _components_OverlayWithAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/OverlayWithAnimation */ "./src/components/OverlayWithAnimation/index.tsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/About */ "./src/components/About/index.tsx");
var _jsxFileName = "/Users/psyckic/Development/CV/src/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const LoaderOverlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Loader__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({
  displayName: "pages__LoaderOverlay",
  componentId: "lsk2yb-0"
})(["", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
const FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__FadeIn",
  componentId: "lsk2yb-1"
})(["", ""], Object(_utils__WEBPACK_IMPORTED_MODULE_5__["fadeInBuilder"])(2));
const SocialMenuHolder = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_SocialMenu__WEBPACK_IMPORTED_MODULE_9__["default"]).withConfig({
  displayName: "pages__SocialMenuHolder",
  componentId: "lsk2yb-2"
})(["width:100%;justify-content:center;margin-top:", ";"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(4));
const Middle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Middle",
  componentId: "lsk2yb-3"
})(["width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;position:fixed;top:0;text-align:center;z-index:1;"]);
var MenuType;

(function (MenuType) {
  MenuType["About"] = "about";
  MenuType["Portfolio"] = "portfolio";
})(MenuType || (MenuType = {}));

const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Menu",
  componentId: "lsk2yb-4"
})(["margin-top:6vh;"]);
const PageButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PageButton",
  componentId: "lsk2yb-5"
})(["transition:.4s ease-in-out;transition-property:color,background;z-index:4;font-size:25px;display:inline-block;", " &:hover{cursor:pointer;}"], ({
  isSmall
}) => {
  console.log({
    isSmall
  });

  if (isSmall) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0 6%;font-weight:bold;text-decoration:underline;&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.primary.hover);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:10vw;height:10vw;text-transform:uppercase;text-align:center;transform:rotate(-90deg);background:transparent;position:absolute;left:0;bottom:40vh;display:flex;flex-direction:column;justify-content:center;border-radius:0px 0px 100px 100px;&:hover{background:", ";color:", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["transparentize"])(0.1, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background.secondary), _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.secondary.normal);
});
const PageButton2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__PageButton2",
  componentId: "lsk2yb-6"
})(["transition:.4s ease-in-out;transition-property:color,background;z-index:4;font-size:25px;display:inline-block;", " &:hover{cursor:pointer;}"], ({
  isSmall
}) => {
  console.log({
    isSmall
  });

  if (isSmall) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding:0 6%;font-weight:bold;text-decoration:underline;&:hover{color:", ";}"], _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.primary.hover);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["width:10vw;height:10vw;text-transform:uppercase;text-align:center;transform:rotate(90deg);background:transparent;position:absolute;right:0;bottom:40vh;display:flex;flex-direction:column;justify-content:center;border-radius:0px 0px 100px 100px;&:hover{background:", ";color:", ";}"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["transparentize"])(0.1, _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.background.secondary), _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.button.secondary.normal);
});

const Home = () => {
  const holderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    width: holderWidth
  } = _rehooks_component_size__WEBPACK_IMPORTED_MODULE_3___default()(holderRef);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: activeOverlay,
    1: setActiveOverlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: hasAnimationEnd,
    1: setHasAnimationEnd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const isSmall = holderWidth < _theme__WEBPACK_IMPORTED_MODULE_4__["default"].breakpoints.sm;
  return __jsx("div", {
    ref: holderRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, !hasAnimationEnd && __jsx(LoaderOverlay, {
    fadeOutTime: 3000,
    onLoaded: () => setIsLoaded(true),
    onAnimationEnd: () => setHasAnimationEnd(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, isLoaded && hasAnimationEnd && __jsx(FadeIn, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(Middle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, __jsx(_components_IntroCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "Ricardo Rodrigues",
    description: "Front End Developer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }), __jsx(SocialMenuHolder, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }), __jsx(Menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(PageButton, {
    isSmall: isSmall,
    onClick: () => setActiveOverlay(MenuType.About),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, "About"), __jsx(PageButton2, {
    isSmall: isSmall,
    onClick: () => setActiveOverlay(MenuType.Portfolio),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, "Folio"))), __jsx(_components_OverlayWithAnimation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: 'About',
    isVisible: MenuType.About === activeOverlay,
    onClose: () => setActiveOverlay(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx(_components_About__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);

const primary = '#08C';
const secondary = '#515052';
const terciary = '#191A21';
const white = '#FFF';
const theme = {
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    background: {
      body: white,
      secondary: primary
    },
    text: {
      primary: terciary,
      secondary: primary,
      terciary: white
    },
    button: {
      primary: {
        normal: terciary,
        hover: primary
      },
      secondary: {
        normal: white,
        hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.4, white)
      }
    }
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  fontFamily: {
    logo: {
      'font-family': '"Pacifico", cursive'
    },
    base: {
      'font-family': '"PT Sans Narrow", sans-serif'
    }
  },
  typography: {
    h1: {
      'font-weight': 'bold',
      'font-size': '68px'
    },
    h2: {
      'font-weight': 'bold',
      'font-size': '50px'
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '38px'
    },
    h4: {
      'font-weight': 'bold',
      'font-size': '28px'
    },
    body: {
      'font-weight': 'normal',
      'font-size': '14px'
    }
  },
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1620
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: fadeInBuilder, fadeOutBuilder, expandBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInBuilder", function() { return fadeInBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOutBuilder", function() { return fadeOutBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandBuilder", function() { return expandBuilder; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

function fadeInBuilder(duration, delay = 0) {
  const fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:0;}to{opacity:1;}"]);
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0;animation:", " ", "s ease-in-out forwards;animation-delay:", "s;"], fadeIn, duration, delay);
}
function fadeOutBuilder(duration, delay = 0) {
  const fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{opacity:1;}to{opacity:0;}"]);
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:1;animation:", " ", "s ease-in-out forwards;animation-delay:", "s;"], fadeIn, duration, delay);
}
function expandBuilder(duration) {
  const expandModal = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:scale(1,0);}to{transform:scale(1,1);}"]);
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " ", "s ease-in-out;"], expandModal, duration);
}

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/psyckic/Development/CV/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@rehooks/component-size":
/*!******************************************!*\
  !*** external "@rehooks/component-size" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@rehooks/component-size");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animated-css":
/*!*************************************!*\
  !*** external "react-animated-css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-css");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map