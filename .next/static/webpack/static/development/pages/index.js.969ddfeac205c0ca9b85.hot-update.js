webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _roy_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roy.jpg */ "./roy.jpg");
/* harmony import */ var _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_roy_jpg__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Roy\\Desktop\\Task\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function NextArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return __jsx("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "block",
      background: "red"
    }),
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  });
}

_c = NextArrow;

function PrevArrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return __jsx("div", {
    className: className,
    style: _objectSpread(_objectSpread({}, style), {}, {
      display: "block",
      background: "green"
    }),
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  });
}

_c2 = PrevArrow;
function Home() {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: __jsx(NextArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }
    })
  };
  return __jsx("div", {
    className: "jsx-785143493" + " " + "cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "http://kenwheeler.github.io/slick/slick/slick-theme.css",
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, "Meet our Teachers"), __jsx("p", {
    style: {
      paddingBottom: '80px'
    },
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, "Expert teachers from top universities will guide you in all your academic needs"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-785143493" + " " + 'img',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Roy"), __jsx("h2", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "B.Tech, IIT"), __jsx("p", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Spainish")), __jsx("div", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-785143493" + " " + 'img',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Adarsh Bhalotia"), __jsx("h2", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "MCA, NIT"), __jsx("p", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Spainish")), __jsx("div", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-785143493" + " " + 'img',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Abid hussain"), __jsx("h2", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "B.Tech, MIT"), __jsx("p", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Spainish")), __jsx("div", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-785143493" + " " + 'img',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, " Abdul "), __jsx("h2", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "M.Tech, IIT"), __jsx("p", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Spainish")), __jsx("div", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: "jsx-785143493" + " " + 'img',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx("h3", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Anil Janghir"), __jsx("h2", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "B.Tech, IIT"), __jsx("p", {
    className: "jsx-785143493",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "Spainish"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2911015821",
    __self: this
  }, ".cont.jsx-785143493{text-align :center;padding:50px 40px 40px 40px;}.img.jsx-785143493{width :50%;height :50%;display :inherit;border-radius :50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0ZrQixBQUdnQyxBQUlSLFdBQ0MsUUFKZ0IsSUFLWCxpQkFDRSxPQUx2QixZQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vcm95LmpwZydcclxuXHJcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwicmVkXCIgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJncmVlblwiIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcclxuICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIDxoMz5NZWV0IG91ciBUZWFjaGVyczwvaDM+XHJcbiAgICAgPHAgc3R5bGUgPXt7cGFkZGluZ0JvdHRvbTogJzgwcHgnfX0+RXhwZXJ0IHRlYWNoZXJzIGZyb20gdG9wIHVuaXZlcnNpdGllcyB3aWxsIGd1aWRlIHlvdSBpbiBhbGwgeW91ciBhY2FkZW1pYyBuZWVkczwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2ltZ30gLz5cclxuICAgICAgICAgIDxoMz5Sb3k8L2gzPlxyXG4gICAgICAgICAgPGgyPkIuVGVjaCwgSUlUPC9oMj5cclxuICAgICAgICAgIDxwPlNwYWluaXNoPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2ltZ30gLz5cclxuICAgICAgICAgIDxoMz5BZGFyc2ggQmhhbG90aWE8L2gzPlxyXG4gICAgICAgICAgPGgyPk1DQSwgTklUPC9oMj5cclxuICAgICAgICAgIDxwPlNwYWluaXNoPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2ltZ30gLz5cclxuICAgICAgICAgIDxoMz5BYmlkIGh1c3NhaW48L2gzPlxyXG4gICAgICAgICAgPGgyPkIuVGVjaCwgTUlUPC9oMj5cclxuICAgICAgICAgIDxwPlNwYWluaXNoPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2ltZ30gLz5cclxuICAgICAgICAgIDxoMz4gQWJkdWwgPC9oMz5cclxuICAgICAgICAgIDxoMj5NLlRlY2gsIElJVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+QW5pbCBKYW5naGlyPC9oMz5cclxuICAgICAgICAgIDxoMj5CLlRlY2gsIElJVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnR7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggNDBweCA0MHB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "715661889",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-prev:before,.slick-next:before{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZ5QixBQUlxQixBQVFZLEFBR1YsVUFWSCxBQVdYLFNBUmMsR0FLZCxtSUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcInJlZFwiIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwiZ3JlZW5cIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+Um95PC9oMz5cclxuICAgICAgICAgIDxoMj5CLlRlY2gsIElJVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+QWRhcnNoIEJoYWxvdGlhPC9oMz5cclxuICAgICAgICAgIDxoMj5NQ0EsIE5JVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+QWJpZCBodXNzYWluPC9oMz5cclxuICAgICAgICAgIDxoMj5CLlRlY2gsIE1JVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+IEFiZHVsIDwvaDM+XHJcbiAgICAgICAgICA8aDI+TS5UZWNoLCBJSVQ8L2gyPlxyXG4gICAgICAgICAgPHA+U3BhaW5pc2g8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17aW1nfSAvPlxyXG4gICAgICAgICAgPGgzPkFuaWwgSmFuZ2hpcjwvaDM+XHJcbiAgICAgICAgICA8aDI+Qi5UZWNoLCBJSVQ8L2gyPlxyXG4gICAgICAgICAgPHA+U3BhaW5pc2g8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDQwcHggNDBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"));
}
_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "NextArrow");
$RefreshReg$(_c2, "PrevArrow");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DbGljayIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiUHJldkFycm93IiwiSG9tZSIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImluZmluaXRlIiwiY2VudGVyUGFkZGluZyIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicGFkZGluZ0JvdHRvbSIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsU0FEZ0IsR0FDY0QsS0FEZCxDQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxLQURLLEdBQ2NGLEtBRGQsQ0FDTEUsS0FESztBQUFBLE1BQ0VDLE9BREYsR0FDY0gsS0FEZCxDQUNFRyxPQURGO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUVGLFNBRGI7QUFFRSxTQUFLLGtDQUFPQyxLQUFQO0FBQWNFLGFBQU8sRUFBRSxPQUF2QjtBQUFnQ0MsZ0JBQVUsRUFBRTtBQUE1QyxNQUZQO0FBR0UsV0FBTyxFQUFFRixPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQU9EOztLQVRRSixTOztBQVdULFNBQVNPLFNBQVQsQ0FBbUJOLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ2NELEtBRGQsQ0FDaEJDLFNBRGdCO0FBQUEsTUFDTEMsS0FESyxHQUNjRixLQURkLENBQ0xFLEtBREs7QUFBQSxNQUNFQyxPQURGLEdBQ2NILEtBRGQsQ0FDRUcsT0FERjtBQUV4QixTQUNFO0FBQ0UsYUFBUyxFQUFFRixTQURiO0FBRUUsU0FBSyxrQ0FBT0MsS0FBUDtBQUFjRSxhQUFPLEVBQUUsT0FB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YWMyMDVjMGNhOWI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcInJlZFwiIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwiZ3JlZW5cIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwiY2VudGVyXCIsXHJcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjYwcHhcIixcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29udFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+Um95PC9oMz5cclxuICAgICAgICAgIDxoMj5CLlRlY2gsIElJVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+QWRhcnNoIEJoYWxvdGlhPC9oMz5cclxuICAgICAgICAgIDxoMj5NQ0EsIE5JVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+QWJpZCBodXNzYWluPC9oMz5cclxuICAgICAgICAgIDxoMj5CLlRlY2gsIE1JVDwvaDI+XHJcbiAgICAgICAgICA8cD5TcGFpbmlzaDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtpbWd9IC8+XHJcbiAgICAgICAgICA8aDM+IEFiZHVsIDwvaDM+XHJcbiAgICAgICAgICA8aDI+TS5UZWNoLCBJSVQ8L2gyPlxyXG4gICAgICAgICAgPHA+U3BhaW5pc2g8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17aW1nfSAvPlxyXG4gICAgICAgICAgPGgzPkFuaWwgSmFuZ2hpcjwvaDM+XHJcbiAgICAgICAgICA8aDI+Qi5UZWNoLCBJSVQ8L2gyPlxyXG4gICAgICAgICAgPHA+U3BhaW5pc2g8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250e1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4IDQwcHggNDBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=