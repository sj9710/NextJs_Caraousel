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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _roy_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roy.jpg */ "./roy.jpg");
/* harmony import */ var _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_roy_jpg__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Roy\\Desktop\\Task\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function NextArrow(props) {
  var onClick = props.onClick;
  return __jsx("div", {
    className: "team-next-btn",
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
  var onClick = props.onClick;
  return __jsx("div", {
    className: "team-prev-btn",
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
  var _this = this;

  var data = [{
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "abid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "Sidsd",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }, {
    image: _roy_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    name: "Sid",
    degree: "lorem ipsum",
    subject: "something"
  }];
  var settings = {
    className: "team-slider",
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: __jsx(NextArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(PrevArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 16
      }
    })
  };
  return __jsx("div", {
    className: "jsx-3025020771" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3025020771" + " " + "card-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    className: "jsx-3025020771",
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
    className: "jsx-3025020771",
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
    className: "jsx-3025020771",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-3025020771",
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
    className: "jsx-3025020771",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, "Expert teachers from top universities will guide you in all your academic needs"), __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), (data || []).map(function (ele, key) {
    return __jsx("div", {
      className: "jsx-3025020771" + " " + "team-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: ele.image,
      className: "jsx-3025020771" + " " + 'img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }), __jsx("h2", {
      className: "jsx-3025020771",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, ele.name), __jsx("h3", {
      className: "jsx-3025020771",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, ele.degree), __jsx("p", {
      className: "jsx-3025020771",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, ele.subject));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1086988769",
    __self: this
  }, ".container.jsx-3025020771{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-wrapper.jsx-3025020771{width:100%;margin:60px 0 100px;max-width:800px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.img.jsx-3025020771{width :50%;height :50%;display :inherit;border-radius :50%;}.team-card.jsx-3025020771{opacity :0.7;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-duration:0.5s;transition-duration:0.5s;}.team-card.jsx-3025020771 h2.jsx-3025020771{color:#525F7F;margin:30px 0 0 0;line-height:25px;}.team-card.jsx-3025020771 h3.jsx-3025020771{color:#525F7F;margin:8px 0px 0px 0px;}.team-card.jsx-3025020771 p.jsx-3025020771{color:rgba(82,95,127,0.497707);margin:0;margin-top:0px;font-size:16px;margin-top:10px;line-height:19px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0drQixBQUdzQixBQU1BLEFBT0UsQUFNQSxBQVNDLEFBS0EsQUFJb0IsV0FwQ3JCLEFBTU8sQUFPTixFQU1VLENBU04sQUFLSyxTQW5CSixRQVBILEFBOEJQLENBUlEsS0FLbkIsR0FuQnVCLEFBdUJOLE9BOUJHLEVBc0JwQixNQVNpQixJQXZCakIsV0F3QmtCLGVBdkNPLENBd0NOLGlCQUNuQixlQWpDb0IsYUFXSSxLQVZ4QixnREFSQSx5QkFtQnFCLDZGQUNHLDhFQUNDLG1HQUNFLDBEQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRlYW0tbmV4dC1idG5cIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgLz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLXByZXYtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6XCJ0ZWFtLXNsaWRlclwiLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSB8fCBbXSkubWFwKChlbGUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17ZWxlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntlbGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntlbGUuZGVncmVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57ZWxlLnN1YmplY3R9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogNjBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCA5NSwgMTI3LCAwLjQ5NzcwNyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLWNhcmQgPiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLXNsaWRlcntcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVhbS1uZXh0LWJ0biwgLnRlYW0tcHJldi1idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICMzM0M5REM7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA0O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNjk2MTEpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZWFtLXByZXYtYnRuIHtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2xhdGU6IHRyYW5zZm9ybVkoLTUwJSk7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAudGVhbS1uZXh0LWJ0biB7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2Zvcm1ZKC01MCUpO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3152759243",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-current+.slick-active .team-card{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.team-card>img{width:180px;height:180px;}.slick-prev:before,.slick-next:before{color:red;}.team-slider{margin:0px 20px;}.team-next-btn,.team-prev-btn{color:#33C9DC;width:40px;position:absolute;height:40px;padding:0;z-index:4;border-radius:50%;background:#FFFFFF;box-shadow:0px 2px 4px rgba(0,0,0,0.169611);margin-top:-40px;}.team-prev-btn{top:50%;-webkit-translate:transformY(-50%);translate:transformY(-50%);left:20px;}.team-next-btn{top:50%;-webkit-translate:transformY(-50%);translate:transformY(-50%);right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0p5QixBQUlxQixBQVFZLEFBR1osQUFLRSxBQUtBLEFBR0ksQUFJRixBQWFSLEFBS0EsUUFKbUIsQUFLQSxFQTlDaEIsQUFXVSxBQVVyQixFQUxlLEVBWUYsRUFKYixHQXJCYyxHQUtkLEdBU0EsQUFZb0Isa0JBQ04sWUFDRixVQUNBLEtBVUYsQUFLQyxLQWRTLElBckJwQixDQStCRixDQUtBLFlBZHVCLG1CQUM0Qix5Q0EvQmpELEdBZ0NtQixpQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxSb3lcXERlc2t0b3BcXFRhc2tcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi9yb3kuanBnJ1xyXG5cclxuZnVuY3Rpb24gTmV4dEFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLW5leHQtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidGVhbS1wcmV2LWJ0blwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiYWJpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRzZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSBcclxuICBdXHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgY2xhc3NOYW1lOlwidGVhbS1zbGlkZXJcIixcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLmRlZ3JlZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC13cmFwcGVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDYwcHggMCAxMDBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDAuNztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg4MiwgOTUsIDEyNywgMC40OTc3MDcpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1zbGlkZXJ7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlYW0tbmV4dC1idG4sIC50ZWFtLXByZXYtYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzNDOURDO1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTY5NjExKTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVhbS1wcmV2LWJ0biB7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2Zvcm1ZKC01MCUpO1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRlYW0tbmV4dC1idG4ge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWSgtNTAlKTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsIm9uQ2xpY2siLCJQcmV2QXJyb3ciLCJIb21lIiwiZGF0YSIsImltYWdlIiwiaW1nIiwibmFtZSIsImRlZ3JlZSIsInN1YmplY3QiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic3BlZWQiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJwYWRkaW5nQm90dG9tIiwibWFwIiwiZWxlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ0pELEtBREksQ0FDaEJDLE9BRGdCO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLFdBQU8sRUFBRUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFPRDs7S0FUUUYsUzs7QUFXVCxTQUFTRyxTQUFULENBQW1CRixLQUFuQixFQUEwQjtBQUFBLE1BQ2hCQyxPQURnQixHQUNKRCxLQURJLENBQ2hCQyxPQURnQjtBQUV4QixTQUNFO0FBQ0UsYUFBUyxFQUFDLGVBRFo7QUFFRSxXQUFPLEVBQUVBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBTUQ7O01BUlFDLFM7QUFTTSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBRTdCLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQ0VDLFNBQUssRUFBRUMsK0NBRFQ7QUFFRUMsUUFBSSxFQUFFLEtBRlI7QUFHRUMsVUFBTSxFQUFFLGFBSFY7QUFJRUMsV0FBTyxFQUFFO0FBSlgsR0FEVyxFQU9YO0FBQ0VKLFNBQUssRUFBRUMsK0NBRFQ7QUFFRUMsUUFBSSxFQUFFLE1B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QUE7QUFBQTtBQUFBO0FBQUEsT0FBS2EsR0FBRyxDQUFDWixNQUFULENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVksR0FBRyxDQUFDWCxPQUFSLENBSkYsQ0FERjtBQVFELEdBVEQsQ0FGSixDQVZBLENBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaW5SQURGO0FBc0lEO01BeEx1Qk4sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMGRkN2VhNTMxOTU5NDIwZWM5MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGltZyBmcm9tICcuLi9yb3kuanBnJ1xyXG5cclxuZnVuY3Rpb24gTmV4dEFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLW5leHQtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgIC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByZXZBcnJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidGVhbS1wcmV2LWJ0blwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiYWJpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRzZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSBcclxuICBdXHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgY2xhc3NOYW1lOlwidGVhbS1zbGlkZXJcIixcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIG5leHRBcnJvdzogPE5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFByZXZBcnJvdyAvPlxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhclNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2svc2xpY2svc2xpY2stdGhlbWUuY3NzXCIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgPGgzPk1lZXQgb3VyIFRlYWNoZXJzPC9oMz5cclxuICAgICA8cCBzdHlsZSA9e3twYWRkaW5nQm90dG9tOiAnODBweCd9fT5FeHBlcnQgdGVhY2hlcnMgZnJvbSB0b3AgdW5pdmVyc2l0aWVzIHdpbGwgZ3VpZGUgeW91IGluIGFsbCB5b3VyIGFjYWRlbWljIG5lZWRzPC9wPlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgKGRhdGEgfHwgW10pLm1hcCgoZWxlLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWUgPSAnaW1nJyBzcmM9e2VsZS5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZWxlLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz57ZWxlLmRlZ3JlZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+e2VsZS5zdWJqZWN0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC13cmFwcGVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDYwcHggMCAxMDBweDtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgIHdpZHRoIDogNTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzIDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eSA6IDAuNztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogIzUyNUY3RjtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgzIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgcCB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg4MiwgOTUsIDEyNywgMC40OTc3MDcpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGljay1jdXJyZW50ICsgLnNsaWNrLWFjdGl2ZSAudGVhbS1jYXJke1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVhbS1jYXJkID4gaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1zbGlkZXJ7XHJcbiAgICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlYW0tbmV4dC1idG4sIC50ZWFtLXByZXYtYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzNDOURDO1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTY5NjExKTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVhbS1wcmV2LWJ0biB7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNsYXRlOiB0cmFuc2Zvcm1ZKC01MCUpO1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRlYW0tbmV4dC1idG4ge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWSgtNTAlKTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9