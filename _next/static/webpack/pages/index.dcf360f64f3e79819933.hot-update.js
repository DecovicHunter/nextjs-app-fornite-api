webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ForniteItem.tsx":
/*!************************************!*\
  !*** ./components/ForniteItem.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\HASEE\\Desktop\\insta-clone-mobile-app\\nextjs-fornite-api-app\\components\\ForniteItem.tsx",
    _this = undefined;



var ForniteItem = function ForniteItem(_ref) {
  var _item$item, _item$item$images;

  var item = _ref.item;
  var filledstar = Math.round(item.item.ratings.avgStars);
  var rating = Array.from({
    length: filledstar
  }, function (_, index) {
    return index;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
    href: "./item/" + item.itemId,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: "block  bg-gray-800 rounded-2xl m-2 h-full mx-4  md:w-1/4 hover:bg-gray-700 hover:z-10 transform hover:scale-105 transition-all ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full overflow-hidden",
        style: {
          minHeight: 150
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: (_item$item = item.item) === null || _item$item === void 0 ? void 0 : (_item$item$images = _item$item.images) === null || _item$item$images === void 0 ? void 0 : _item$item$images.icon,
          className: "object-cover w-full h-full",
          alt: item.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "p-4 justify-between flex-col",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-xl font-bold text-gray-100 whitespace-nowrap overflow-hidden overflow-ellipsis ",
          children: item.item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: " text-gray-300 text-sm overflow-hidden whitespace-nowrap overflow-ellipsis",
          children: item.item.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-gray-300",
          children: item.item.ratings.avgStars
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex",
          children: rating === null || rating === void 0 ? void 0 : rating.map(function (_, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/icons/star.svg",
              width: "20"
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = ForniteItem;
/* harmony default export */ __webpack_exports__["default"] = (ForniteItem);

var _c;

$RefreshReg$(_c, "ForniteItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JuaXRlSXRlbS50c3giXSwibmFtZXMiOlsiRm9ybml0ZUl0ZW0iLCJpdGVtIiwiZmlsbGVkc3RhciIsIk1hdGgiLCJyb3VuZCIsInJhdGluZ3MiLCJhdmdTdGFycyIsInJhdGluZyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsIml0ZW1JZCIsIm1pbkhlaWdodCIsImltYWdlcyIsImljb24iLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT0EsSUFBTUEsV0FBd0MsR0FBRyxTQUEzQ0EsV0FBMkMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3RCxNQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLENBQUNBLElBQUwsQ0FBVUksT0FBVixDQUFrQkMsUUFBN0IsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUVDLFVBQU0sRUFBRVI7QUFBVixHQUFYLEVBQW1DLFVBQUNTLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzlELFdBQU9BLEtBQVA7QUFDRCxHQUZjLENBQWY7QUFJQSxzQkFDRSxxRUFBQyxJQUFEO0FBQU0sUUFBSSxFQUFFLFlBQVlYLElBQUksQ0FBQ1ksTUFBN0I7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBQyxpSUFBYjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUF3QyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQS9DO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLGdCQUFFYixJQUFJLENBQUNBLElBQVAsb0VBQUUsV0FBV2MsTUFBYixzREFBRSxrQkFBbUJDLElBRDFCO0FBRUUsbUJBQVMsRUFBQyw0QkFGWjtBQUdFLGFBQUcsRUFBRWYsSUFBSSxDQUFDQSxJQUFMLENBQVVnQjtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBUUU7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHNGQUFkO0FBQUEsb0JBQ0doQixJQUFJLENBQUNBLElBQUwsQ0FBVWlCO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUcsbUJBQVMsRUFBQyw0RUFBYjtBQUFBLG9CQUNHakIsSUFBSSxDQUFDQSxJQUFMLENBQVVnQjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFPRTtBQUFHLG1CQUFTLEVBQUMsZUFBYjtBQUFBLG9CQUE4QmhCLElBQUksQ0FBQ0EsSUFBTCxDQUFVSSxPQUFWLENBQWtCQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxvQkFDR0MsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVZLEdBQVIsQ0FBWSxVQUFDUixDQUFELEVBQUlDLEtBQUo7QUFBQSxnQ0FDWDtBQUFpQixpQkFBRyxFQUFDLGlCQUFyQjtBQUF1QyxtQkFBSyxFQUFDO0FBQTdDLGVBQVVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVztBQUFBLFdBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQWpDRDs7S0FBTVosVztBQWtDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGNmMzYwZjY0ZjNlNzk4MTk5MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSUZvcm5pdGVJdGVtUHJvcHMge1xyXG4gIGl0ZW06IEl0ZW07XHJcbn1cclxuXHJcbmNvbnN0IEZvcm5pdGVJdGVtOiBSZWFjdC5GQzxJRm9ybml0ZUl0ZW1Qcm9wcz4gPSAoeyBpdGVtIH0pID0+IHtcclxuICBjb25zdCBmaWxsZWRzdGFyID0gTWF0aC5yb3VuZChpdGVtLml0ZW0ucmF0aW5ncy5hdmdTdGFycyk7XHJcbiAgY29uc3QgcmF0aW5nID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogZmlsbGVkc3RhciB9LCAoXywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e1wiLi9pdGVtL1wiICsgaXRlbS5pdGVtSWR9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJibG9jayAgYmctZ3JheS04MDAgcm91bmRlZC0yeGwgbS0yIGgtZnVsbCBteC00ICBtZDp3LTEvNCBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp6LTEwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGwgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAxNTAgfX0+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17aXRlbS5pdGVtPy5pbWFnZXM/Lmljb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcclxuICAgICAgICAgICAgYWx0PXtpdGVtLml0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGp1c3RpZnktYmV0d2VlbiBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDAgd2hpdGVzcGFjZS1ub3dyYXAgb3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWVsbGlwc2lzIFwiPlxyXG4gICAgICAgICAgICB7aXRlbS5pdGVtLm5hbWV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS0zMDAgdGV4dC1zbSBvdmVyZmxvdy1oaWRkZW4gd2hpdGVzcGFjZS1ub3dyYXAgb3ZlcmZsb3ctZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAge2l0ZW0uaXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj57aXRlbS5pdGVtLnJhdGluZ3MuYXZnU3RhcnN9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIHtyYXRpbmc/Lm1hcCgoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8aW1nIGtleT17aW5kZXh9IHNyYz1cIi9pY29ucy9zdGFyLnN2Z1wiIHdpZHRoPVwiMjBcIiAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybml0ZUl0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=