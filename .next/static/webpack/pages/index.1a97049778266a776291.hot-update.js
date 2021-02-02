webpackHotUpdate_N_E("pages/index",{

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



var _jsxFileName = "D:\\projects\\app-next\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/** @format */



var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(D_projects_app_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_projects_app_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, resData, bpi;
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
              bpi = resData.bpi;
              setData(bpi);

            case 8:
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
  }, [data]);
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
  }, "Welcome to Next "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVzRGF0YSIsImJwaSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLEVBRGI7QUFBQSxNQUNaQyxJQURZO0FBQUEsTUFDTkMsT0FETTs7QUFFbkIsTUFBTUMsU0FBUztBQUFBLGdRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NDLEtBQUssQ0FDdEIsbURBRHNCLENBRE47O0FBQUE7QUFDWEMsaUJBRFc7QUFBQTtBQUFBLHFCQUlLQSxHQUFHLENBQUNDLElBQUosRUFKTDs7QUFBQTtBQUlYQyxxQkFKVztBQUtYQyxpQkFMVyxHQUtMRCxPQUFPLENBQUNDLEdBTEg7QUFNakJOLHFCQUFPLENBQUNNLEdBQUQsQ0FBUDs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEwsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVFBTSx5REFBUyxDQUFDLFlBQU07QUFDZk4sYUFBUztBQUNUTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlYsSUFBOUI7QUFDQSxHQUhRLEVBR04sQ0FBQ0EsSUFBRCxDQUhNLENBQVQ7QUFJQSxTQUNDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsQ0FERDtBQUtBLENBbkJEOztHQUFNRixLOztLQUFBQSxLO0FBb0JTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYTk3MDQ5Nzc4MjY2YTc3NjI5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcblx0XHRcdCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJ1xyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHJlc0RhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0Y29uc3QgYnBpID0gcmVzRGF0YS5icGk7XHJcblx0XHRzZXREYXRhKGJwaSk7XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hEYXRhKCk7XHJcblx0XHRjb25zb2xlLmxvZygnd2FudCBkYXRhIGNhbGwnLCBkYXRhKTtcclxuXHR9LCBbZGF0YV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8aDE+V2VsY29tZSB0byBOZXh0IDwvaDE+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==