webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.jsx":
/*!*******************************!*\
  !*** ./components/Prices.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\projects\\app-next\\components\\Prices.jsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @format */


var Prices = function Prices(_ref) {
  _s();

  var bpi = _ref.bpi;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('USD'),
      currency = _useState[0],
      setCurrency = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Bitcoin rate for ", bpi[currency].description, " :", __jsx("span", {
    className: "badge badge-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, bpi[currency].code), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, bpi[currency].rate))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }), __jsx("select", {
    onChange: function onChange(e) {
      return _this.setState({
        currency: e.target.value
      });
    },
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx("option", {
    value: "USD",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, "USD"), __jsx("option", {
    value: "GBP",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "GBP"), __jsx("option", {
    value: "EUR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "EUR")));
};

_s(Prices, "IMt9glJKuY0gCtznVFnjeGsjS3E=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_projects_app_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Prices */ "./components/Prices.jsx");



var _jsxFileName = "D:\\projects\\app-next\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @format */




var Index = function Index() {
  _s();

  var _data$time;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(D_projects_app_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, resData;
      return D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              resData = _context.sent;
              setData(resData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
    console.log('want data call', data);
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, "Welcome to Next: ", data === null || data === void 0 ? void 0 : data.chartName), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, "updated at :", data === null || data === void 0 ? void 0 : (_data$time = data.time) === null || _data$time === void 0 ? void 0 : _data$time.updated), __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_5__["default"], {
    bpi: data === null || data === void 0 ? void 0 : data.bpi,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }));
};

_s(Index, "WZ2PO9A64oHRexE1CE+yX3ebuoA=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJicGkiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJJbmRleCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVzRGF0YSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjaGFydE5hbWUiLCJ0aW1lIiwidXBkYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWE7QUFBQTs7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsS0FBRCxDQURiO0FBQUEsTUFDcEJDLFFBRG9CO0FBQUEsTUFDVkMsV0FEVTs7QUFHM0IsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFDbUJILEdBQUcsQ0FBQ0UsUUFBRCxDQUFILENBQWNFLFdBRGpDLFFBRUM7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNKLEdBQUcsQ0FBQ0UsUUFBRCxDQUFILENBQWNHLElBQXJELENBRkQsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVNMLEdBQUcsQ0FBQ0UsUUFBRCxDQUFILENBQWNJLElBQXZCLENBSEQsQ0FERCxDQURELEVBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJELEVBU0M7QUFDQyxZQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxhQUFPLEtBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVOLGdCQUFRLEVBQUVLLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFyQixPQUFkLENBQVA7QUFBQSxLQURYO0FBRUMsYUFBUyxFQUFDLGNBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdDO0FBQVEsU0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUhELEVBSUM7QUFBUSxTQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkQsRUFLQztBQUFRLFNBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FMRCxDQVRELENBREQ7QUFtQkEsQ0F0QkQ7O0dBQU1YLE07O0tBQUFBLE07QUF3QlNBLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1ZLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDS1Ysc0RBQVEsRUFEYjtBQUFBLE1BQ1pXLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUVuQixNQUFNQyxTQUFTO0FBQUEsZ1FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0MsS0FBSyxDQUN0QixtREFEc0IsQ0FETjs7QUFBQTtBQUNYQyxpQkFEVztBQUFBO0FBQUEscUJBSUtBLEdBQUcsQ0FBQ0MsSUFBSixFQUpMOztBQUFBO0FBSVhDLHFCQUpXO0FBS2pCTCxxQkFBTyxDQUFDSyxPQUFELENBQVA7O0FBTGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRKLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFPQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2ZMLGFBQVM7QUFDVE0sV0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJULElBQTlCO0FBQ0EsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0JBLElBQXRCLGFBQXNCQSxJQUF0Qix1QkFBc0JBLElBQUksQ0FBRVUsU0FBNUIsQ0FERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWlCVixJQUFqQixhQUFpQkEsSUFBakIscUNBQWlCQSxJQUFJLENBQUVXLElBQXZCLCtDQUFpQixXQUFZQyxPQUE3QixDQUZELEVBR0MsTUFBQywwREFBRDtBQUFRLE9BQUcsRUFBRVosSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVaLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxDQUREO0FBT0EsQ0FwQkQ7O0dBQU1XLEs7O0tBQUFBLEs7QUFxQlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiYWI0YjNiNzlkZTY5ZmZjYjViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IFByaWNlcyA9ICh7IGJwaSB9KSA9PiB7XHJcblx0Y29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSgnVVNEJyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz5cclxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG5cdFx0XHRcdFx0Qml0Y29pbiByYXRlIGZvciB7YnBpW2N1cnJlbmN5XS5kZXNjcmlwdGlvbn0gOlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57YnBpW2N1cnJlbmN5XS5jb2RlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzdHJvbmc+e2JwaVtjdXJyZW5jeV0ucmF0ZX08L3N0cm9uZz5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8YnIgLz5cclxuXHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbmN5OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuXHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCc+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nVVNEJz5VU0Q8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdHQlAnPkdCUDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9J0VVUic+RVVSPC9vcHRpb24+XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcztcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBQcmljZXMgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljZXMnO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cdFx0XHQnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvbidcclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdHNldERhdGEocmVzRGF0YSk7XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hEYXRhKCk7XHJcblx0XHRjb25zb2xlLmxvZygnd2FudCBkYXRhIGNhbGwnLCBkYXRhKTtcclxuXHR9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxoMT5XZWxjb21lIHRvIE5leHQ6IHtkYXRhPy5jaGFydE5hbWV9PC9oMT5cclxuXHRcdFx0PGgyPnVwZGF0ZWQgYXQgOntkYXRhPy50aW1lPy51cGRhdGVkfTwvaDI+XHJcblx0XHRcdDxQcmljZXMgYnBpPXtkYXRhPy5icGl9IC8+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==