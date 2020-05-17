webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");

var primary = '#08C';
var secondary = '#515052';
var terciary = '#191A21';
var white = '#FFF';
var theme = {
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
  spacing: function spacing() {
    var multiplier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return "".concat(4 * multiplier, "px");
  },
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
    h5: {
      'font-weight': 'bold',
      'font-size': '24px'
    },
    body: {
      'font-weight': 'normal',
      'font-size': '20px'
    },
    small: {
      'font-weight': 'normal',
      'font-size': '18px'
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

/***/ })

})
//# sourceMappingURL=index.js.103b16f5d7aa3ea5bf75.hot-update.js.map