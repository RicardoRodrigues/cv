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
        hover: Object(polished__WEBPACK_IMPORTED_MODULE_0__["transparentize"])(0.6, white)
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
      'font-size': '22px'
    },
    body: {
      'font-weight': 'normal',
      'font-size': '14px'
    }
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1620px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ })

})
//# sourceMappingURL=index.js.90c13a145125f95deb9d.hot-update.js.map