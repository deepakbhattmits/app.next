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
      BPI = _useState[0],
      setBPI = _useState[1];

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
              setBPI(bpi);

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
    console.log('want data call', BPI);
  }, [BPI]);
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
  }, "Welcome to Next"), Object.values(BPI).map(function (el) {
    console.log('OB : ', el);
  }));
};

_s(Index, "FaxbaVR7qGe1BGBLMxoBzEotocs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsIkJQSSIsInNldEJQSSIsImZldGNoRGF0YSIsImZldGNoIiwicmVzIiwianNvbiIsInJlc0RhdGEiLCJicGkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLEVBRFg7QUFBQSxNQUNaQyxHQURZO0FBQUEsTUFDUEMsTUFETzs7QUFFbkIsTUFBTUMsU0FBUztBQUFBLGdRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0NDLEtBQUssQ0FDdEIsbURBRHNCLENBRE47O0FBQUE7QUFDWEMsaUJBRFc7QUFBQTtBQUFBLHFCQUlLQSxHQUFHLENBQUNDLElBQUosRUFKTDs7QUFBQTtBQUlYQyxxQkFKVztBQUtYQyxpQkFMVyxHQUtMRCxPQUFPLENBQUNDLEdBTEg7QUFNakJOLG9CQUFNLENBQUNNLEdBQUQsQ0FBTjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEwsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVFBTSx5REFBUyxDQUFDLFlBQU07QUFDZk4sYUFBUztBQUNUTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QlYsR0FBOUI7QUFDQSxHQUhRLEVBR04sQ0FBQ0EsR0FBRCxDQUhNLENBQVQ7QUFJQSxTQUNDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQsRUFFRVcsTUFBTSxDQUFDQyxNQUFQLENBQWNaLEdBQWQsRUFBbUJhLEdBQW5CLENBQXVCLFVBQUNDLEVBQUQsRUFBUTtBQUMvQkwsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkksRUFBckI7QUFDQSxHQUZBLENBRkYsQ0FERDtBQVFBLENBdEJEOztHQUFNaEIsSzs7S0FBQUEsSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjUyYWVkYjBmOTM2NzBiNDE0NzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHRjb25zdCBbQlBJLCBzZXRCUEldID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuXHRcdFx0J2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb24nXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblx0XHRjb25zdCBicGkgPSByZXNEYXRhLmJwaTtcclxuXHRcdHNldEJQSShicGkpO1xyXG5cdH07XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoRGF0YSgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3dhbnQgZGF0YSBjYWxsJywgQlBJKTtcclxuXHR9LCBbQlBJXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxoMT5XZWxjb21lIHRvIE5leHQ8L2gxPlxyXG5cdFx0XHR7T2JqZWN0LnZhbHVlcyhCUEkpLm1hcCgoZWwpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnT0IgOiAnLCBlbCk7XHJcblx0XHRcdH0pfVxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=