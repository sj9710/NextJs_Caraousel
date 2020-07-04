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
  }, " ", '>', " ");
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
  }, " ", '<', " ");
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
    className: "jsx-4107551075" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4107551075" + " " + "card-wrapper",
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
    className: "jsx-4107551075",
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
    className: "jsx-4107551075",
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
    className: "jsx-4107551075",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }))), __jsx("h3", {
    className: "jsx-4107551075",
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
    className: "jsx-4107551075",
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
      className: "jsx-4107551075" + " " + "team-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: ele.image,
      className: "jsx-4107551075" + " " + 'img',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }), __jsx("h2", {
      className: "jsx-4107551075",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, ele.name), __jsx("h3", {
      className: "jsx-4107551075",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, ele.degree), __jsx("p", {
      className: "jsx-4107551075",
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
  }, ".container.jsx-4107551075{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-wrapper.jsx-4107551075{width:100%;margin:60px 0 100px;max-width:800px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;text-align:center;}.img.jsx-4107551075{width :50%;height :50%;display :inherit;border-radius :50%;}.team-card.jsx-4107551075{opacity :0.7;display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-transform:scale(0.66);-ms-transform:scale(0.66);transform:scale(0.66);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-duration:0.5s;transition-duration:0.5s;}.team-card.jsx-4107551075 h2.jsx-4107551075{color:#525F7F;margin:30px 0 0 0;line-height:25px;}.team-card.jsx-4107551075 h3.jsx-4107551075{color:#525F7F;margin:8px 0px 0px 0px;}.team-card.jsx-4107551075 p.jsx-4107551075{color:rgba(82,95,127,0.497707);margin:0;margin-top:0px;font-size:16px;margin-top:10px;line-height:19px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0drQixBQUdzQixBQU1BLEFBT0UsQUFNQSxBQVNDLEFBS0EsQUFJb0IsV0FwQ3JCLEFBTU8sQUFPTixFQU1VLENBU04sQUFLSyxTQW5CSixRQVBILEFBOEJQLENBUlEsS0FLbkIsR0FuQnVCLEFBdUJOLE9BOUJHLEVBc0JwQixNQVNpQixJQXZCakIsV0F3QmtCLGVBdkNPLENBd0NOLGlCQUNuQixlQWpDb0IsYUFXSSxLQVZ4QixnREFSQSx5QkFtQnFCLDZGQUNHLDhFQUNDLG1HQUNFLDBEQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRlYW0tbmV4dC1idG5cIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPiB7Jz4nfSA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLXByZXYtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID4geyc8J30gPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6XCJ0ZWFtLXNsaWRlclwiLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSB8fCBbXSkubWFwKChlbGUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17ZWxlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntlbGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntlbGUuZGVncmVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57ZWxlLnN1YmplY3R9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogNjBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCA5NSwgMTI3LCAwLjQ5NzcwNyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLWNhcmQgPiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLXNsaWRlcntcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpY2staW5pdGlhbGl6ZWR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLW5leHQtYnRuLCAudGVhbS1wcmV2LWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogIzMzQzlEQztcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2OTYxMSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLnRlYW0tcHJldi1idG4ge1xyXG4gICAgICAvLyAgIHRvcDogNTAlO1xyXG4gICAgICAvLyAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWSgtNTAlKTtcclxuICAgICAgLy8gICBsZWZ0OiAyMHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC50ZWFtLW5leHQtYnRuIHtcclxuICAgICAgLy8gICB0b3A6IDUwJTtcclxuICAgICAgLy8gICB0cmFuc2xhdGU6IHRyYW5zZm9ybVkoLTUwJSk7XHJcbiAgICAgIC8vICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2833097675",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}.slick-current+.slick-active .team-card{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}.team-card>img{width:180px;height:180px;}.slick-prev:before,.slick-next:before{color:red;}.team-slider{margin:0px 20px;}.slick-initialized{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.team-next-btn,.team-prev-btn{color:#33C9DC;width:200px;height:40px;padding:0;z-index:4;border-radius:50%;background:#FFFFFF;box-shadow:0px 2px 4px rgba(0,0,0,0.169611);margin-top:-40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUm95XFxEZXNrdG9wXFxUYXNrXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0p5QixBQUlxQixBQVFZLEFBR1osQUFLRSxBQUtBLEFBR0ksQUFJSCxBQUtDLFVBaENMLEFBV1UsQUFVckIsRUFMZSxFQWlCRCxFQVRkLEdBckJjLEdBS2QsR0FTQSxDQWtCYyxZQUNGLFVBQ0EsVUFDUSxnQkFWQyxFQVdBLEdBM0JyQixnQkE0QmlELDRDQUM5QixjQXJDbkIsR0FzQ0YsV0FiRSIsImZpbGUiOiJDOlxcVXNlcnNcXFJveVxcRGVza3RvcFxcVGFza1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRlYW0tbmV4dC1idG5cIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPiB7Jz4nfSA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLXByZXYtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID4geyc8J30gPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6XCJ0ZWFtLXNsaWRlclwiLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSB8fCBbXSkubWFwKChlbGUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17ZWxlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntlbGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntlbGUuZGVncmVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57ZWxlLnN1YmplY3R9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogNjBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCA5NSwgMTI3LCAwLjQ5NzcwNyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLWNhcmQgPiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLXNsaWRlcntcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpY2staW5pdGlhbGl6ZWR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLW5leHQtYnRuLCAudGVhbS1wcmV2LWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogIzMzQzlEQztcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2OTYxMSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLnRlYW0tcHJldi1idG4ge1xyXG4gICAgICAvLyAgIHRvcDogNTAlO1xyXG4gICAgICAvLyAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWSgtNTAlKTtcclxuICAgICAgLy8gICBsZWZ0OiAyMHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC50ZWFtLW5leHQtYnRuIHtcclxuICAgICAgLy8gICB0b3A6IDUwJTtcclxuICAgICAgLy8gICB0cmFuc2xhdGU6IHRyYW5zZm9ybVkoLTUwJSk7XHJcbiAgICAgIC8vICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Roy\\\\Desktop\\\\Task\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXh0QXJyb3ciLCJwcm9wcyIsIm9uQ2xpY2siLCJQcmV2QXJyb3ciLCJIb21lIiwiZGF0YSIsImltYWdlIiwiaW1nIiwibmFtZSIsImRlZ3JlZSIsInN1YmplY3QiLCJzZXR0aW5ncyIsImNsYXNzTmFtZSIsImluZmluaXRlIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic3BlZWQiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJwYWRkaW5nQm90dG9tIiwibWFwIiwiZWxlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLE9BRGdCLEdBQ0pELEtBREksQ0FDaEJDLE9BRGdCO0FBRXhCLFNBQ0U7QUFDRSxhQUFTLEVBQUMsZUFEWjtBQUVFLFdBQU8sRUFBRUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBR0csR0FISCxNQURGO0FBT0Q7O0tBVFFGLFM7O0FBV1QsU0FBU0csU0FBVCxDQUFtQkYsS0FBbkIsRUFBMEI7QUFBQSxNQUNoQkMsT0FEZ0IsR0FDSkQsS0FESSxDQUNoQkMsT0FEZ0I7QUFFeEIsU0FDRTtBQUNFLGFBQVMsRUFBQyxlQURaO0FBRUUsV0FBTyxFQUFFQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFHRyxHQUhILE1BREY7QUFNRDs7TUFSUUMsUztBQVNNLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFFN0IsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFDRUMsU0FBSyxFQUFFQywrQ0FEVDtBQUVFQyxRQUFJLEVBQUUsS0FGUjtBQUdFQyxVQUFNLEVBQUUsYUFIVjtBQUlFQyxXQUFPLEVBQUU7QUFKWCxHQURXLEVBT1g7QUFDRUosU0FBSyxFQUFFQywrQ0FE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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLYSxHQUFHLENBQUNaLE1BQVQsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJWSxHQUFHLENBQUNYLE9BQVIsQ0FKRixDQURGO0FBUUQsR0FURCxDQUZKLENBVkEsQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwd1JBREY7QUEySUQ7TUE3THVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNTQ3ZTI4NWQwMDBjZDc1ZGVkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJy4uL3JveS5qcGcnXHJcblxyXG5mdW5jdGlvbiBOZXh0QXJyb3cocHJvcHMpIHtcclxuICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRlYW0tbmV4dC1idG5cIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPiB7Jz4nfSA8L2Rpdj5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJldkFycm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJ0ZWFtLXByZXYtYnRuXCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgID4geyc8J30gPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJhYmlkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZHNkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogaW1nLFxyXG4gICAgICBuYW1lOiBcIlNpZFwiLFxyXG4gICAgICBkZWdyZWU6IFwibG9yZW0gaXBzdW1cIixcclxuICAgICAgc3ViamVjdDogXCJzb21ldGhpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IGltZyxcclxuICAgICAgbmFtZTogXCJTaWRcIixcclxuICAgICAgZGVncmVlOiBcImxvcmVtIGlwc3VtXCIsXHJcbiAgICAgIHN1YmplY3Q6IFwic29tZXRoaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiBpbWcsXHJcbiAgICAgIG5hbWU6IFwiU2lkXCIsXHJcbiAgICAgIGRlZ3JlZTogXCJsb3JlbSBpcHN1bVwiLFxyXG4gICAgICBzdWJqZWN0OiBcInNvbWV0aGluZ1wiXHJcbiAgICB9IFxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBjbGFzc05hbWU6XCJ0ZWFtLXNsaWRlclwiLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgbmV4dEFycm93OiA8TmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8UHJldkFycm93IC8+XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyU2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cImh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGljay9zbGljay9zbGljay10aGVtZS5jc3NcIi8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICA8aDM+TWVldCBvdXIgVGVhY2hlcnM8L2gzPlxyXG4gICAgIDxwIHN0eWxlID17e3BhZGRpbmdCb3R0b206ICc4MHB4J319PkV4cGVydCB0ZWFjaGVycyBmcm9tIHRvcCB1bml2ZXJzaXRpZXMgd2lsbCBndWlkZSB5b3UgaW4gYWxsIHlvdXIgYWNhZGVtaWMgbmVlZHM8L3A+XHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAoZGF0YSB8fCBbXSkubWFwKChlbGUsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZSA9ICdpbWcnIHNyYz17ZWxlLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntlbGUubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntlbGUuZGVncmVlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57ZWxlLnN1YmplY3R9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogNjBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGggOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheSA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5IDogMC43O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVhbS1jYXJkIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTI1RjdGO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLWNhcmQgaDMge1xyXG4gICAgICAgICAgY29sb3I6ICM1MjVGN0Y7XHJcbiAgICAgICAgICBtYXJnaW46IDhweCAwcHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlYW0tY2FyZCBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDgyLCA5NSwgMTI3LCAwLjQ5NzcwNyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLWN1cnJlbnQgKyAuc2xpY2stYWN0aXZlIC50ZWFtLWNhcmR7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLWNhcmQgPiBpbWd7XHJcbiAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWFtLXNsaWRlcntcclxuICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2xpY2staW5pdGlhbGl6ZWR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZWFtLW5leHQtYnRuLCAudGVhbS1wcmV2LWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogIzMzQzlEQztcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE2OTYxMSk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gLnRlYW0tcHJldi1idG4ge1xyXG4gICAgICAvLyAgIHRvcDogNTAlO1xyXG4gICAgICAvLyAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWSgtNTAlKTtcclxuICAgICAgLy8gICBsZWZ0OiAyMHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIC50ZWFtLW5leHQtYnRuIHtcclxuICAgICAgLy8gICB0b3A6IDUwJTtcclxuICAgICAgLy8gICB0cmFuc2xhdGU6IHRyYW5zZm9ybVkoLTUwJSk7XHJcbiAgICAgIC8vICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==