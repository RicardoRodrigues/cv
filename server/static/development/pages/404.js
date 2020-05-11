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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme */ "./src/theme.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.tsx");
var _jsxFileName = "/Users/psyckic/Development/CV/src/pages/404.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "sc-404__Layout",
  componentId: "fbn60h-0"
})(["position:relative;"]);
const Holder = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sc-404__Holder",
  componentId: "fbn60h-1"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;", ""], Object(polished__WEBPACK_IMPORTED_MODULE_2__["cover"])());
const MainTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "sc-404__MainTitle",
  componentId: "fbn60h-2"
})(["font-size:124px;letter-spacing:-7px;animation:glitch 1s linear infinite;color:", ";@keyframes glitch{2%,64%{transform:translate(2px,0) skew(0deg);}4%,60%{transform:translate(-2px,0) skew(0deg);}62%{transform:translate(0,0) skew(5deg);}}&:before,&:after{content:attr(title);position:absolute;left:0;}&:before{animation:glitchTop 1s linear infinite;clip-path:polygon(0 0,100% 0,100% 33%,0 33%);-webkit-clip-path:polygon(0 0,100% 0,100% 33%,0 33%);}@keyframes glitchTop{2%,64%{transform:translate(2px,-2px);}4%,60%{transform:translate(-2px,2px);}62%{transform:translate(13px,-1px) skew(-13deg);}}&:after{animation:glitchBotom 1.5s linear infinite;clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%);-webkit-clip-path:polygon(0 67%,100% 67%,100% 100%,0 100%);}@keyframes glitchBotom{2%,64%{transform:translate(-2px,0);}4%,60%{transform:translate(-2px,0);}62%{transform:translate(-22px,5px) skew(21deg);}}"], _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.text.secondary);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "sc-404__Text",
  componentId: "fbn60h-3"
})(["text-align:center;"]);

const NotFoundPage = () => __jsx(Layout, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 3
  }
}, __jsx(Holder, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }
}, __jsx(MainTitle, {
  title: "404",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 7
  }
}, "404"), __jsx(Text, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 7
  }
}, "You\u2019ve found a Glitch!", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }
}), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 9
  }
}), "You\u2019ve found yourself in a weird place. Probably not the one you were looking for \xAF\\_(\u30C4)_/\xAF")));

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

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

/***/ 3:
/*!*********************************!*\
  !*** multi ./src/pages/404.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/psyckic/Development/CV/src/pages/404.tsx */"./src/pages/404.tsx");


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
//# sourceMappingURL=404.js.map