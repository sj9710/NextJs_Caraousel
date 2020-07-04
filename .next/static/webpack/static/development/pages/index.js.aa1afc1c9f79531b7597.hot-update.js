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
    className: "jsx-1018280322" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1018280322" + " " + "card-wrapper",
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
    className: "jsx-1018280322",
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
    className: "jsx-1018280322",
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
    className: "jsx-1018280322",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-1018280322",
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
    className: "jsx-1018280322",
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
      className: "jsx-1018280322" + " " + "team-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: ele.image,
      className: "jsx-1018280322" + " " + 'img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), __jsx("h2", {
      className: "jsx-1018280322",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, ele.name), __jsx("h3", {
      className: "jsx-1018280322",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, ele.degree), __jsx("p", {
      className: "jsx-1018280322",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, ele.subject));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1086988769",
    __self: this
  }, ".container.jsx-1018280322{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-wrapper.jsx-1018280322{width:100%;margin:60px 0 100px;max-width:800px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.img.jsx-1018280322{width :50%;height :50%;display :inherit;border-radius :50%;}.team-card.jsx-1018280322{opacity :0.7;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-duration:0.5s;transition-duration:0.5s;}.team-card.jsx-1018280322 h2.jsx-1018280322{color:#525F7F;margin:30px 0 0 0;line-height:25px;}.team-card.jsx-1018280322 h3.jsx-1018280322{color:#525F7F;margin:8px 0px 0px 0px;}.team-card.jsx-1018280322 p.jsx-1018280322{color:rgba(82,95,127,0.497707);margin:0;margin-top:0px;font-size:16px;margin-top:10px;line-height:19px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdrQixBQUdzQixBQU1BLEFBT0UsQUFNQSxBQVNDLEFBS0EsQUFJb0IsV0FwQ3JCLEFBTU8sQUFPTixFQU1VLENBU04sQUFLSyxTQW5CSixRQVBILEFBOEJQLENBUlEsS0FLbkIsR0FuQnVCLEFBdUJOLE9BOUJHLEVBc0JwQixNQVNpQixJQXZCakIsV0F3QmtCLGVBdkNPLENBd0NOLGlCQUNuQixlQWpDb0IsYUFXSSxLQVZ4QixnREFSQSx5QkFtQnFCLDZGQUNHLDhFQUNDLG1HQUNFLDBEQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCIgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBib3JkZXJyYWRpdXMgOiBcIjUwJVwifX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIDxoMz5NZWV0IG91ciBUZWFjaGVyczwvaDM+XHJcbiAgICAgPHAgc3R5bGUgPXt7cGFkZGluZ0JvdHRvbTogJzgwcHgnfX0+RXhwZXJ0IHRlYWNoZXJzIGZyb20gdG9wIHVuaXZlcnNpdGllcyB3aWxsIGd1aWRlIHlvdSBpbiBhbGwgeW91ciBhY2FkZW1pYyBuZWVkczwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChkYXRhIHx8IFtdKS5tYXAoKGVsZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtlbGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2VsZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2VsZS5kZWdyZWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntlbGUuc3ViamVjdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMTAwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoODIsIDk1LCAxMjcsIDAuNDk3NzA3KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgLy8gICAuc2xpY2stc2xpZGUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eTowO1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2Utb3V0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWFjdGl2ZSB7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OjEhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAuc2xpY2stY2xvbmVkIHtcclxuICAgICAgLy8gICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "600686602",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-current+.slick-active .team-card{opacity:1;z-index:9999;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.slick-current+.slick-active .team-card>img{width:180px;height:180px;}.slick-prev:before,.slick-next:before{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUp5QixBQUlxQixBQVFZLEFBR1osQUFNRSxBQUtBLFVBckJILEFBV0ksQUFXZixFQUxlLE9BZEQsR0FLZCxDQUlxQixFQU1yQixtRUFMQSw2REFUQSIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCIgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBib3JkZXJyYWRpdXMgOiBcIjUwJVwifX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIDxoMz5NZWV0IG91ciBUZWFjaGVyczwvaDM+XHJcbiAgICAgPHAgc3R5bGUgPXt7cGFkZGluZ0JvdHRvbTogJzgwcHgnfX0+RXhwZXJ0IHRlYWNoZXJzIGZyb20gdG9wIHVuaXZlcnNpdGllcyB3aWxsIGd1aWRlIHlvdSBpbiBhbGwgeW91ciBhY2FkZW1pYyBuZWVkczwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChkYXRhIHx8IFtdKS5tYXAoKGVsZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtlbGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2VsZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2VsZS5kZWdyZWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntlbGUuc3ViamVjdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMTAwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoODIsIDk1LCAxMjcsIDAuNDk3NzA3KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgLy8gICAuc2xpY2stc2xpZGUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eTowO1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2Utb3V0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWFjdGl2ZSB7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OjEhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAuc2xpY2stY2xvbmVkIHtcclxuICAgICAgLy8gICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwib25DbGljayIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVycmFkaXVzIiwiUHJldkFycm93IiwiSG9tZSIsImRhdGEiLCJpbWFnZSIsImltZyIsIm5hbWUiLCJkZWdyZWUiLCJzdWJqZWN0Iiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsImVsZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsU0FEZ0IsR0FDY0QsS0FEZCxDQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxLQURLLEdBQ2NGLEtBRGQsQ0FDTEUsS0FESztBQUFBLE1BQ0VDLE9BREYsR0FDY0gsS0FEZCxDQUNFRyxPQURGO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUVGLFNBRGI7QUFFRSxTQUFLLGtDQUFPQyxLQUFQO0FBQWNFLGFBQU8sRUFBRSxPQUF2QjtBQUFnQ0MsZ0JBQVUsRUFBRSxPQUE1QztBQUFxREMsa0JBQVksRUFBRztBQUFwRSxNQUZQO0FBR0UsV0FBTyxFQUFFSCxPQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQVFEOztLQVZRSixTOztBQVlULFNBQVNRLFNBQVQsQ0FBbUJQLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLFNBRGdCLEdBQ2NELEtBRGQsQ0FDaEJDLFNBRGdCO0FBQUEsTUFDTEMsS0FESyxHQUNjRixLQURkLENBQ0xFLEtBREs7QUFBQSxNQUNFQyxPQURGLEdBQ2NILEtBRGQsQ0FDRUcs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REFBRCx5RkFBWVAsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUksQ0FBQ04sSUFBSSxJQUFJLEVBQVQsRUFBYWMsR0FBYixDQUFpQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM3QixXQUNFO0FBQUEsMENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBdUIsU0FBRyxFQUFFRCxHQUFHLENBQUNkLEtBQWhDO0FBQUEsMENBQWlCLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLYyxHQUFHLENBQUNaLElBQVQsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLWSxHQUFHLENBQUNYLE1BQVQsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVyxHQUFHLENBQUNWLE9BQVIsQ0FKRixDQURGO0FBUUQsR0FURCxDQUZKLENBVkEsQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnNlBBREY7QUF1SEQ7TUF4S3VCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hYTFhZmMxYzlmNzk1MzFiNzU5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgZGlzcGxheTogXCJibG9ja1wiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlcnJhZGl1cyA6IFwiNTAlXCIgfX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXt7Li4uc3R5bGUsIGRpc3BsYXk6IFwiYmxvY2tcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBib3JkZXJyYWRpdXMgOiBcIjUwJVwifX1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBuZXh0QXJyb3c6IDxOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxQcmV2QXJyb3cgLz5cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGNoYXJTZXQ9XCJVVEYtOFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLXRoZW1lLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgIDxoMz5NZWV0IG91ciBUZWFjaGVyczwvaDM+XHJcbiAgICAgPHAgc3R5bGUgPXt7cGFkZGluZ0JvdHRvbTogJzgwcHgnfX0+RXhwZXJ0IHRlYWNoZXJzIGZyb20gdG9wIHVuaXZlcnNpdGllcyB3aWxsIGd1aWRlIHlvdSBpbiBhbGwgeW91ciBhY2FkZW1pYyBuZWVkczwvcD5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIChkYXRhIHx8IFtdKS5tYXAoKGVsZSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lID0gJ2ltZycgc3JjPXtlbGUuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2VsZS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2VsZS5kZWdyZWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntlbGUuc3ViamVjdH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NsaWRlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMTAwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICB3aWR0aCA6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5IDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHkgOiAwLjc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDIge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoODIsIDk1LCAxMjcsIDAuNDk3NzA3KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2xpY2stY3VycmVudCArIC5zbGljay1hY3RpdmUgLnRlYW0tY2FyZHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgLy8gICAuc2xpY2stc2xpZGUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eTowO1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2Utb3V0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgICBcclxuICAgICAgLy8gLnNsaWNrLWFjdGl2ZSB7XHJcbiAgICAgIC8vICAgICBvcGFjaXR5OjEhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyAuc2xpY2stY2xvbmVkIHtcclxuICAgICAgLy8gICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==