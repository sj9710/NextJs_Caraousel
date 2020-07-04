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
      background: "white",
      borderradius: "50%"
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
      background: "white",
      borderradius: "50%"
    }),
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  });
}

_c2 = PrevArrow;
function Home() {
  var _this = this;

  var data = [{
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "abid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "Sidsd",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }];
  var settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: __jsx(NextArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 16
      }
    })
  };
  return __jsx("div", {
    className: "jsx-2691598046" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-2691598046",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-2691598046",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "http://kenwheeler.github.io/slick/slick/slick-theme.css",
    className: "jsx-2691598046",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-2691598046",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, "Meet our Teachers"), __jsx("p", {
    style: {
      paddingBottom: '80px'
    },
    className: "jsx-2691598046",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, "Expert teachers from top universities will guide you in all your academic needs"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), (data || []).map(function (ele, key) {
    return __jsx("div", {
      className: "jsx-2691598046" + " " + "team-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: ele.image,
      className: "jsx-2691598046" + " " + 'img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }), __jsx("h3", {
      className: "jsx-2691598046",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, ele.name), __jsx("h2", {
      className: "jsx-2691598046",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, ele.degree), __jsx("p", {
      className: "jsx-2691598046",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, ele.subject));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4009643552",
    __self: this
  }, ".container.jsx-2691598046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;padding:0 32px;max-width:1280px;}.img.jsx-2691598046{width :50%;height :50%;display :inherit;border-radius :50%;}.team-card.jsx-2691598046{opacity :0.7;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-duration:0.5s;transition-duration:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUdrQixBQUd3QixBQU1BLEFBTUEsV0FMQyxFQU1VLFVBTEwsaUJBQ0UsbUJBQ3ZCLGVBVGdCLGNBQ0MsZUFDRSxpQkFDbkIsV0FVd0IsOEVBQ0gsNkZBQ0csOEVBQ0MsbUdBQ0UsMERBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vcm95LmpwZydcclxuXHJcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgYm9yZGVycmFkaXVzIDogXCI1MCVcIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3suLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCJ9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcImFiaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkc2RcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0gXHJcbiAgXVxyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLmRlZ3JlZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIC8vICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6MDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLW91dDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIC5zbGljay1hY3RpdmUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eToxIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWNsb25lZCB7XHJcbiAgICAgIC8vICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3756548663",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-current+.slick-active .team-card{opacity:1;z-index:9999;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.slick-prev:before,.slick-next:before{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEh5QixBQUlxQixBQVFZLEFBR1osQUFLRSxVQWZILEFBV0ksQUFLZixTQWJjLEdBS2QsQ0FJcUIscUVBQ3JCLDZEQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vcm95LmpwZydcclxuXHJcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgYm9yZGVycmFkaXVzIDogXCI1MCVcIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3suLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCJ9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcImFiaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkc2RcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0gXHJcbiAgXVxyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLmRlZ3JlZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIC8vICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6MDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLW91dDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIC5zbGljay1hY3RpdmUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eToxIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWNsb25lZCB7XHJcbiAgICAgIC8vICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DbGljayIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVycmFkaXVzIiwiUHJldkFycm93IiwiSG9tZSIsImRhdGEiLCJpbWFnZSIsImltZyIsIm5hbWUiLCJkZWdyZWUiLCJzdWJqZWN0Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImVsZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsU0FEZ0IsR0FDY0QsS0FEZCxDQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxLQURLLEdBQ2NGLEtBRGQsQ0FDTEUsS0FESztBQUFBLE1BQ0VDLE9BREYsR0FDY0gsS0FEZCxDQUNFRyxPQURGO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUVGLFNBRGI7QUFFRSxTQUFLLGtDQUFPQyxLQUFQO0FBQWNFLGFBQU8sRUFBRSxPQUF2QjtBQUFnQ0MsZ0JBQVUsRUFBRSxPQUE1QztBQUFxREMsa0JBQVksRUFBRztBQUFwRSxNQUZQO0FBR0UsV0FBTyxFQUFFSCxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztLQVZRSixTOztBQVlULFNBQVNRLFNBQVQsQ0FBbUJQLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ2NELEtBRGQsQ0FDaEJDLFNBRGdCO0FBQUEsTUFDTEMsS0FESyxHQUNjRixLQURkLENBQ0xFLEtBREs7QUFBQSxNQUNFQyxPQURGLEdBQ2NILEtBRGQsQ0FDRUcs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LENBQUNOLElBQUksSUFBSSxFQUFULEVBQWFjLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0IsV0FDRTtBQUFBLDBDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQXVCLFNBQUcsRUFBRUQsR0FBRyxDQUFDZCxLQUFoQztBQUFBLDBDQUFpQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2MsR0FBRyxDQUFDWixJQUFULENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1ksR0FBRyxDQUFDWCxNQUFULENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVcsR0FBRyxDQUFDVixPQUFSLENBSkYsQ0FERjtBQVFELEdBVEQsQ0FGSixDQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGt2TkFERjtBQXdGRDtNQXpJdUJOLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmEzOGZmYTQ3Y2U5MDNmY2RiMzAyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vcm95LmpwZydcclxuXHJcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgYm9yZGVycmFkaXVzIDogXCI1MCVcIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3suLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCJ9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcImFiaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkc2RcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0gXHJcbiAgXVxyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLmRlZ3JlZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIC8vICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6MDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLW91dDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIC5zbGljay1hY3RpdmUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eToxIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWNsb25lZCB7XHJcbiAgICAgIC8vICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=