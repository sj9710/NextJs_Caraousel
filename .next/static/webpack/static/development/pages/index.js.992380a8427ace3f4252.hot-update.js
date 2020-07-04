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
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3099861551" + " " + "card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-3099861551",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    className: "jsx-3099861551",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "http://kenwheeler.github.io/slick/slick/slick-theme.css",
    className: "jsx-3099861551",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-3099861551",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, "Meet our Teachers"), __jsx("p", {
    style: {
      paddingBottom: '80px'
    },
    className: "jsx-3099861551",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "Expert teachers from top universities will guide you in all your academic needs"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }), (data || []).map(function (ele, key) {
    return __jsx("div", {
      className: "jsx-3099861551" + " " + "team-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: ele.image,
      className: "jsx-3099861551" + " " + 'img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), __jsx("h2", {
      className: "jsx-3099861551",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, ele.name), __jsx("h3", {
      className: "jsx-3099861551",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, ele.degree), __jsx("p", {
      className: "jsx-3099861551",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, ele.subject));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "909134540",
    __self: this
  }, ".card-wrapper.jsx-3099861551{width:100%;margin:60px 0 100px;max-width:800px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.container.jsx-3099861551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.img.jsx-3099861551{width :50%;height :50%;display :inherit;border-radius :50%;}.team-card.jsx-3099861551{opacity :0.7;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-duration:0.5s;transition-duration:0.5s;}.team-card.jsx-3099861551 h2.jsx-3099861551{color:#525F7F;margin:30px 0 0 0;line-height:25px;}.team-card.jsx-3099861551 h3.jsx-3099861551{color:#525F7F;margin:8px 0px 0px 0px;}.team-card.jsx-3099861551 p.jsx-3099861551{color:rgba(82,95,127,0.497707);margin:0;margin-top:0px;font-size:16px;margin-top:10px;line-height:19px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0drQixBQUdzQixBQU9FLEFBSUEsQUFNQSxBQVNDLEFBS0EsQUFJb0IsV0FsQ2QsQUFXTixFQU1VLENBU04sQUFLSyxTQW5CSixRQVhILEFBa0NQLENBUlEsS0FLbkIsR0FuQnVCLEFBdUJOLE9BbENHLEVBMEJwQixNQVNpQixJQXZCakIsV0F3QmtCLElBL0JPLFlBZ0NOLGlCQUNuQixlQXJDb0IsYUFlSSxLQWR4QixxQ0FJQSxvQ0FXcUIsNkZBQ0csOEVBQ0MsbUdBQ0UsMERBQzNCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBpbWcgZnJvbSAnLi4vcm95LmpwZydcclxuXHJcbmZ1bmN0aW9uIE5leHRBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgYm9yZGVycmFkaXVzIDogXCI1MCVcIiB9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3suLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCJ9fVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcImFiaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkc2RcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0gXHJcbiAgXVxyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLmRlZ3JlZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogNjBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCA5NSwgMTI3LCAwLjQ5NzcwNyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgLnRlYW0tY2FyZCA+IGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZXtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgIC8vICAgLnNsaWNrLXNsaWRlIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6MDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLW91dDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIC5zbGljay1hY3RpdmUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eToxIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgIHRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWNsb25lZCB7XHJcbiAgICAgIC8vICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "600686602",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-current+.slick-active .team-card{opacity:1;z-index:9999;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.slick-current+.slick-active .team-card>img{width:180px;height:180px;}.slick-prev:before,.slick-next:before{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0p5QixBQUlxQixBQVFZLEFBR1osQUFNRSxBQUtBLFVBckJILEFBV0ksQUFXZixFQUxlLE9BZEQsR0FLZCxDQUlxQixFQU1yQixtRUFMQSw2REFUQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCIgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBib3JkZXJyYWRpdXMgOiBcIjUwJVwifX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIDxoMz5NZWV0IG91ciBUZWFjaGVyczwvaDM+XHJcbiAgICAgPHAgc3R5bGUgPXt7cGFkZGluZ0JvdHRvbTogJzgwcHgnfX0+RXhwZXJ0IHRlYWNoZXJzIGZyb20gdG9wIHVuaXZlcnNpdGllcyB3aWxsIGd1aWRlIHlvdSBpbiBhbGwgeW91ciBhY2FkZW1pYyBuZWVkczwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChkYXRhIHx8IFtdKS5tYXAoKGVsZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtlbGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2VsZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2VsZS5kZWdyZWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntlbGUuc3ViamVjdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2FyZC13cmFwcGVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDYwcHggMCAxMDBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDAuNztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg4MiwgOTUsIDEyNywgMC40OTc3MDcpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmQgPiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAvLyAgIC5zbGljay1zbGlkZSB7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OjA7XHJcbiAgICAgIC8vICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1vdXQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAuc2xpY2stYWN0aXZlIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6MSFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1pbjtcclxuICAgICAgLy8gICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC8vIC5zbGljay1jbG9uZWQge1xyXG4gICAgICAvLyAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DbGljayIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVycmFkaXVzIiwiUHJldkFycm93IiwiSG9tZSIsImRhdGEiLCJpbWFnZSIsImltZyIsIm5hbWUiLCJkZWdyZWUiLCJzdWJqZWN0Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImVsZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsU0FEZ0IsR0FDY0QsS0FEZCxDQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxLQURLLEdBQ2NGLEtBRGQsQ0FDTEUsS0FESztBQUFBLE1BQ0VDLE9BREYsR0FDY0gsS0FEZCxDQUNFRyxPQURGO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUVGLFNBRGI7QUFFRSxTQUFLLGtDQUFPQyxLQUFQO0FBQWNFLGFBQU8sRUFBRSxPQUF2QjtBQUFnQ0MsZ0JBQVUsRUFBRSxPQUE1QztBQUFxREMsa0JBQVksRUFBRztBQUFwRSxNQUZQO0FBR0UsV0FBTyxFQUFFSCxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztLQVZRSixTOztBQVlULFNBQVNRLFNBQVQsQ0FBbUJQLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ2NELEtBRGQsQ0FDaEJDLFNBRGdCO0FBQUEsTUFDTEMsS0FESyxHQUNjRixLQURkLENBQ0xFLEtBREs7QUFBQSxNQUNFQyxPQURGLEdBQ2NILEtBRGQsQ0FDRUcs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QUMsa0RBQUQseUZBQVlQLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVJLENBQUNOLElBQUksSUFBSSxFQUFULEVBQWFjLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDN0IsV0FDRTtBQUFBLDBDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQXVCLFNBQUcsRUFBRUQsR0FBRyxDQUFDZCxLQUFoQztBQUFBLDBDQUFpQixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2MsR0FBRyxDQUFDWixJQUFULENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1ksR0FBRyxDQUFDWCxNQUFULENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVcsR0FBRyxDQUFDVixPQUFSLENBSkYsQ0FERjtBQVFELEdBVEQsQ0FGSixDQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHczUEFERixDQURGO0FBcUhEO01BdEt1Qk4sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTkyMzgwYTg0MjdhY2UzZjQyNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi9yb3kuanBnJ1xyXG5cclxuZnVuY3Rpb24gTmV4dEFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBib3JkZXJyYWRpdXMgOiBcIjUwJVwiIH19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQcmV2QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17ey4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgYm9yZGVycmFkaXVzIDogXCI1MCVcIn19XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiYWJpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRzZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSBcclxuICBdXHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSB8fCBbXSkubWFwKChlbGUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17ZWxlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntlbGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntlbGUuZGVncmVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57ZWxlLnN1YmplY3R9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMTAwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoODIsIDk1LCAxMjcsIDAuNDk3NzA3KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgLy8gICAuc2xpY2stc2xpZGUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eTowO1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2Utb3V0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWFjdGl2ZSB7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OjEhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAuc2xpY2stY2xvbmVkIHtcclxuICAgICAgLy8gICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9